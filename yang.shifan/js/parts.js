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

const makeUserProfile = o=>`
<div>
	<div class="hero-image">
		<img src="${o.img}" alt="">
	</div>
	<h2 class="profile-title">${o.name}</h2>
	<div class="profile-body">
		<div>${o.username}</div>
		<div>${o.email}</div>
	</div>
</div>
`;


const makeFoodInfo = o=>`
<div class="display-flex flex-column">
	<div class="flex-none">
		<img src="${o.img}" alt="" />
	</div>
	<div>
		<div><strong>${o.name}</strong></div>
		<div>${o.cuisine}</div>
		<div>${o.restaurant}</div>
		<div><button data-toggle=".profile-head" class="form-button">More</button></div>
	</div>
</div>
`;

const makeMapProfile = o=>`
<div class="display-flex food-jump" data-id="${o.food_id}">
	<div class="flex-none">
		<img src="${o.img}" class="list-image" alt="" />
	</div>
	<div style="padding:0.5em">
		<div><strong>${o.name}</strong></div>
		<div>${o.cuisine}</div>
		<div>${o.restaurant}</div>
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
	<label for="${namespace}-cuisine" class="form-label">Food Type</label>
	<div class="form-select">
		<select id="${namespace}-cuisine" data-role="none">
			${makeSelectOptions(cuisines,o.cuisine)}
		</select>
	</div>
</div>

<div class="form-control">
	<label for="${namespace}-restaurant" class="form-label">Restaurant</label>
	<input type="text" class="form-input" id="${namespace}-restaurant" placeholder="" data-role="none" value="${o.restaurant}"/>
</div>

<div class="form-control">
	<label for="${namespace}-description" class="form-label">Description</label>
	<textarea class="form-input" id="${namespace}-description" placeholder="" data-role="none">${o.description}</textarea>
</div>
<div class="form-control form-photo">
	<label for="food-photo" class="photo-upload">
		<img src="img/icons/photograph.svg">
	</label>
	<input type="file" id="food-photo" name="food-photo" accept="image/png, image/jpeg"/>
</div>
`;
}
