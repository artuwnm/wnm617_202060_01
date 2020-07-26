const ListPage = async() => {

	let d = await query({type:"food_by_user_id",params:[sessionStorage.userId]})

	console.log(d)

	$("#list-page .food-list")
		.html(makeFoodList(d.result))
}

const MapPage = async() => {
	let d = await query({type:"recent_locations",params:[sessionStorage.userId]});
	console.log(d);

	let map_el = await makeMap("#map-page .map");
	let valid_food = d.result.reduce((r,o)=>{
		o.icon = o.img;
		if(o.lat && o.lng) r.push(o);
		return r;
	},[]);
	makeMarkers(map_el,valid_food);
}

const ProfilePage = async() => {
	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

	console.log(d)

	$("#profile-page .profile")
		.html(makeUserProfile(d.result))
}

const FoodInfoPage = async() => {
	if(sessionStorage.foodId===undefined) throw("No food ID in Storage");

	let d = await query({type:"food_by_id",params:[sessionStorage.foodId]});
	query({type:"food_by_id",params:[sessionStorage.animalId]})
	.then(d=>{
		$("#food-info-page .profile-head").html(makeFoodInfo(d.result));
	});

	query({type:"locations_by_food_id",params:[sessionStorage.animalId]})
	.then(async (d)=>{
		let map_el = await makeMap("#food-info-page .map");
		makeMarkers(map_el,d.result)
	});
}
