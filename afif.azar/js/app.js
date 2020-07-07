/*======= UNICORN APP JS==============*/

//////////* Use EMAIL instead of USERNAME (for signin/login) *///////////

$(()=>{

checkUserId();


//EVENT DELEGATION
$(document)

// FORM SUBMISSIONS
	.on("submit","#signin-form",function(e){
		e.preventDefault();
		checkLoginForm();
	})


// CLICKS
	.on("click",".js-logout",function(e){
		sessionStorage.removeItem('userId');
		checkUserId();
	})


// ACTIVATE TOOLS
.on("click","[data-activate]",function(e){
    $($(this).data("activate")).addClass("activate");
})

});

