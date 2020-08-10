
const makeAnimalList = templater(o=>`
<div class="animallist-item display-flex animal-jump" data-id="${o.id}">
	<div class="flex-none"><img src="${o.img}" alt="" class="list-image" /></div>
	<div class="flex-stretch animallist-body">
		<div>${o.name}</div>
		<div>${o.type}</div>
		<div>${o.breed}</div>
	</div>
</div>
`);



const UserProfileLocationsPhotoList = templater(o=>`<img src="${o.photo}" class="animal-jump" data-id="${o.animal_id}">`);
const AnimalProfileLocationsPhotoList = templater(o=>`<img src="${o.photo}" data-id="${o.id}">`);


// const makeUserProfile = (user,animals,locations) =>{
// return `
// <div>
// 	<div class="hero-image">
// 		<a href="#settings-profile-upload-page"><img src="${user.img}" alt=""></a>
// 	</div>
// 	<div style="padding:1em">
// 		<h2 class="profile-title">${user.name}</h2>
// 		<div class="profile-body">
// 			<div class="userdata"><strong>Handle</strong> ${user.username}</div>
// 			<div class="userdata"><strong>Email</strong> ${user.email}</div>
// 			<div class="length"><strong>Animals</strong> ${animals.length}</div>
// 			<div class="length"><strong>Locations</strong> ${locations.length}</div>
// 		</div>
// 		<div class="profile-photos">
// 			<h3>Latest Photos</h3>
// 			<div class="profile-location-photos">
// 				${UserProfileLocationsPhotoList(locations.slice(0,3))}
// 			</div>
// 		</div>
// 	</div>
// </div>
// `;
// }

const makeUserProfile = (user,animals,locations) =>{
return `
<div>
	<div class="hero-image">
		<a href="#settings-profile-upload-page"><img src="${user.img}" alt=""></a>

	</div>
	<div class="photo-tips">
	  click photo to change		

	</div>
	<div style="padding:1em">
		<h2 class="profile-title">${user.name}</h2>
		<h4 class="profile-title2">(<strong>Animals:</strong> ${animals.length} | <strong>Locations:</strong> ${locations.length})</h4>
		
		<div class="profile-body">
			<div class="userdata">${user.username}</div>
			<div class="userdata">${user.email}</div>
			
		</div>
		<div class="profile-photos">
			<h3>Latest Photos</h3>
			<div class="profile-location-photos">
				${UserProfileLocationsPhotoList(locations.slice(0,3))}
			</div>
		</div>
	</div>
</div>
`;
}


// const makeAnimalProfile = (animal,locations)=>{

// return `<div>
// <div class="display-flex">
// 	<div class="flex-none">
// 		<img src="${animal.img}" alt="" />
// 	</div>
// 	<div style="padding:1em">
// 		<div>${animal.type}</div>
// 		<div>${animal.breed}</div>
// 		<div class="display-flex">
// 			<div class="flex-none">
// 				<button data-toggle=".profile-head" class="form-button">More</button>
// 			</div>
// 			<div class="flex-none">
// 				<a href="#settings-animal-profile-page" class="form-button">Edit</a>
// 			</div>
// 			<div class="flex-none">
// 				<a href="#" class="form-button js-delete-animal" data-id="${animal.id}">Delete</a>
// 			</div>
// 		</div>
// 	</div>
// </div>
// <div class="profile-location-photos">
// 	${AnimalProfileLocationsPhotoList(locations)}
// </div>
// </div>
// `;
// }

const makeAnimalProfile = (animal,locations)=>{

return `<div>

	<div class="back-icon" style="position: absolute;top:0">
		<a href="#" data-rel="back"><img src="images/icon/back.svg" alt=""></a>
	</div>	
	<div style="z-index:-9;width: 100%;position: relative;">
		<img src="${animal.img}" style="width: 100%;">
	</div>
	<div class="flex-none animal-profile-body">
		<p class="text4"><strong>${animal.name}</strong></p>
		
		<p class="text5">Seen on ${animal.date_create}</p>
		<p class="text5 text-height1"><strong>Character: ${animal.breed}</strong></p>	
		<div class="text6">
			<strong>${animal.type}</strong>
			<div class="triangle"></div>
	    </div>

		<p class="text5">Introduction：
			<br>
		${animal.description}
		
		</p>
		<div class="display-flex">
			<div class="flex-none">
				<button data-toggle=".profile-head" class="form-button-more"></button>
			</div>
			<div class="flex-none">
				<a href="#" class="js-delete-animal" data-id="${animal.id}"><img src="images/icon/delete.svg" alt=""></a>
			</div>
			<div class="flex-none">
				<a href="#settings-animal-profile-page" class="pencil-icon"><img src="images/icon/pencil.svg" alt=""></a>
			</div>
			
		</div>

	</div>

	<div class="profile-location-photos">
		${AnimalProfileLocationsPhotoList(locations)}
	</div>
</div>
`;
}


const makeRecentProfile = o=>`
<div class="display-flex animal-jump" data-id="${o.animal_id}">
	<div class="flex-none">
		<img src="${o.img}" class="list-image" alt="" />
	</div>
	<div style="padding:0.5em">
		<div><strong>${o.name}</strong></div>
		<div>${o.type}</div>
		<div>${o.breed}</div>
	</div>
</div>
`;



const makeRecentProfile2 = o=>`
<div class="display-flex animal-jump" data-id="${o.animal_id}">
	<div class="flex-none">
		
		<img src="${o.photo}" class="list-image" alt="" />
	</div>
	<div style="padding:0.5em;text-align:left">		
		
		<div>${o.date_create}</div>

		<div>description:${o.description}</div>
		
	</div>
</div>
`;




// Typing out everything is fine
const makeSettingsProfileInputs = (o,namespace="settings-profile") => `
<div class="form-control">
	<label for="${namespace}-name" class="form-label">Name</label>
	<input id="${namespace}-name" type="text" class="form-input" data-role="none" value="${o.name}">
</div>
<div class="form-control">
	<label for="${namespace}-username" class="form-label">Username</label>
	<input id="${namespace}-username" type="text" class="form-input" data-role="none" value="${o.username}">
</div>
<div class="form-control">
	<label for="${namespace}-email" class="form-label">Email</label>
	<input id="${namespace}-email" type="text" class="form-input" data-role="none" value="${o.email}">
</div>`;

// You can also break things into their smaller reusable parts
const makeSettingsAnimalProfileInputs = (o,namespace="settings-animal-profile") => `
${FormControl({namespace:namespace,label:"Name",name:"name",value:o.name})}
${FormControl({namespace:namespace,label:"Type",name:"type",value:o.type})}
${FormControl({namespace:namespace,label:"Breed",name:"breed",value:o.breed})}`;


const FormControl = ({namespace,label,name,value,type="text"}) => `
<div class="form-control">
	<label for="${namespace}-${name}" class="form-label">${label}</label>
	<input id="${namespace}-${name}" value="${value}" type="${type}" class="form-input" data-role="none">
</div>`;



const makeSelectOptions = (options,selected) => {
	return templater(o=>`
		<option value='${o[0]}' ${o[0]==selected?'selected':''}>${o[1]}</option>
	`)(options);
}


const makeAnimalProfileInputs = (o,namespace="list-add") => {
let types = [
	['nonpoisonous','Non-Poisonous'],	
	['poisonous','Poisonous']
];
return `
<div class="form-control">
	<label for="${namespace}-description" class="form-label">Add a Photo</label>
	<input type='hidden' id="${namespace}-photo" data-role="none">
	<label class="imagepicker imagepicker-replace thumbnail">
		<input type='file' id="${namespace}-photo-upload" data-role="none">
	</label>
</div>
<div class="form-control">
	<label for="${namespace}-name" class="form-label">Name</label>
	<input type="text" class="form-input" id="${namespace}-name" placeholder="Type Elf Name" data-role="none" value="${o.name}">
</div>
<div class="form-control">
	<label for="${namespace}-type" class="form-label">Type</label>
	<div class="form-select">
		<select id="${namespace}-type" data-role="none">
			${makeSelectOptions(types,o.type)}
		</select>
	</div>
</div>
<div class="form-control">
	<label for="${namespace}-breed" class="form-label">Character</label>
	<input type="text" class="form-input" id="${namespace}-breed" placeholder="Type Elf Character" data-role="none" value="${o.breed}">
</div>
<div class="form-control">
	<label for="${namespace}-description" class="form-label">Description</label>
	<textarea class="form-input" id="${namespace}-description" placeholder="Type Elf Description" data-role="none">${o.description}</textarea>
</div>`;
}





const filterList = (animals,type) => {
	let a = [...(new Set(animals.map(o=>o[type])))];
	// return templater(o=>`<li><a href="#" data-filter="${type}" data-value="${o}">${o[0].toUpperCase()+o.substr(1)}</a></li>`)(a)
	return templater(o=>`<li><a href="#" data-filter="${type}" data-value="${o}">${o[0]+o.substr(1)}</a></li>`)(a)
}

const listFilters = (animals) => {
	return `
	<li><a href="#" data-filter="type" data-value="">All</a></li>
	${filterList(animals,'type')}
	${filterList(animals,'breed')}
	`;
}