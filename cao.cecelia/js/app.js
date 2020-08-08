$(()=>{

	checkUserId();

	// EVENT DELEGATION
	$(document)


	// ROUTING
	.on( "pagecontainerbeforeshow", function( e, ui ) {
		switch(ui.toPage[0].id) {
			case "recent-page": RecentPage(); break;
			case "list-page": ListPage(); break;
			
			case "alcohol-profile-page": AlcoholProfilePage(); break;

			case "list-add-alcohol-page": AddingPage(); break;
			case "list-add-location-page": AddingAlcoholLocationPage(); break;

			case "add-location-page": AddLocationPage(); break;

			case "settings-profile-page": SettingsProfilePage(); break;
			case "settings-alcohol-profile-page": SettingsAlcoholProfilePage(); break;


			case "settings-profile-upload-page": SettingsProfileUploadPage(); break;

			case "settings-alcohol-upload-page": SettingsAlcoholUploadPage(); break;
			// case "user-profile-modal": ProfilePage(); break;

		}
	})


	.on("change","#list-add-photo-upload",function(e){
		console.log(e)
		checkUpload(this.files[0])
		.then(d=>{
			console.log(d)
			$("#list-add-photo").val('uploads/'+d.result);
			$("#add-location-info-form .imagepicker")
      		.addClass("picked")
      		.css({'background-image':`url('uploads/${d.result}')`})
		})
	})


	
	// FORM SUBMISSIONS
	.on("submit","#signin-form",function(e){
		e.preventDefault();
		checkSigninForm();
	})
	.on("submit","#signup-form",function(e){
		e.preventDefault();
		checkSignupForm();
	})
	.on("submit","#list-add-form",function(e){
		e.preventDefault();
		checkListAddForm();
	})
	.on("submit","#list-add-alcohol-form",function(e){
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






	/* CHANGE */
	.on("change","#settings-profile-upload-form input",function(e){
		console.log(e)
		checkUpload(this.files[0])
		.then(d=>{
			console.log(d)
			$("#settings-profile-src").val('uploads/'+d.result);
			$(".image-uploader").css({'background-image':`url('uploads/${d.result}')`})
		})
	})

	.on("change","#settings-alcohol-upload-form input",function(e){
		console.log(e)
		checkUpload(this.files[0])
		.then(d=>{
			console.log(d)
			$("#settings-alcohol-src").val('uploads/'+d.result);
			$(".image-uploader").css({'background-image':`url('uploads/${d.result}')`})
		})
	})


	// CLICKS
	.on("click",".js-logout",function(e){
		sessionStorage.removeItem('userId');
		checkUserId();
	})

	.on("click",".alcohol-jump",function(e){
		if(!$(this).data("id")) throw("No data ID on Element");

		sessionStorage.alcoholId = $(this).data("id");
		$.mobile.navigate("#alcohol-profile-page")
	})

	.on("click",".js-submit-settings-alcohol-profile",function(e){
		e.preventDefault();
		checkSettingsAlcoholProfileForm();
	})

	.on("click",".js-submit-adding-alcohol-profile",function(e){
		e.preventDefault();
		checkListAddForm();
	})

	.on("click",".js-submit-settings-profile",function(e){
		e.preventDefault();
		checkSettingsProfileForm();
	})



	// .on("click",".js-submit-settings-profile",function(e){
	// 	e.preventDefault();
	// 	checkSettingsProfileForm();
	// })

	.on("click",".js-submit-settings-profile-upload",function(e){
		e.preventDefault();
		checkSettingsProfileUpload();
	})

	.on("click",".js-submit-settings-alcohol-upload",function(e){
		e.preventDefault();
		checkSettingsAlcoholUpload();
	})

	.on("click",".js-submit-add-location",function(e){
		e.preventDefault();
		checkAddLocationForm();
	})

	.on("click",".js-submit-add-location-recent",function(e){
		e.preventDefault();
		checkAddLocationRecentForm();
	})

	.on("click",".js-submit-recent-add-alcohol",function(e){
		e.preventDefault();
		checkRecentAddForm();
	})
	.on("click",".js-delete-alcohol",function(e){
		e.preventDefault();
		checkAlcoholDelete($(this).data("id"));
	})



	.on("click","[data-filter]",function(e){
		e.preventDefault();
		checkListFilter($(this).data())
	})
	
	// .on("click",".profile",function(e){
	// 	if(!$(this).data("id")) throw("No data ID on Element");

	// 	sessionStorage.userId = $(this).data("id");
	// 	$.mobile.navigate("#user-profile")
	// })



	// ACTIVATE TOOLS
	.on("click","[data-activate]",function(e){
		$($(this).data("activate")).addClass("active").trigger("classChange");
    })
	.on("click","[data-deactivate]",function(e){
		$($(this).data("deactivate")).removeClass("active");
	})
	.on("click","[data-toggle]",function(e){
		$($(this).data("toggle")).toggleClass("active");
	})
	.on("click","[data-activateone]",function(e){
		$($(this).data("activateone")).addClass("active")
			.siblings().removeClass("active");
	})
	
	;



	$("[data-template]").each(function(){
		$(this).html($($(this).data("template")).html());
	})

	$("#user-profile-modal").on("classChange", function (e) {
    if ($(this).hasClass("active")) {
      ProfilePage();
    }
  });

});