const checkListAddForm = () => {
	let name = $("#list-add-name").val();
	let type = $("#list-add-type").val();
	let breed = $("#list-add-breed").val();
	let description = $("#list-add-description").val();

	query({
		type:'insert_alcohol',
		params:[sessionStorage.userId,name,type,breed,description]
	}).then(d=>{
		if(d.error) throw d.error;
		ListPage();
	})
}

const checkSettingsAlcoholProfileForm = () => {
	let name = $("#settings-alcohol-profile-name").val();
	let type = $("#settings-alcohol-profile-type").val();
	let breed = $("#settings-alcohol-profile-alcoholpercent").val();
	let description = $("#settings-alcohol-profile-description").val();
	let animalId = $("#settings-alcohol-profile-id").val();

	query({
		type:'update_alcohol',
		params:[name,type,alcoholpercent,description,alcohollId]
	}).then(d=>{
		if(d.error) throw d.error;
		window.history.back();
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

const checkAddLocationForm = () => {
	let lat = +$("#add-location-lat").val();
	let lng = +$("#add-location-lng").val();
	let description = $("#add-location-description").val();
	let animalId = sessionStorage.animalId;

	query({
		type:'insert_location',
		params:[alcoholId,lat,lng,description]
	}).then(d=>{
		if(d.error) throw d.error;
		window.history.go(-2);
		// $.mobile.navigate("#alaochol-profile-page");
	})
}


const checkAlcoholDelete = id => {
	query({
		type:'delete_alcohol',
		params:[id]
	}).then(d=>{
		if(d.error) throw d.error;
		window.history.back();
	})
}