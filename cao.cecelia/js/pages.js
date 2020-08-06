const ListPage = async(d=0) => {
	if(!d) d = await query({type:"alcohols_by_user_id",params:[sessionStorage.userId]})

	$("#list-page .alcohollist").html(
		d.result.length ?
			makeAlcoholList(d.result) :
			"You need to add some alcohols, jack."
	);

	$("#list-page .list-filters").html(listFilters(d.result));

	$("#list-add-alcohol-form .inputs").html(makeAddAlcoholProfileInputs({
		name:'',
		type:'',
		alcoholpercent:'',
		description:''
	}))
}


const AddingAlcoholLocationPage = async(d=0) => {
	if(!d) d = await query({type:"alcohols_by_user_id",params:[sessionStorage.userId]})

	$("#list-add-location-page .alcohollist").html(
		d.result.length ?
			makeChooseAlcoholList(d.result) :
			"You need to add some alcohols, jack."
	);

}

const AddingPage = async() => {
	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

	$("#list-add-alcohol-form .inputs").html(makeAddAlcoholProfileInputs({
		name:'',
		type:'',
		alcoholpercent:'',
		description:''
	}))
}


// const AddLocationSettingPage = async() => {

// 	let d = await query({type:"alcohols_by_user_id",params:[sessionStorage.userId]})

// 	console.log(d)

// 	$("#add-location-list-page .alcohollist")
// 		.html(makeAnimalList(d.result))
// }



const RecentPage = async(d=0) => {
	if(!d) d = await query({type:"recent_locations",params:[sessionStorage.userId]});

	let map_el = await makeMap("#recent-page .map");

	let valid_alcohols = d.result.reduce((r,o)=>{
		o.icon = o.img;
		if(o.lat && o.lng) r.push(o);
		return r;
	},[]);

	// console.log(d.result,valid_alcohols)

	makeMarkers(map_el,valid_alcohols);

	map_el.data("markers").forEach((o,i)=>{
		o.addListener("click",function(){
			// INFOWINDOW EXAMPLE
			map_el.data("infoWindow").open(map_el.data("map"),o);
			map_el.data("infoWindow").setContent(makeRecentProfile(valid_alcohols[i]))

			// SIMPLE NAVIGATION
			// sessionStorage.alcoholId = valid_alcohols[i].alcohol_id;
			// $.mobile.navigate("#alcohol-profile-page");

			// DRAWER EXAMPLE
			// $("#recent-profile-drawer")
			// 	.toggleClass("active")
			// 	.find(".modal-body").html(makeRecentProfile(valid_alcohols[i]))
		})
	});
}

const ProfilePage = async() => {
	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

	$("#user-profile-modal .profile")
				.html(makeUserProfile(d.result[0]));

	
}

// const ProfilePage = async() => {
// 	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

// 	$("#profile-page .profile")
// 		.html(makeUserProfile(d.result[0]));
// }

const AlcoholProfilePage = async() => {
	if(sessionStorage.alcoholId===undefined) throw("No alcohol ID in Storage");

	query({type:"alcohol_by_id",params:[sessionStorage.alcoholId]})
	.then(d=>{
		$("#alcohol-profile-page .profile-content")
			.html(makeAlcoholProfile(d.result[0]));
	});

	query({type:"locations_by_alcohol_id",params:[sessionStorage.alcoholId]})
	.then(async (d)=>{
		let map_el = await makeMap("#alcohol-profile-page .map");

		makeMarkers(map_el,d.result);
	});
}




const SettingsProfilePage = async() => {
	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

	$("#settings-profile-id").val(sessionStorage.userId);
	$("#settings-profile-page .inputs")
		.html(makeSettingsProfileInputs(d.result[0]));
}
const SettingsAlcoholProfilePage = async() => {
	let d = await query({type:"alcohol_by_id",params:[sessionStorage.alcoholId]});

	$("#settings-alcohol-profile-id").val(sessionStorage.alcoholId);
	$("#settings-alcohol-profile-page .inputs")
		.html(makeAlcoholProfileInputs(d.result[0],'settings-alcohol-profile'));
}




const AddLocationPage = async() => {
	let map_el = await makeMap("#add-location-page .map");

	map_el.data("map").addListener("click",function(e) {
		$("#add-location-lat").val(e.latLng.lat())
		$("#add-location-lng").val(e.latLng.lng())
		makeMarkers(map_el,[{lat:e.latLng.lat(),lng:e.latLng.lng(),icon:'https://via.placeholder.com/40?text=PIN'}])
	})
}

const SettingsProfileUploadPage = async() => {
	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

	$("#settings-profile-upload-form .image-uploader")
		.css('background-image',`url('${d.result[0].img}')`);
}

const SettingsAlcoholUploadPage = async() => {
	let d = await query({type:"alcohol_by_id",params:[sessionStorage.userId]});

	$("#settings-alcohol-upload-form .image-uploader")
		.css('background-image',`url('${d.result[0].img}')`);
}