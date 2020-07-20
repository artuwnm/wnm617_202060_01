
const ListPage = () => {

	query({type:"animals_by_user_id",params:[2]}).then(d=>{
		console.log(d)
	})
}