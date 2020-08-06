// const checkListAddForm = () => {
// 	let name = $("#list-add-name").val();
// 	let type = $("#list-add-type").val();
// 	let alcoholpercent = $("#list-add-alcoholpercent").val();
// 	let description = $("#list-add-description").val();

// 	query({
// 		type:'insert_alcohol',
// 		params:[sessionStorage.userId,name,type,alcoholpercent,description]
// 	}).then(d=>{
// 		if(d.error) throw d.error;
// 		ListPage();
// 	})
// }

const checkListAddForm = () => {
	let name = $("#list-add-name").val();
	let type = $("#list-add-type").val();
	let alcoholpercent = $("#list-add-alcoholpercent").val();
	let description = $("#list-add-description").val();

	query({
		type:'insert_alcohol',
		params:[sessionStorage.userId,name,type,alcoholpercent,description]
	}).then(d=>{
		if(d.error) throw d.error;
		window.history.go(-2);
	})
}

const checkSettingsAlcoholProfileForm = () => {
	let name = $("#settings-alcohol-profile-name").val();
	let type = $("#settings-alcohol-profile-type").val();
	let alcoholpercent = $("#settings-alcohol-profile-alcoholpercent").val();
	let description = $("#settings-alcohol-profile-description").val();
	let alcoholId = $("#settings-alcohol-profile-id").val();

	query({
		type:'update_alcohol',
		params:[name,type,alcoholpercent,description,alcoholId]
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
	let alcoholId = sessionStorage.alcoholId;

	query({
		type:'insert_location',
		params:[alcoholId,lat,lng,description]
	}).then(d=>{
		if(d.error) throw d.error;
		window.history.go(-1);
		// $.mobile.navigate("#alcohol-profile-page");
	})
}

const checkAddLocationRecentForm = () => {
	let lat = +$("#add-location-lat").val();
	let lng = +$("#add-location-lng").val();
	let description = $("#add-location-description").val();
	let alcoholId = sessionStorage.alcoholId;

	query({
		type:'insert_location',
		params:[alcoholId,lat,lng,description]
	}).then(d=>{
		if(d.error) throw d.error;
		window.history.go(-3);
		// $.mobile.navigate("#alcohol-profile-page");
	})
}


const checkAlcoholDelete = id => {
	query({
		type:'delete_alcohol',
		params:[id]
	}).then(d=>{
		if(d.error) throw d.error;
		window.history.go(-2);
	})
}







const checkListSearch = (s) => {
	query({
		type:'alcohol_search',
		params:[`%${s}%`,`%${s}%`,`%${s}%`,sessionStorage.userId]
	}).then(d=>{
		console.log(d)
		ListPage(d)
	})
}
const checkRecentSearch = (s) => {
	query({
		type:'alcohol_search_recent',
		params:[`%${s}%`,`%${s}%`,`%${s}%`,sessionStorage.userId]
	}).then(d=>{
		console.log(d)
		RecentPage(d)
	})
}



const checkListFilter = ({filter,value}) => {
	(
		value=="" ?
		query({
			type:'alcohols_by_user_id',
			params:[sessionStorage.userId]
		}) :
		query({
			type:'alcohol_filter',
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


const checkSettingsAlcoholUpload = async (file) => {
	let upload = $("#settings-alcohol-src").val();
	if(upload=="") return;
	query({
		type:'update_alcohol_image',
		params:[upload,sessionStorage.alcoholId]
	}).then(d=>{
		if(d.error) throw d.error;
		window.history.back();
	})


}