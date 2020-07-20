const ListPage = async () => {
    let d = await query({
        type: "resources_by_user_id",
        params: [3]
    })

    // Look up promises, async, and await
    console.log(d)

    $("#list-page .resourcelist")
        .html(makeResourceList(d.result))
}

const ProfilePage = async () => {
    let d = await query({
        type: "user_by_user_id",
        params: [sessionStorage.userId]
    })

    $("resource-profile-page .profile-body")
        .html(makeUserProfile(d.result))
}



const ResourceProfilePage = async () => {
    if (sessionStorage.resourceId === undefined) throw ("No resource ID in Storage");
    let d = await query({
        type: "resources_by_user_id",
        params: [sessionStorage.resourceId]
    })

    $("resource-profile-page .profile-body")
        .html(makeResourceProfile(d.result))
}