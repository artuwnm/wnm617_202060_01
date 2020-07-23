const ListPage = async() => {

	let d = await query({type:"food_by_user_id",params:[sessionStorage.userId]})

	console.log(d)

	$("#list-page .food-list")
		.html(makeFoodList(d.result))
}

const MapPage = async() => {}

const ProfilePage = async() => {
	let d = await query({type:"user_by_id",params:[sessionStorage.userId]});

	console.log(d)

	$("#profile-page .profile")
		.html(makeUserProfile(d.result))
}

const FoodInfoPage = async() => {
	if(sessionStorage.foodId===undefined) throw("No food ID in Storage");

	let d = await query({type:"food_by_id",params:[sessionStorage.foodId]});

	console.log(d)

	$("#food-info-page .food-info")
		.html(makeFoodInfo(d.result))
}
