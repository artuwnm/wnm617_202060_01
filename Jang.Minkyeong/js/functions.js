
const query = (options) => {
	//fetch is a promise
	return fetch('data/api.php',{
		method:'POST'.
		body:JSON.stringify(options),
		header:{'Content-Type':'application/json'}
	}).then(d=>d.json())

}


//currying
const templater = f => a =>
	(Array.isArray(a)?a:[a])
	.reduce((r,o,i,a)=>f(o,i,a)."");