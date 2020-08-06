const checkListAddForm = () => {
	let name = $("#list-add-name").val();
	let cuisine = $("#list-add-cuisine").val();
	let restaurant = $("#list-add-restaurant").val();
	let description = $("#list-add-description").val();

	if (!name) {
		throw "Food name cannot be empty.";
	}
	if (!cuisine) {
		throw "Cuisine cannot be empty."
	}
	if (!restaurant) {
		throw "Restaurant cannot be empty."
	}
	query({
		type:'insert_food',
		params:[sessionStorage.userId,name,cuisine,restaurant,description]
	}).then(d=>{
		if(d.error) throw d.error;
		ListPage();
	})
}

const checkListSearch = (s) => {
	query({
		type:'food_search',
		params:[`%${s}%`,`%${s}%`,`%${s}%`,sessionStorage.userId]
	}).then(d=>{
		console.log(d)
		ListPage(d)
	})
}

const checkRecentSearch = (s) => {
	query({
		type:'food_search_recent',
		params:[`%${s}%`,`%${s}%`,`%${s}%`,sessionStorage.userId]
	}).then(d=>{
		console.log(d)
		MapPage(d)
	})
}



const checkListFilter = ({filter,value}) => {
	(
		value=="" ?
		query({
			type:'food_by_user_id',
			params:[sessionStorage.userId]
		}) :
		query({
			type:'food_filter',
			params:[filter,value,sessionStorage.userId]
		})
	).then(d=>{
		console.log(d)
		ListPage(d)
	})
}
