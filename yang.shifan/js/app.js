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

	.on("click","[data-filter]",function(e){
		e.preventDefault();
		checkListFilter($(this).data())
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