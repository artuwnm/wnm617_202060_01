
const ListPage = async() => {

	let d = await query({type:"animals_by_user_id",params:[sessionStorage.userId]})

	console.log(d)

	$("#list-page .animallist")
		.html(makeAnimalList(d.result))
}

const RecentPage = async() => {
	let d = await query({type:"recent_locations",params:[sessionStorage.userId]});

	let map_el = await makeMap("#recent-page .map");

	let valid_animals = d.result.reduce((r,o)=>{
		o.icon = o.img
		if(o.lat && o.lng) r.push(o); 
		return r;
	},[]);

	makeMarkers(map_el,valid_animals);

}

const ProfilePage = async() => {
	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

	console.log(d)

	$("#profile-page .profile")
		.html(makeUserProfile(d.result))
}

const AnimalProfilePage = async() => {
	if(sessionStorage.animalId===undefined) throw("No animal ID in Storage");

	let d = await query({type:"animal_by_id",params:[sessionStorage.animalId]});

	console.log(d)

	$("#animal-profile-page .profile-body")
		.html(makeAnimalProfile(d.result))
}