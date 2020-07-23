
const checkSigninForm = async() => {
	let user = $("#signin-username").val();
	let pass = $("#signin-password").val();

	console.log(user,pass);

	lat found_user = await queary({
		type:'cheack_signin',
		params:[user,pass]
	})

	if(found_user.result.length >0)

	if(user==='user' && pass==='pass') {
		// logged in
		console.log("success");
		sessionStorage.userId = 3;
		$("#signin-form")[0].reset();
	} else {
		// not logged in
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
		if(p.some(o=>window.location.hash===o))
			$.mobile.navigate("#recent-page");
	}
}