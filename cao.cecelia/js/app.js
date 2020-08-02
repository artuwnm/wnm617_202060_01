$(()=>{

	checkUserId();

	// EVENT DELEGATION
	$(document)


	// ROUTING
	.on( "pagecontainerbeforeshow", function( e, ui ) {
		switch(ui.toPage[0].id) {
			case "recent-page": RecentPage(); break;
			case "list-page": ListPage(); break;
			case "profile-page": ProfilePage(); break;
			case "alcohol-profile-page": AlcoholProfilePage(); break;

			case "add-location-page": AddLocationPage(); break;

			case "settings-profile-page": SettingsProfilePage(); break;
			case "settings-alcohol-profile-page": SettingsAlcoholProfilePage(); break;

		}
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

	.on("click",".js-submit-settings-profile",function(e){
		e.preventDefault();
		checkSettingsProfileForm();
	})
	.on("click",".js-submit-add-location",function(e){
		e.preventDefault();
		checkAddLocationForm();
	})
	.on("click",".js-delete-alcohol",function(e){
		e.preventDefault();
		checkAlcohollDelete($(this).data("id"));
	})
	
	.on("click",".profile",function(e){
		if(!$(this).data("id")) throw("No data ID on Element");

		sessionStorage.userId = $(this).data("id");
		$.mobile.navigate("#user-profile")
	})



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