const checkListAddForm = () => {
    let name = $("#list-add-name").val();
    let type = $("#list-add-type").val();
    let breed = $("#list-add-breed").val();
    let description = $("#list-add-description").val();

    query({
        type: 'insert_resource',
        params: [sessionStorage.userId, name, type, breed, description]
    }).then(d => {
        if (d.error) throw d.error;
        ListPage();
    })
}

const checkSettingsAnimalProfileForm = () => {
    let name = $("#settings-animal-profile-name").val();
    let type = $("#settings-animal-profile-type").val();
    let breed = $("#settings-animal-profile-breed").val();
    let description = $("#settings-animal-profile-description").val();
    let animalId = $("#settings-animal-profile-id").val();

    query({
        type: 'update_resource',
        params: [name, type, breed, description, animalId]
    }).then(d => {
        if (d.error) throw d.error;
        window.history.back();
    })
}

const checkSettingsProfileForm = () => {
    let name = $("#settings-profile-name").val();
    let username = $("#settings-profile-username").val();
    let email = $("#settings-profile-email").val();
    let userId = $("#settings-profile-id").val();

    query({
        type: 'update_user',
        params: [name, username, email, userId]
    }).then(d => {
        if (d.error) throw d.error;
        window.history.back();
    })
}

const checkAddLocationForm = () => {
    let lat = +$("#add-location-lat").val();
    let lng = +$("#add-location-lng").val();
    let description = $("#add-location-description").val();
    let animalId = sessionStorage.animalId;

    query({
        type: 'insert_location',
        params: [animalId, lat, lng, description]
    }).then(d => {
        if (d.error) throw d.error;
        window.history.go(-2);
        // $.mobile.navigate("#animal-profile-page");
    })
}


const checkAnimalDelete = id => {
    query({
        type: 'delete_resource',
        params: [id]
    }).then(d => {
        if (d.error) throw d.error;
        window.history.back();
    })
}



// const checkListAddForm = () => {
//     let name = $("#list-add-name").val()
//     let type = $("#list-add-type").val()
//     let breed = $("#list-add-breed").val()
//     let description = $("#list-add-description").val()
//     query({
//         type: 'insert_resource',
//         params: [sessionStorage.userId, name, type, breed, description]
//     }).then(d => {
//         if (d.error) throw d.error;
//         ListPage();
//     })
// }