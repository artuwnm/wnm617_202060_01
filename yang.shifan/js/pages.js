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
	let user = await query({type:"user_by_id",params:[sessionStorage.userId]});
	let food = await query({type:"food_by_user_id",params:[sessionStorage.userId]});
	let locations = await query({type:"locations_by_user_id",params:[sessionStorage.userId]});

	$("#profile-page .profile")
		.html(makeUserProfile(user.result[0],food.result,locations.result));
}

const FoodInfoPage = async() => {
	if(sessionStorage.foodId===undefined) throw("No food ID in Storage");

	let food = await query({type:"food_by_id",params:[sessionStorage.foodId]})
	let locations = await query({type:"locations_by_food_id",params:[sessionStorage.foodId]})
	
	$("#food-profile-page h1").html(food.result[0].name)

	$("#food-info-page .food-info").html(makeFoodInfo(food.result[0],locations.result));
	let map_el = await makeMap("#food-info-page .map");
	makeMarkers(map_el,locations.result);
}

const AddLocationPage = async() => {
	let map_el = await makeMap("#add-location-page .map");

	map_el.data("map").addListener("click",function(e) {
		$("#add-location-lat").val(e.latLng.lat())
		$("#add-location-lng").val(e.latLng.lng())
		makeMarkers(map_el,[{lat:e.latLng.lat(),lng:e.latLng.lng(),icon:'https://via.placeholder.com/40?text=PIN'}])
	})

	console.log(map_el)
	console.log(map_el[0])
	console.log(map_el.data("map"))
}


const SettingsProfileUploadPage = async() => {
	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

	$("#settings-profile-upload-form .image-uploader")
		.css('background-image',`url('${d.result[0].img}')`);
}

const ChooseFoodPage = async () => {
	let animals = await query({type:'food_by_user_id',params:[sessionStorage.userId]});

	$("#add-location-food-id").html(makeSelectOptions(animals.result.map(o=>([o.id,o.name]))));
}

const AddFoodPage = async(d=0) => {
	$("#add-food-form .inputs").html(makeFoodInfoInputs({
		name:'',
		cuisine:'',
		restaurant:'',
		description:''
	},'add-food'))
}

const SettingsProfilePage = async() => {
	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

	$("#settings-profile-id").val(sessionStorage.userId);
	$("#settings-profile-page .inputs")
		.html(makeSettingsProfileInputs(d.result[0]));
}

const SettingsFoodProfilePage = async() => {
	let d = await query({type:"food_by_id",params:[sessionStorage.foodId]});

	$("#settings-food-profile-id").val(sessionStorage.foodId);
	$("#settings-food-profile-page .inputs")
		.html(makeFoodInfoInputs(d.result[0],'settings-food-info'));
}



