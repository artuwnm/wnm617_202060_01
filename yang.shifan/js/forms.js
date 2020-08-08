const checkListAddForm = () => {
	let name = $("#list-add-name").val();
	let cuisine = $("#list-add-cuisine").val();
	// let restaurant = $("#list-add-restaurant").val();
	let description = $("#list-add-description").val();
	let img = $("#list-add-photo").val()!=''?$("#list-add-photo").val():'https://via.placeholder.com/400/?text=FOOD';

	if (!name) {
		throw "Food name cannot be empty.";
	}
	if (!cuisine) {
		throw "Cuisine cannot be empty."
	}
	query({
		type:'insert_food',
		params:[sessionStorage.userId,name,cuisine,"restaurant",description,img]
	}).then(d=>{
		if(d.error) throw d.error;
		ListPage();
	})
}

const checkMapAddForm = () => {
	let name = $("#add-food-name").val();
	let cuisine = $("#add-food-cuisine").val();
	// let restaurant = $("#add-food-restaurant").val();
	let description = $("#add-food-description").val();
	let img = $("#add-food-photo").val()!=''?$("#add-food-photo").val():'https://via.placeholder.com/400/?text=FOOD';

	if (!name) {
		throw "Food name cannot be empty.";
	}
	if (!cuisine) {
		throw "Cuisine cannot be empty."
	}
	query({
		type:'insert_food',
		params:[sessionStorage.userId,name,cuisine,"restaurant",description,img]
	}).then(d=>{
		if(d.error) throw d.error;
		sessionStorage.animalId = d.result;
		$.mobile.navigate("#add-location-page")
	})
}


const checkListSearch = (s) => {
	query({
		type:'food_search',
		params:[`%${s}%`,`%${s}%`,`%${s}%`,sessionStorage.userId]
	}).then(d=>{
		console.log(d)
		ListPage(d)
	})
}

const checkRecentSearch = (s) => {
	query({
		type:'food_search_recent',
		params:[`%${s}%`,`%${s}%`,`%${s}%`,sessionStorage.userId]
	}).then(d=>{
		console.log(d)
		MapPage(d)
	})
}



const checkListFilter = ({filter,value}) => {
	(
		value=="" ?
		query({
			type:'food_by_user_id',
			params:[sessionStorage.userId]
		}) :
		query({
			type:'food_filter',
			params:[filter,value,sessionStorage.userId]
		})
	).then(d=>{
		console.log(d)
		ListPage(d)
	})
}

const checkUpload = async (file) => {
	let fd = new FormData();
	fd.append("image",file);

	return fetch('data/api.php',{
		method:'POST',
		body:fd
	}).then(d=>d.json())
}

const checkAddLocationForm = () => {
	let lat = +$("#add-location-lat").val();
	let lng = +$("#add-location-lng").val();
	let description = $("#add-location-description").val();
	let photo = $("#add-location-photo").val()!=''?$("#add-location-photo").val():'https://via.placeholder.com/400/?text=PIN';

	let icon = 'img/icons/map.svg';
	let animalId = sessionStorage.animalId;

	if (lat == 0 && lng == 0) {
		throw "Must pick a location.";
	}

	query({
		type:'insert_location',
		params:[animalId,lat,lng,description,photo,icon]
	}).then(d=>{
		if(d.error) throw d.error;
		$.mobile.navigate("#map-page");
	})
}

const checkSettingsProfileForm = () => {
	let name = $("#settings-profile-name").val();
	let username = $("#settings-profile-username").val();
	let email = $("#settings-profile-email").val();
	let userId = $("#settings-profile-id").val();

	query({
		type:'update_user',
		params:[name,username,email,userId]
	}).then(d=>{
		if(d.error) throw d.error;
		window.history.back();
	})
}

const checkSettingsFoodProfileForm = () => {
	let name = $("#settings-food-info-name").val();
	let cuisine = $("#settings-food-info-cuisine").val();
	// let restaurant = $("#settings-food-info-restaurant").val();
	let description = $("#settings-food-info-description").val();
	let foodId = $("#settings-food-profile-id").val();

	if (!name) {
		throw "Food name cannot be empty.";
	}
	if (!cuisine) {
		throw "Cuisine cannot be empty."
	}

	query({
		type:'update_food',
		params:[name,cuisine,"restaurant",description,foodId]
	}).then(d=>{
		if(d.error) throw d.error;
		window.history.back();
	})
}

const checkFoodDelete = id => {
	query({
		type:'delete_food',
		params:[id]
	}).then(d=>{
		if(d.error) throw d.error;
		window.history.back();
	})
}

const checkSettingsProfileUpload = async (file) => {
	let upload = $("#settings-profile-src").val();
	if(upload=="") return;
	query({
		type:'update_profile_image',
		params:[upload,sessionStorage.userId]
	}).then(d=>{
		if(d.error) throw d.error;
		window.history.back();
	})
}

const checkChangePasswordForm = () => {
	let oldPass = $("#settings-change-password-1").val();
	let newPass1 = $("#settings-change-password-2").val();
	let newPass2 = $("#settings-change-password-3").val();
	if (!oldPass) {
		throw "Password cannot be empty.";
	}	
	if (!newPass1) {
		throw "Password cannot be empty.";
	}	
	if (!newPass2) {
		throw "Password cannot be empty.";
	}
	if (newPass1 != newPass2) {
		throw "New passwords must be same.";
	}

	query({
		type:'update_password',
		params:[newPass1,sessionStorage.userId,oldPass]
	}).then(d=>{
		if(d.error) throw d.error;
		window.history.back();
	})
}
