$(document).ready(function () {


    checkUserId();

    console.log("oh, hi!")

    // Event Delegation
    $(document)

        // ROUTING
        .on("pagecontainerbeforeshow", function (e, ui) {
            switch (ui.toPage[0].id) {
                case "map-page":
                    console.log("maps!");
                    break;
                case "list-page":
                    ListPage();
                    break;
                case "resource-profile-page":
                    ResourceProfilePage();
                    break;
                case "profile-page":
                    ProfilePage();
                    break;
            }
        })

        // FORM SUBMISSIONS
        .on("submit", "#signin-form", function (e) {
            e.preventDefault();
            checkSigninForm();
            console.log("oh, hi!")
        })



        // CLICKS
        .on("click", ".js-logout", function (e) {
            sessionStorage.removeItem('userId');
            checkUserId();
        })

        .on("click", ".resource-jump", function (e) {
            if (!$(this).data("id")) throw ("No data ID on Element");

            sessionStorage.resourceId = $(this).data("id");
            $.mobile.navigate("#resource-profile-page");
        })

        // ACTIVE TOOLS
        .on("click", "[data-activate]", function (e) {
            $($(this).data('activate')).addClass('active');
        })

        .on("click", "[data-deactivate]", function (e) {
            $($(this).data('deactivate')).removeClass('active');
        })

        .on("click", "[data-toggle]", function (e) {
            $($(this).data('toggle')).toggleClass('active');
        })

        .on("click", "[data-activateone]", function (e) {
            $($(this).data('activateone')).addClass('active').siblings().removeClass("active");
        })

});