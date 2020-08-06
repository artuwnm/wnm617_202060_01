const ListPage = async(d=0) => {

	if(!d) d = await query({type:"food_by_user_id",params:[sessionStorage.userId]})

	console.log(d)

	$("#list-page .food-list")
		.html(
			d.result.length ?
				makeFoodList(d.result) :
				emptyFoodListMessage()
	);

	$("#list-page .list-filters").html(listFilters(d.result));

	$("#list-add-form .scrollable").html(makeFoodInfoInputs({
		name:'',
		cuisine:'',
		restaurant:'',
		description:''
	}))
}

const MapPage = async(d=0) => {
	if (!d) d = await query({type:"recent_locations",params:[sessionStorage.userId]});

	let map_el = await makeMap("#map-page .map");
	let valid_food = d.result.reduce((r,o)=>{
		o.icon = o.img;
		if(o.lat && o.lng) r.push(o);
		return r;
	},[]);
	makeMarkers(map_el,valid_food);

	map_el.data("markers").forEach((o,i)=>{
		o.addListener("click",function(){
			// INFOWINDOW EXAMPLE
			map_el.data("infoWindow").open(map_el.data("map"),o);
			map_el.data("infoWindow").setContent(makeMapProfile(valid_food[i]))

			// SIMPLE NAVIGATION
			// sessionStorage.animalId = valid_animals[i].animal_id;
			// $.mobile.navigate("#animal-profile-page");

			// DRAWER EXAMPLE
			// $("#map-profile-drawer")
			// 	.toggleClass("active")
			// 	.find(".modal-body").html(makeMapProfile(valid_food[i]))
		})
	});
}

const ProfilePage = async() => {
	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

	console.log(d)

	$("#profile-page .profile")
		.html(makeUserProfile(d.result[0]));
}

const FoodInfoPage = async() => {
	if(sessionStorage.foodId===undefined) throw("No food ID in Storage");

	query({type:"food_by_id",params:[sessionStorage.foodId]})
	.then(d=>{
		$("#food-info-page .food-info").html(makeFoodInfo(d.result[0]));
	});

	// query({type:"locations_by_food_id",params:[sessionStorage.foodId]})
	// .then(async (d)=>{
	// 	let map_el = await makeMap("#food-info-page .map");
	// 	makeMarkers(map_el,d.result);
	// });
}

const SettingsProfileUploadPage = async() => {
	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

	$("#settings-profile-upload-form .image-uploader")
		.css('background-image',`url('${d.result[0].img}')`);
}
