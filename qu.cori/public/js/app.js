
$(()=>{

	checkUserId();

	// EVENT DELEGATION
	$(document)


	.on("pagecontainerbeforeshow",function(e,ui){
		switch(ui.toPage[0].id) {
			case "buddy-page":
				console.log('buddy');
				// BuddyPage();
				break;
			case "profile-page":
				// ProfilePage();
				console.log('profile');
				break;
			case "map-page": 
				MapPage(); 
				console.log('map');
				break;
		}

		// makeList();
	})



	// FORM SUBMISSIONS
	.on("click","#signin-btn",function(e){
		e.preventDefault();
		checkLoginForm();
	})

	.on("click","#signup-btn",function(e){
		console.log('signup')
		e.preventDefault();
		checkSignupForm();
	})

	.on("click","#user-settings",function(e){
		console.log('settings')
		e.preventDefault();
		$("#profile-popup-change-password")[0].style.display = 'block';
		// checkSignupForm();
	})




	// CLICKS
	.on("click","#signout-btn",function(e){
		sessionStorage.removeItem('userId');
		checkUserId();
	})


	// ACTIVATE TOOLS
	.on("click","[data-activate]",function(e){
		$($(this).data("activate")).addClass("active");
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

});