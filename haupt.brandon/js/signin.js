const checkSigninForm = async () => {
    let user = $("#signin-username").val();
    let pass = $("#signin-password").val();

    console.log(user, pass);

    let found_user = await query({
        type: 'check_signin',
        params: [user, pass]
    })


    if (found_user.result.length > 0) {
        // logged in!
        console.log('Congrats!')

        // Is an array that passes from page to page whether you 
        sessionStorage.userId = found_user.result[o].id;

        $("#signin-form")[0].reset();
    } else {
        // Not logs in! :C
        console.log('Didnt work!')

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