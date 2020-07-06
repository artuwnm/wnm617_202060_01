const checkLoginForm = () => {
    let user = $("#signin-username").val();
    let pass = $("#signin-password").val();

    console.log(user, pass);

    if (user === 'user' && pass === 'pass') {
        // logged in!
        console.log('Congrats!')

        // Is an array that passes from apge to page whether you 
        sessionStorage.userId = 3;

        $("signin-form")[0].reset();
    } else {
        // Not logs in! :C
        console.log('Didnt work!!')

        sessionStorage.removeItem('userId');
    }

    checkUserId();
}

const checkUserId = () => {

    let p = ["#signin-page", "#signup-page", ""];

    if (sessionStorage.userId === undefined) {
        // Not logged in
        if (!p.some(o => window.location.hash === o))
            // if we need to navigate vv that code is how you navigate
            $.mobile.navigate("#signin-page");
        // if we need to navigate ^^ that code is how you navigate
    } else {
        // Logged in
        if (p.some(o => window.location.hash === o))
            $.mobile.navigate("#map-page");
    }
}