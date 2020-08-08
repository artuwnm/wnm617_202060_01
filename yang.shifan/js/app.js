$(()=>{

	checkUserId();

	// EVENT DELEGATION
	$(document)

	// ROUTING
	.on( "pagecontainerbeforeshow", function( e, ui ) {
		switch(ui.toPage[0].id) {
			case "map-page": MapPage(); break;
			case "list-page": ListPage(); break;
			case "profile-page": ProfilePage(); break;
			case "food-info-page": FoodInfoPage(); break;
			case "map-add-choose-food-page": ChooseFoodPage(); break;
			case "add-food-page": AddFoodPage(); break;
			case "add-location-page": AddLocationPage(); break;
			case "settings-profile-page": SettingsProfilePage(); break;
			case "settings-food-profile-page": SettingsFoodProfilePage(); break;
			case "settings-profile-upload-page": SettingsProfileUploadPage(); break;

		}
	})


	// FORM SUBMISSIONS
	.on("submit","#signin-form",function(e){
		e.preventDefault();
		checkLoginForm();
	})

	.on("submit","#signup-form",function(e){
		e.preventDefault();
		checkSignupForm();
	})

	.on("submit","#list-add-form",function(e){
		e.preventDefault();
		checkListAddForm();
	})

	.on("submit","#list-search",function(e){
		e.preventDefault();
		checkListSearch($(this).find(".search").val());
	})

	.on("submit","#recent-search",function(e){
		e.preventDefault();
		checkRecentSearch($(this).find(".search").val());
	})

	.on("change","#add-location-photo-upload",function(e){
		if (this.files[0]) { 
			checkUpload(this.files[0])
			.then(d=>{
				console.log(d)
				$("#add-location-photo").val('uploads/'+d.result);
				$("#add-location-image-picker").hide();
				$("#add-location-photo-preview").attr('src', `uploads/${d.result}`).addClass("picked");
			})
		}
	})

	.on("change","#list-add-food-photo-upload",function(e){
		if (this.files[0]) { 
			checkUpload(this.files[0])
			.then(d=>{
				$("#list-add-photo").val('uploads/'+d.result);
				$("#list-add-image-picker").hide();
				$("#list-add-photo-preview").attr('src', `uploads/${d.result}`).addClass("picked");
			})
		}
	})

	.on("change","#add-food-food-photo-upload",function(e){
		if (this.files[0]) { 
			checkUpload(this.files[0])
			.then(d=>{
				$("#add-food-photo").val('uploads/'+d.result);
				$("#add-food-image-picker").hide();
				$("#add-food-photo-preview").attr('src', `uploads/${d.result}`).addClass("picked");
			})
		}
	})

	.on("change","#settings-food-info-food-photo-upload",function(e){
		if (this.files[0]) { 
			checkUpload(this.files[0])
			.then(d=>{
				$("#settings-food-info-photo").val('uploads/'+d.result);
				$("#settings-food-info-image-picker").hide();
				$("#settings-food-info-photo-preview").attr('src', `uploads/${d.result}`).addClass("picked");
			})
		}
	})

	.on("change","#profile-upload",function(e){
		console.log(e)
		checkUpload(this.files[0])
		.then(d=>{
			console.log(d)
			$("#settings-profile-src").val('uploads/'+d.result);
			$("#settings-profile-upload-form .image-uploader").css('background-image',`url('uploads/${d.result}')`);
		})
	})


	// CLICKS
	.on("click",".js-logout",function(e){
		sessionStorage.removeItem('userId');
		checkUserId();
	})

	.on("click",".food-jump",function(e){
		if(!$(this).data("id")) throw("No data ID on Element");

		sessionStorage.foodId = $(this).data("id");
		$.mobile.navigate("#food-info-page")
	})

	.on("click",".js-choose-food",function(e){
		sessionStorage.animalId = $("#add-location-food-id").val();
		$.mobile.navigate("#add-location-page");
	})
	.on("click",".js-submit-settings-food-profile",function(e){
		e.preventDefault();
		checkSettingsFoodProfileForm();
	})
	.on("click",".js-submit-add-location",function(e){
		e.preventDefault();
		checkAddLocationForm();
	})
	.on("click",".js-submit-map-add-food",function(e){
		e.preventDefault();
		checkMapAddForm();
	})
	.on("click",".js-submit-change-password",function(e){
		e.preventDefault();
		checkChangePasswordForm();
	})

	.on("click","[data-filter]",function(e){
		e.preventDefault();
		checkListFilter($(this).data())
	})

	.on("click",".js-submit-settings-profile",function(e){
		e.preventDefault();
		checkSettingsProfileForm();
	})
	.on("click",".js-submit-settings-profile-upload",function(e){
		e.preventDefault();
		checkSettingsProfileUpload();
	})

	.on("click",".js-delete-food",function(e){
		e.preventDefault();
		checkFoodDelete($(this).data("id"));
	})

	.on("click", ".mapAddFoodOrLocation",function(e){
		e.preventDefault();
		document.getElementById("addDropdown").classList.toggle("show");
	})


	// ACTIVATE TOOLS
	.on("click","[data-activate]",function(e){
		$($(this).data("activate")).addClass("active");
	})
	.on("click","[data-deactivate]",function(e){
		$(this).data("deactivate").split(" ").forEach(function(id) {
			$(id).removeClass("active");
		});
	})
	.on("click","[data-toggle]",function(e){
		$($(this).data("toggle")).toggleClass("active");
	})
	.on("click","[data-activateone]",function(e){
		$($(this).data("activateone")).addClass("active")
			.siblings().removeClass("active");
	})

	$("[data-template]").each(function(){
		$(this).html($($(this).data("template")).html());
	})

});


window.onclick = function(event) {
	  if (!event.target.matches('.mapAddFoodOrLocation')) {
	    var dropdowns = document.getElementsByClassName("dropdown-content");
	    var i;
	    for (i = 0; i < dropdowns.length; i++) {
	      var openDropdown = dropdowns[i];
	      if (openDropdown.classList.contains('show')) {
	        openDropdown.classList.remove('show');
	      }
	    }
	  }
	}