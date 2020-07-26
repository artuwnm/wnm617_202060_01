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

const makeUserProfile = templater(o=>`
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
`);


const makeFoodInfo = templater(o=>`
<div class="display-flex">
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
`);
