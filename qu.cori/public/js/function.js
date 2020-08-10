// $('#add-new-buddy').on("click",function(e){
// 	console.log("add");
// 	$(this).addClass("active");
// })
// const query = (options) => {
// 	return fetch('public/data/api.php', {
// 		method: 'POST', 
// 		body: JSON.stringify(options),
// 		headers: {'Content-Type' : 'application/json'}
// 	}).then(res => res.json())          // convert to plain text
//   // .then(text => console.log(text))
// }


const query = (options) => {
	// Fetch is a Promise
	return fetch('public/data/api.php',{
		method:'POST',
		body:JSON.stringify(options),
		headers:{'Content-Type':'application/json'}
	}).then(d=>d.json());
}

//currying bind?? functions that makes functions
const templater = f => a =>
	(Array.isArray(a)?a:[a])
	//i = index, a = current array, r=the array being looped
	.reduce((r,o,i,a)=>r+f(o,i,a),"");

const checkData = (check_fn) => new Promise((resolve,reject)=>{
	let timeout = 0;
	const interior_check = () => {
		timeout++; if(timeout>10) return reject();
		return check_fn() ? resolve() : setTimeout(interior_check,10);
	}
	interior_check();
});

const makeProfile = templater(o=>`
			<div class="flex-center-column profile-info">
				<div class="profile-photo-box flex-center">
					<img src="public/uploads/${o.img}" alt="">
				</div>
				<!-- <p>Change Profile Photo</p> -->
				<p>
					<input type="hidden" id="changing-profile-src" value="${o.img}">
				</p>

			</div>
			<ul class="profile-list">
				<li class="profile-list-item flex-center">
					<span class="item-label">Username</span>
					<span class="item-content">${o.username}</span>
				</li>
				
				<li class="profile-list-item flex-center">
					<span class="item-label">Email</span>
					<span class="item-content">${o.email}</span>
				</li>
				<li class="profile-list-item flex-center">
					<span class="item-label">Intro</span>
					<span class="item-content">${o.intro}</span>
				</li>
				<li class="profile-list-item flex-center" id="user-settings">
					<span class="item-label">Settings</span>
					<span class="item-content"></span>
				</li>
				<li class="profile-list-item flex-center" id="signout-btn">
					<a href="#signin-page" class="ui-link">
						<span class="item-label">Sign Out</span>
					</a>
					<span class="item-content"></span>
				</li>
			</ul>
`)

const makeBuddyList = templater(o=>`
	<li class="buddy-photo-item" data-id="${o.id}">
		<img src="public/uploads/${o.img}" alt="">
		<div class="buddy-memory">
			<h3>${o.name}</h3>
			<p>${o.memory} memories</p>
		</div>
	</li>
`)
const makeSelectBuddyList = templater(o=>`
	<li class="buddy-photo-item" data-id="${o.id}">
		<img src="public/uploads/${o.img}" alt="">
		<div class="buddy-memory">
			<h3>${o.name}</h3>
		</div>
	</li>
`)
const makeBuddyProfile = templater((o)=>`
	
		<form class="line-style-form" action="" data-id="${o.id}">
			<div class="flex-center-column buddy-info">
				<div class="buddy-photo-box flex-center">
					<img src="public/uploads/${o.img}" alt="">
				</div>
				<p>${o.name}</p>

			</div>
			<div class="">
			    <label for="buddy-name">Name</label>
			   	<p class="content">${o.name}</p>

			</div>
			<div class="">
			    <label for="alcohol">Favorite Alcohol</label>
			   <p class="content">${o.fav_alcohol}</p>
			</div>
			<div class="">
			    <label for="bar">Favorite Bar</label>
			    <p class="content">${o.fav_place}</p>
			</div>
			<div class="flex-between memory-info">
				<p>You have <span>${o.memory}</span> memories</p>
				<div class="button-add flex-center" id="add-new-pin-buddy">
					<img src="public/img/icon/add-pin.png" alt="">
				</div>
			</div>


			
		</form>
		

	
`)
const makeEditBuddyProfile = templater(o=>`
	
		<form class="line-style-form" action="" buddy-id=${o.id}>
			<div class="flex-center-column buddy-info">
				<div class="buddy-photo-box flex-center">
					<img src="public/uploads/${o.img}" alt="">
				</div>
				<p class="flex-center-column">
					<label for="change-buddy-img">Change Photo</label>
					<input type="file" data-role="none" id="change-buddy-img" style="opacity: 0">
					<input type="hidden" id="changing-profile-src" value="${o.img}">

				</p>

			</div>
			<div class="">
			    <label for="buddy-name">Name</label>
			    <input data-role="none" type="text" name="buddy-name" id="buddy-name" value="${o.name}" required>
			</div>
			<div class="">
			    <label for="alcohol">Favorite Alcohol</label>
			    <input data-role="none" type="text" name="alcohol" id="fav-alcohol" value="${o.fav_alcohol}" required>
			</div>
			<div class="">
			    <label for="bar">Favorite Bar</label>
			    <input data-role="none" type="text" name="bar" id="fav-bar" value="${o.fav_place}" required>
			</div>
			
		</form>
	
	
`)
const makeEditUserProfile = templater(o=>`
	

			<div class="flex-center-column profile-info">
				<div class="profile-photo-box flex-center">
					<img src="public/uploads/${o.img}" alt="">
				</div>
				<p class="flex-center-column">
					<label for="upload-profile-img">Change Profile Photo</label>
					<input type="file" data-role="none" id="upload-profile-img" style="opacity: 0">
					<input type="hidden" id="settings-profile-img-src" value="${o.img}">

				</p>
			</div>
		
			<form class="line-style-form" action="">
				<div class="">
				    <label for="buddy-name">Username</label>
				    <input data-role="none" type="text" name="buddy-name" id="user-name" value="${o.username}" required="">
				</div>
				
				<div class="">
				    <label for="user-email">Email</label>
				    <input data-role="none" type="text" name="user-email" id="user-email" value="${o.email}" required="">
				</div>

				<div class="">
				    <label for="user-intro">Intro</label>
				    <input data-role="none" type="text" name="user-intro" id="user-intro" value="${o.intro}" required="">
				</div>
				
			</form>
	
	
`)
const makeMapQuickLook = templater(o=>`
	<div class="flex-center" buddy-id=${o.buddy_id} id="pin-popup-detail">
		<div class="butty-photo ">
			<img src="public/uploads/${o.img}" alt="">
		</div>
		<div class="buddy-map-intro">
			<p class="title">${o.name}</p>
			<p>Memory with <a href=""> ${o.name}</a></p>
		</div>
	</div>
		
	
	
`)
const ListPage = async() => {
	// console.log([sessionStorage.userId]);
	let d = await query({
		type:"user_by_id",
		params:[sessionStorage.userId]
	});

	// console.log(d);s

}


const MapPage = async() => {


	let map_el_buddy_location = await makeMap("#buddy-popup-info .map");
	let map_el_new_location = await makeMap("#pin-popup-map .map");

	let d = await query({type:"recent_locations",params:[sessionStorage.userId]});

	let map_el = await makeMap("#map-page #map");

	let valid_animals = d.result.reduce((r,o)=>{
		o.icon = o.img;
		if(o.lat && o.lng) r.push(o);
		return r;
	},[]);

	makeMarkers(map_el,valid_animals);

	// console.log(o,"haha");
	map_el.data("markers").forEach((o,i)=>{
		o.addListener("click",function(){
			// console.log(o,"haha");
			// INFOWINDOW EXAMPLE
			console.log(o,valid_animals[i]);
			// if($( "#pin-popup")[0].style.display === "flex") {
			// 	$( "#pin-popup")[0].style.display = "none";
			// } else
			$( "#pin-popup")[0].style.display = "flex";
			$( "#pin-popup")
				.html(makeMapQuickLook(valid_animals[i]))

			map_el.data("map").setCenter(valid_animals[i]);
			map_el.data("map").setZoom(14);
			console.log('15');
			// map_el.data("infoWindow").open(map_el.data("map"),o);
			// map_el.data("infoWindow").setContent(makeMapQuickLook(valid_animals[i]))

			// SIMPLE NAVIGATION
			// sessionStorage.animalId = valid_animals[i].animal_id;
			// $.mobile.navigate("#animal-profile-page");

			// DRAWER EXAMPLE
			// $("#recent-profile-drawer")
			// 	.toggleClass("active")
			// 	.find(".modal-body").html(makeRecentProfile(valid_animals[i]))
		})
	});
	// let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

	// console.log(d)

	// $("#profile-page .main")
	// 	.html(makeProfile(d.result))
}


const ProfilePage = async() => {
	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

	console.log(d)

	$("#profile-page>.main")
		.html(makeProfile(d.result))
}

const BuddyPage = async() => {
	// if(sessionStorage.buddyId===undefined) throw("No animal ID in Storage");

	let d = await query({type:"buddy_by_user_id",params:[sessionStorage.userId]});

	console.log(d.result.length+"buddy");
	if(!d.result.length) {
		$("#buddy-page .buddy-photo-list")[0].innerHTML = `
		<div class="flex-center-column buddy-alert">
			<p>Currently 0 buddy in the list.</p>
			<p>Adding some drinking buddies!</p>
		</div>`;
	}
	else {
		$("#buddy-page .buddy-photo-list")
		.html(makeBuddyList(d.result));
	}
	
}
const SelectBuddyPage = async() => {
	// if(sessionStorage.buddyId===undefined) throw("No animal ID in Storage");

	let d = await query({type:"buddy_by_user_id",params:[sessionStorage.userId]});
	console.log(d.result);
	if(!d.result.length) {
		$("#select-buddy-popup .buddy-photo-list")[0].innerHTML = `
		<div class="flex-center-column buddy-alert" style = "height: 100px;">
			<p>Currently 0 buddy in the list.</p>
			<p><a id="add-new-buddy-from-mappage" href = "#buddy-page">Click here</a> to add some drinking buddies!</p>
		</div>`;

		$( "#add-new-buddy-from-mappage").click(function() {
			console.log("add");
			$( "#buddy-popup")[0].style.display = "block";
			$( "#select-buddy-popup")[0].style.display = "none";
			

		});
	}
	else {
		$("#select-buddy-popup .buddy-photo-list")
		.html(makeSelectBuddyList(d.result))
	}
}

const BuddyProfilePage = async(id) => {
	// if(sessionStorage.buddyId===undefined) throw("No animal ID in Storage");

	let d = await query({type:"buddy_by_id",params:[id]});
	// console.log(d.result)
	// $("#buddy-popup-info main")
	// 	.html(makeBuddyProfile(d.result))

	let d2 = await query({type:"locations_by_buddy_id",params:[id]});
	let map_el = await makeMap("#buddy-popup-info .map");
	console.log(d2.result.length);
	makeMarkers(map_el,d2.result);
	$("#buddy-popup-info main")
		.html(makeBuddyProfile(d.result))

	$( "#add-new-pin-buddy").click(function() {
		console.log("pin");
		$( "#pin-popup-map")[0].style.display = "block";
		AddLocationPage();
		$.mobile.navigate("#map-page");

	});

	// query({type:"locations_by_buddy_id",params:[id]})
	// .then(async (d)=>{
	// 	let map_el = await makeMap("#buddy-popup-info .map");
	// 	console.log(d.result);
	// 	makeMarkers(map_el,d.result);
	// });

}


const EditBuddyProfilePage = async(id) => {

	let d = await query({type:"buddy_by_id",params:[id]});
	console.log(d);
	$("#buddy-popup-edit main")
		.html(makeEditBuddyProfile(d.result));
	$("#change-buddy-img").change(function(e){
		console.log('haha');
		console.log(e.target.value,this.files[0]);
		if(this.files[0]) {
				let file = this.files[0];

				const image = document.createElement('img');
				image.src = URL.createObjectURL(file);
				$("#buddy-popup-edit .buddy-photo-box")[0].innerHTML = `<img src='`+image.src+`'>`;
			
		}

		checkUpload(this.files[0])
		.then(d=>{	
		 	console.log(d);
		 	$("#changing-profile-src").val(d.result);
		 });
		
})

}
const AddLocationPage = async() => {
	let map_el = await makeMap("#pin-popup-map .map");

	map_el.data("map").addListener("click",function(e) {
		$("#add-location-lat").val(e.latLng.lat())
		$("#add-location-lng").val(e.latLng.lng())
		makeMarkers(map_el,[{lat:e.latLng.lat(),lng:e.latLng.lng(),icon:'public/img/icon/icon-map.png'}])
		$( "#pin-confirm-btn")[0].style.display = "flex";
	})


}

//btn

$( "#select-buddy-btn").click(function() {

	SelectBuddyPage();
	console.log("select-buddy");

	$( "#select-buddy-popup")[0].style.display = "block";

});

const SearchBuddy = async(id) => {
	// console.log([sessionStorage.userId]);
	let d = await query({type:"buddy_by_id",params:[id]});
	console.log(d.result[0].img);
	$("#map-popup .memory-photo-box")[0].innerHTML = `<img src='public/uploads/`+d.result[0].img+`'>`;
	$("#add-memory-btn").attr("data-id",id);

}

$( "#select-buddy-popup .buddy-photo-list" ).delegate( "li", "click", function(e) {
	let currentId = $(this).data("id");
	// let index = $("#select-buddy-popup .buddy-photo-item").index(e.target);
	$( "#select-buddy-popup")[0].style.display = "none";
	
	console.log(currentId);
	SearchBuddy(currentId);
	// let d = query({type:"buddy_by_id",params:[currentId]});
	// console.log(d.result);
	// $("#map-popup .memory-photo-box")[0].innerHTML = `<img src='`+image.src+`'>`;



  	
});


$( "#buddy-page .buddy-photo-list" ).delegate( "li", "click", function(e) {

	let index = $("#buddy-page .buddy-photo-item").index($(this));

	let currentId = $(this).data("id");

	$.mobile.navigate("#buddy-profile-page");
	$( "#buddy-popup-info")[0].style.display = "block";

	BuddyProfilePage(currentId);	
  	console.log(currentId);
});





$( "#pin-popup").click(function() {
	let id = $("#pin-popup-detail").attr("buddy-id");
	
	$.mobile.navigate("#buddy-profile-page");
	$( "#buddy-popup-info")[0].style.display = "block";
	BuddyProfilePage(id);

	
	

});

$( ".pin").click(function() {
	console.log("pin");
	if($( "#pin-popup")[0].style.display === "flex") {
		$( "#pin-popup")[0].style.display = "none";
	} else
	$( "#pin-popup")[0].style.display = "flex";

});

$( "#add-new-buddy").click(function() {
	console.log("add");
	$( "#buddy-popup")[0].style.display = "block";

});

$( "#add-buddy-cancel").click(function() {
	console.log("cancel");
	$( "#buddy-popup")[0].style.display = "none";

});
$( "#add-buddy-confirm").click(function() {
	console.log("confirm");
	// console.log(this.files[0]);
	let name = $("#new-buddy-name").val();
	let alcohol = $("#new-fav-alcohol").val();
	let bar = $("#new-fav-bar").val();
	let upload = $("#settings-profile-src").val();

	console.log(name,alcohol,bar,upload);

	let d = query({type:"add_buddy",params:[sessionStorage.userId, name, alcohol, bar, upload]});
	
	$( "#buddy-popup")[0].style.display = "none";
	location.reload(true);

});




$("#buddy-back-btn").click(function() {
	console.log("back");
	$( "#buddy-popup-info")[0].style.display = "none";

});


const EditUserProfilePage = async() => {
	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});
	console.log(d);
	$("#profile-popup-edit .main")
		.html(makeEditUserProfile(d.result));

	$("#upload-profile-img").change(function(e){
		console.log(e.target.value,this.files[0]);
		if(this.files[0]) {
				let file = this.files[0];

				const image = document.createElement('img');
				image.src = URL.createObjectURL(file);
				// $("#buddy-popup .buddy-photo-box")[0].appendChild(image);
				$("#profile-popup-edit .profile-photo-box")[0].innerHTML = `<img src='`+image.src+`'>`;
				// $("#buddy-popup .buddy-photo-box")[0].style
				console.log(image);

				

		}

		checkUpload(this.files[0])
		.then(d=>{	
		 	console.log(d);
		 	$("#settings-profile-img-src").val(d.result);
		 });
		
	})
}

$("#profile-edit-btn").click(function() {
	console.log("profile edit");
	EditUserProfilePage();
	$( "#profile-popup-edit")[0].style.display = "block";

});
$("#profile-cancel-btn").click(function() {
	console.log("cancel");

	$( "#profile-popup-edit")[0].style.display = "none";

});

$("#profile-savechange-btn").click(function() {
	console.log("save change");

	
	let name = $("#user-name").val();
	let email = $("#user-email").val();
	let intro = $("#user-intro").val();
	let src = $("#settings-profile-img-src").val();
	let id = sessionStorage.userId;

	if(!src) {
		console.log("ahha");
	}

	let d = query({type:"edit_user",params:[name, email, intro, src , id]});

	$( "#profile-popup-edit")[0].style.display = "none";

	location.reload(true);

});


$("#buddy-edit-btn").click(function() {
	console.log("edit");
	let currentId = $("#buddy-popup-info main form").data("id");
	EditBuddyProfilePage(currentId);
	$( "#buddy-popup-edit")[0].style.display = "block";

});
$("#buddy-cancel-btn").click(function() {
	console.log("cancel");
	$( "#buddy-popup-edit")[0].style.display = "none";

});


$("#buddy-savechange-btn").click(function() {
	console.log("save change");

	let name = $("#buddy-name").val();
	let alcohol = $("#fav-alcohol").val();
	let bar = $("#fav-bar").val();
	let src = $("#changing-profile-src").val();
	let id = $("#buddy-popup-edit form").attr("buddy-id");

	console.log(name,alcohol,bar,id);

	let d = query({type:"edit_buddy",params:[name, alcohol, bar, src , id]});



	$( "#buddy-popup-edit")[0].style.display = "none";
	$.mobile.navigate("#buddy-page");
	location.reload(true);

});

$("#buddy-delete-btn").click(function() {
	console.log("delete");
	let id = $("#buddy-popup-edit form").attr("buddy-id");
	let d = query({type:"delete_buddy",params:[id]});
	
	$( "#buddy-popup-edit")[0].style.display = "none";
	$.mobile.navigate("#buddy-page");
	location.reload(true);

});


$( "#add-new-pin").click(function() {
	console.log("pin");
	$( "#pin-popup-map")[0].style.display = "block";
	AddLocationPage();

	

});

$( "#add-pin-cancel").click(function() {
	console.log("cancel");
	$( "#map-popup")[0].style.display = "none";

});


$( "#pin-confirm-btn").click(function() {
	console.log("confirm");
	$( "#map-popup")[0].style.display = "block";

});
$( "#pin-cancel-btn").click(function() {
	console.log("cancel");
	$( "#pin-popup-map")[0].style.display = "none";

});

$( "#add-memory-btn").click(function() {
	console.log("add memory");
	let currentId = $(this).data("id");
	if(!currentId) {
		console.log("Select your drinking buddy!");
	} else {
		addMemory(currentId);
		location.reload(true);
	}
	

});

$("#upload-buddy-img").change(function(e){
		console.log(e.target.value,this.files[0]);
		if(this.files[0]) {
				let file = this.files[0];
				if(true) {
					// para.textContent = `File name ${file.name}, file size ${returnFileSize(file.size)}.`;
					// const image = $("#new-buddy-img");
					const image = document.createElement('img');
					image.src = URL.createObjectURL(file);
					// $("#buddy-popup .buddy-photo-box")[0].appendChild(image);
					$("#buddy-popup .buddy-photo-box")[0].innerHTML = `<img src='`+image.src+`'>`;
					// $("#buddy-popup .buddy-photo-box")[0].style
					console.log(image);

				} else {
					console.log("error");
				}

		}

		checkUpload(this.files[0])
		.then(d=>{	
		 	console.log(d);
		 	$("#settings-profile-src").val(d.result);
		 });
		// .then(d=>{
		// 	console.log(d)
		// 	$("#settings-profile-src").val('uploads/'+d.result);
		// 	$(".image-uploader").css({'background-image':`url('uploads/${d.result}')`})
		// })
})
$("#upload-profile-img").change(function(e){
		console.log(e.target.value,this.files[0]);
		if(this.files[0]) {
				let file = this.files[0];

				const image = document.createElement('img');
				image.src = URL.createObjectURL(file);
				// $("#buddy-popup .buddy-photo-box")[0].appendChild(image);
				$("#profile-popup-edit .profile-photo-box")[0].innerHTML = `<img src='`+image.src+`'>`;
				// $("#buddy-popup .buddy-photo-box")[0].style
				console.log(image);

				

		}

		checkUpload(this.files[0])
		.then(d=>{	
		 	console.log(d);
		 	$("#settings-profile-img-src").val(d.result);
		 });
		
})

$("#change-buddy-img").change(function(e){
		console.log('haha');
		console.log(e.target.value,this.files[0]);
		if(this.files[0]) {
				let file = this.files[0];

				const image = document.createElement('img');
				image.src = URL.createObjectURL(file);
				$("#buddy-popup-edit .buddy-photo-box")[0].innerHTML = `<img src='`+image.src+`'>`;
			
		}

		checkUpload(this.files[0])
		.then(d=>{	
		 	console.log(d);
		 	$("#changing-profile-src").val(d.result);
		 });
		
})
$( "#change-password-cancel").click(function() {
	console.log("confirm");
	$("#profile-popup-change-password")[0].style.display = 'none';

});
$( "#change-password-confirm").click(function() {
	console.log("confirm");
	var trimReg = /^\s+|\s+$/g;  
	
	let oldpassword = $("#old-password").val().replace(trimReg,"");
	let password = $("#new-password").val().replace(trimReg,"");
	let password2 = $("#new-password2").val().replace(trimReg,"");
	
	if(oldpassword===""||password==="") {
		$("#password-alert")[0].innerHTML = `<p>Passwords is required.</p>`;
	}
	else if(password!=password2) {
		$("#password-alert")[0].innerHTML = `<p>Passwords don't match.</p>`;
		throw "Passwords don't match";
		return;
	} else {
		query({
			type:'check_password',
			params:[sessionStorage.userId,oldpassword]
		}).then(d=>{
			console.log(d.result.length);
			if(d.result.length!==0) {
				query({
					type:'update_password',
					params:[password,sessionStorage.userId]
				});
				$("#profile-popup-change-password")[0].style.display = 'none';
			} else {
				$("#password-alert")[0].innerHTML = `<p>Wrong old password.</p>`;
				console.log("not find");
			}
		});
		
	}
	

});

// $('#map-search-form').change(function (e) {
// 	console.log("map search");
//   if (e.which == 13) {
//   	console.log("map search");
//     // $('form#login').submit();
//     return false;    //<---- Add this line
//   }
// });
const makeMapSearchResult = async(value) => {
	let d = await query({type:"recent_locations_search",params:[value, sessionStorage.userId]});
	console.log(d);
	let map_el = await makeMap("#map-page #map");

	let valid_animals = d.result.reduce((r,o)=>{
		o.icon = o.img;
		if(o.lat && o.lng) r.push(o);
		return r;
	},[]);

	makeMarkers(map_el,valid_animals);
}
const makeBuddySearchResult = async(value) => {
	let d = await query({type:"buddy_search",params:[value,sessionStorage.userId]});
	console.log(d);

	$("#buddy-page .buddy-photo-list")
		.html(makeBuddyList(d.result));
}

$('#map-search-form').keyup(function (e) {
	console.log("map search focus");
	if (e.which == 13) {
		console.log("map search");
		let value = $('#map-search').val();
		makeMapSearchResult(value);
		console.log(value);
		
		return false;    
	}
});

$('#buddy-search-form').keyup(function (e) {
	console.log("buddy search focus");
	if (e.which == 13) {
		console.log("buddy search");
		let value = $('#buddy-search').val();
		makeBuddySearchResult(value);
		console.log(value);
		
		return false;    
	}
});


const addMemory = async(id) => {
	console.log("haah");
	let alcohol = $("#add-today-alcohol").val();
	let bar = $("#add-today-bar").val();
	let note = $("#add-today-note").val();

	let lat = $("#add-location-lat").val();
	let lng = $("#add-location-lng").val();

	let buddyId = id;
	console.log(buddyId,lat,lng, alcohol, bar, note);
	
	if(alcohol||bar||note) {}
	$( "#pin-popup-map")[0].style.display = "none";
	$( "#map-popup")[0].style.display = "none";

	query({
			type:'add_location',
			params:[buddyId,lat,lng, alcohol, bar, note]
		}).then(d=>{
			if(d.error) throw d.error;
			console.log(d);
			// $.mobile.navigate("#signin-page");
		});

	let d = await query({type:'add_location2', params:[buddyId,lat,lng, alcohol, bar, note]});
	console.log(d);
	// query({
	// 	type:'add_location',
	// 	params:[buddyId,lat,lng, alcohol, bar, note]
	// }).then(d=>{
	// 	if(d.error) throw d.error;
	// 	// window.history.go(-1);
	// 	// $.mobile.navigate("#buddy-profile-page");
	// })
}

const checkLoginForm = async() => {
	let user = $("#login-username").val();
	let pass = $("#login-password").val();

	console.log(user,pass);

	let found_user = await query({
		type:'check_signin',
		params:[user,pass]
	})

	console.log(found_user);
	if(found_user.result.length > 0) {
		// logged in
		console.log("success");
		sessionStorage.userId = found_user.result[0].id;
		$("#signin-form")[0].reset();

	} else {
		$("#login-alert")[0].innerHTML = `<p>Incorrect Username or Password.</p>`;
		console.log("failure");
		sessionStorage.removeItem('userId');
	}

	checkUserId();
}

const checkUserId = () => {
	let p = ["#signin-page","#signup-page",""];

	if(sessionStorage.userId===undefined) {
		// not logged in
		if(!p.some(o=>window.location.hash===o))
			$.mobile.navigate("#signin-page");
	} else {
		// logged in
		BuddyPage();
		ProfilePage();
		if(p.some(o=>window.location.hash===o))
			$.mobile.navigate("#map-page");
	}
}

function checkOutEmail(e) {
	var value = e;
	var trimReg = /^\s+|\s+$/g;                            //去除首尾空格
    var emailReg = /^[\w]+\@([a-z0-9]+\.)+[a-z0-9]{2,4}$/i; //匹配邮箱格式
	value = value.replace(trimReg,"");                     //原始输入去除首尾空格

	console.log(value);
	if(value==null||value=="") {	
		$("#signup-alert")[0].innerHTML = `<p>Email is required.</p>`;
		return false;
	} 
	else if(!emailReg.test(value)) {
		$("#signup-alert")[0].innerHTML = `<p>Invalid Email Format.</p>`;
		return false;
	}
	else {
		return true;
	}
}
function checkOutName(e) {
	var value = e;
	var trimReg = /^\s+|\s+$/g;                          //去除首尾空格
    var chineseReg = /[\u4e00-\u9fa5]/g;                 //查找中文字符
	var lenReg = /^.{4,10}$/;                            //查找4~16个单字符
	value = value.replace(trimReg,"").replace(chineseReg,"ha");//原始输入去除首尾空格，将中文字符长度转换为2


	console.log(value);
	if(value==null||value=="") {
		$("#signup-alert")[0].innerHTML = `<p>Username is required.</p>`;
		return false;
	}
	else if(!lenReg.test(value)) {
		$("#signup-alert")[0].innerHTML = `<p>Invalid Username. Username length must be 4 to 10 characters.</p>`;
		return false;
	}
	else {
		return true;
	}
}
const checkSignupForm = () => {
	console.log("checkSignupForm");
	var trimReg = /^\s+|\s+$/g;  
	let username = $("#signup-username").val().replace(trimReg,"");
	let email = $("#signup-email").val().replace(trimReg,"");
	let password = $("#signup-password").val().replace(trimReg,"");
	let password2 = $("#signup-password2").val().replace(trimReg,"");

	if(!checkOutName(username)) {
		// $("#signup-alert")[0].innerHTML = `<p>Username is required.</p>`;
	}
	else if(!checkOutEmail(email)) {
		// $("#signup-alert")[0].innerHTML = `<p>Email is required.</p>`;
	}
	else if(password==="") {
		$("#signup-alert")[0].innerHTML = `<p>Passwords is required.</p>`;
	}
	else if(password!=password2) {
		$("#signup-alert")[0].innerHTML = `<p>Passwords don't match.</p>`;
		throw "Passwords don't match";
		return;
	} else {
		$("#signup-alert")[0].innerHTML = '';
		query({
			type:'insert_user',
			params:[username,email,password]
		}).then(d=>{
			if(d.error) $("#signup-alert")[0].innerHTML = `<p>Username or Email already exists.</p>`;
			if(d.error) throw d.error;

			// d.result == new user id
			$.mobile.navigate("#signin-page");
			location.reload(true);
		});
	}
}




const checkAddLocationForm = () => {
	let lat = +$("#add-location-lat").val();
	let lng = +$("#add-location-lng").val();
	let description = $("#add-location-description").val();
	let animalId = sessionStorage.animalId;

	query({
		type:'insert_location',
		params:[animalId,lat,lng,description]
	}).then(d=>{
		if(d.error) throw d.error;
		window.history.go(-2);
		// $.mobile.navigate("#animal-profile-page");
	})
}


const checkUpload = async (file) => {
	var fileField = document.querySelector("input[type='file']");
	let fd = new FormData();
	fd.append("image",file);
	console.log(file,fileField.files[0]);
	return fetch("public/data/api.php",{
		method:"POST",
		body:fd
	})
	.then(d=>d.json())
	// .then(d=>{console.log(d); return d.json();})
	// .catch(error => console.error('Error:', error))
	// .then(response => console.log('Success:', response));
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

