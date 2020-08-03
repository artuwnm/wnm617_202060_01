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
