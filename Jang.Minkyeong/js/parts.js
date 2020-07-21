
const makeAnimalList = templater(o=>`
<div class="animallist-item display-flex animal-jump" data-id="animal-jump">
	<div class="flex-non"><img src="${o.img}" class="list-image"/></div>
	<div class="flex-stretch">
	<div>${o.name}</div>
	<div>${o.breed}</div>
	<div>${o.color}</div>
	</div>
</div>
`);



const makeAnimalProfile= templater(o=>`
<div >
	<div>
		<img src="${o.img}" class="list-image"/>
	</div>
	<div>
		<div><strong>${o.name}</strong></div>
		<div>${o.breed}</div>
		<div>${o.color}</div>
	</div>
</div>
`);


const makeUserProfile= templater(o=>`
<div >
	<div>
		<img src="${o.img}" class="list-image"/>
	</div>
	<div>
		<div><strong>${o.name}</strong></div>
		<div>${o.username}</div>
		<div>${o.email}</div>
	</div>
</div>
`);