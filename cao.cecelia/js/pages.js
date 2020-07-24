const ListPage = async() => {

	let d = await query({type:"alcohols_by_user_id",params:[sessionStorage.userId]})

	console.log(d)

	$("#list-page .alcohollist")
		.html(makeAlcoholList(d.result))
}

const RecentPage = async() => {
	let d = await query({type:"recent_locations",params:[sessionStorage.userId]});

	let map_el = await makeMap("#recent-page .map");

	let valid_alcohols = d.result.reduce((r,o)=>{
		o.icon = o.img;
		if(o.lat && o.lng) r.push(o);
		return r;
	},[]);

	makeMarkers(map_el,valid_alcohols);
}

const ProfilePage = async() => {
	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

	console.log(d)

	$("#profile-page .profile")
		.html(makeUserProfile(d.result))
}

const AnimalProfilePage = async() => {
	if(sessionStorage.animalId===undefined) throw("No animal ID in Storage");

	query({type:"alcohol_by_id",params:[sessionStorage.animalId]})
	.then(d=>{
		$("#alcohol-profile-page .profile-head")
			.html(makeAlcoholProfile(d.result));
	});

	query({type:"locations_by_alcohol_id",params:[sessionStorage.animalId]})
	.then(async (d)=>{
		let map_el = await makeMap("#alcohol-profile-page .map");

		makeMarkers(map_el,d.result)
	});
}