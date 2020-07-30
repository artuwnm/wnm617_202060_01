

const checkListAddForm = () => {
	let name = $("#list-add-name").val();
	let type = $("#list-add-type").val();
	let breed = $("#list-add-breed").val();
	let description = $("#list-add-description").val();

	query({
		type:'insert_animal',
		params:[sessionStorage.userId,name,type,breed,description]
	}).then(d=>{
		if(d.error) throw d.error;
		ListPage();
	})
}