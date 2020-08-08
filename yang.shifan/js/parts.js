const makeFoodList = templater(o=>`
<div class="col-md-4 col-sm-6 col-xs-6 food-jump" data-id="${o.id}">
	<div class="food-card">
		<img class="food-thumbnail" src="${o.img}" alt="">
		<div class="text-center" style="padding: 10px;">
			${o.name}
		</div>
	</div>
</div>
`);

const emptyFoodListMessage = o=>`
<div class="col-md-12 col-sm-12 col-xs-12">
	<p>Food list is empty. Try add some food!</p>
</div>
`

const UserProfileLocationsPhotoList = templater(o=>`<img src="${o.img}" class="animal-jump" data-id="${o.food_id}">`);

const makeUserProfile = (user,food,locations) =>{
return `
<div>
	<div class="hero-image">
		<a href="#settings-profile-upload-page"><img src="${user.img}" alt=""></a>
	</div>
	<div style="padding:1em; text-align:center;">
		<div style="display: inline-block;">
			<h2 class="profile-title">${user.name}</h2>
			<div style="text-align: left;">
				<div><strong>Email</strong> ${user.email}</div>
				<div><strong>Food</strong> ${food.length}</div>
				<div><strong>Locations</strong> ${locations.length}</div>
			</div>
			<div class="profile-photos" style="text-align: left; margin-top: 5em;">
			<h3>Latest Photos</h3>
			<div class="profile-location-photos">
				${UserProfileLocationsPhotoList(food.slice(0,3))}
			</div>
		</div>
		</div>
	</div>
</div>
`;
}


const makeFoodInfo = (food, locations)=>{
return `<div class="display-flex flex-column">
	<div class="flex-none" style="margin: auto;">
		<img src="${food.img}" alt="" />
	</div>
	<div style="margin: 1em auto;">
		<div><strong>${food.name}</strong></div>
		<div>${food.cuisine}</div>
		<div style="margin-top: 1em;">
		<div class="display-flex flex-row">
			<img src="img/icons/edit.png" style="width:20px; height:20px;">
			<a href="#settings-food-profile-page" style="margin-left: 0.5em;">Edit</a>
		</div>
		<div class="display-flex flex-row" style="align-items: center;">
			<img src="img/icons/delete.png" style="width:20px; height:20px;">
			<a href="#" class="js-delete-food" data-id="${food.id}" style="margin-left: 0.5em;">Delete</a>
		</div>
		<div>
	</div>
</div>
`;
}

const makeMapProfile = o=>`
<div class="display-flex food-jump" data-id="${o.food_id}">
	<div class="flex-none;">
		<img src="${o.img}" class="list-image" alt="" />
	</div>
	<div style="padding:0.5em;">
		<div><strong>${o.name}</strong></div>
		<div>${o.cuisine}</div>
	</div>
</div>
`;

const makeSelectOptions = (options,selected) => {
	return templater(o=>`
		<option value='${o[0]}' ${o[0]==selected?'selected':''}>${o[1]}</option>
	`)(options);
}

const makeFoodInfoInputs = (o,namespace="list-add") => {
let cuisines = [
	['American','American'],
	['Chinese','Chinese'],
	['Korean','Korean'],
	['Other','Other']
];
return `
<div class="form-control">
	<label for="${namespace}-name" class="form-label">Food Name</label>
	<input type="text" class="form-input" id="${namespace}-name" placeholder="" data-role="none" value="${o.name}"/>
</div>
<div class="form-control">
	<label for="${namespace}-cuisine" class="form-label">Food Cuisine</label>
	<div class="form-select">
		<select id="${namespace}-cuisine" class="form-input" data-role="none">
			${makeSelectOptions(cuisines,o.cuisine)}
		</select>
	</div>
</div>

<div class="form-control">
	<label for="${namespace}-description" class="form-label">Description</label>
	<textarea class="form-input" id="${namespace}-description" placeholder="" data-role="none">${o.description}</textarea>
</div>
<div class="form-control form-photo">
	<label for="${namespace}-photo" class="form-label">Add a Photo</label>
	<input type="hidden" id="${namespace}-photo" data-role="none">
	<label for="${namespace}-food-photo-upload" class="photo-upload">
		<img id="${namespace}-image-picker" class="imagepicker" src="img/icons/photograph.svg">
		<img id="${namespace}-photo-preview" class="image-preview" src="https://via.placeholder.com/400">
	</label>
	<input type="file" id="${namespace}-food-photo-upload" name="food-photo" accept="image/png, image/jpeg"/>
</div>
`;
}

const filterList = (food,cuisine) => {
	let a = [...(new Set(food.map(o=>o[cuisine])))];
	return templater(o=>`<li><a href="#" data-filter="${cuisine}" data-value="${o}" style="font-weight: normal">${o[0].toUpperCase()+o.substr(1)}</a></li>`)(a)
}

const listFilters = (food) => {
	return `
	<li><a href="#" data-filter="cuisine" data-value="" style="font-weight: normal">All</a></li>
	${filterList(food,'cuisine')}
	`;
}

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

