// $('#add-new-buddy').on("click",function(e){
// 	console.log("add");
// 	$(this).addClass("active");
// })


$( "#select-buddy-btn").click(function() {
	console.log("select-buddy");

	$( "#select-buddy-popup")[0].style.display = "block";

});


$( "#select-buddy-popup .buddy-photo-list" ).delegate( "li", "click", function(e) {
	let index = $("#select-buddy-popup .buddy-photo-item").index(e.target);
	$( "#select-buddy-popup")[0].style.display = "none";
	// $('#popupImg img').attr( "src", e.target.src);
  	console.log(index);
});


$( "#buddy-page .buddy-photo-list" ).delegate( "li", "click", function(e) {


	let index = $("#buddy-page .buddy-photo-item").index($(this));
	$( "#buddy-popup-info")[0].style.display = "block";
  	console.log(index);
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
	$( "#buddy-popup")[0].style.display = "none";

});




$("#buddy-back-btn").click(function() {
	console.log("back");

	$( "#buddy-popup-info")[0].style.display = "none";

});
$("#buddy-edit-btn").click(function() {
	console.log("edit");

	$( "#buddy-popup-edit")[0].style.display = "block";

});

$("#buddy-savechange-btn").click(function() {
	console.log("save change");

	$( "#buddy-popup-edit")[0].style.display = "none";

});

$("#buddy-delete-btn").click(function() {
	console.log("delete");

	$( "#buddy-popup-edit")[0].style.display = "none";

});


$( "#add-new-pin").click(function() {
	console.log("pin");
	$( "#pin-popup-map")[0].style.display = "block";

});

$( "#add-pin-cancel").click(function() {
	console.log("cancel");
	$( "#map-popup")[0].style.display = "none";

});


$( "#pin-confirm-btn").click(function() {
	console.log("cancel");
	// $( "#pin-popup-map")[0].style.display = "none";
	$( "#map-popup")[0].style.display = "block";

});
$( "#pin-cancel-btn").click(function() {
	console.log("cancel");
	$( "#pin-popup-map")[0].style.display = "none";

});

$( "#add-memory-btn").click(function() {
	console.log("cancel");
	$( "#pin-popup-map")[0].style.display = "none";
	$( "#map-popup")[0].style.display = "none";

});


const checkLoginForm = () => {
	let user = $("#login-username").val();
	let pass = $("#login-password").val();

	console.log(user,pass);

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
			$.mobile.navigate("#map-page");
	}
}