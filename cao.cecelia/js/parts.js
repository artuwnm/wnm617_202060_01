const makeAlcoholList = templater(o=>`
<div class="alcohollist-item alcohol-jump" display-flex flex-justify-center data-id="${o.id}">
		<figure class="alcohol-figure">
			<div class="alcohol-image">
				<img src="${o.img}" alt="" class="list-image" />
			</div>
					<h4 class="alcohol_name">${o.name}</h4>
					<p class="alcohol_type">${o.type}</p>
		</figure>
	
</div>
`);



const makeUserProfile = o =>`
<div>
	<div class="profile">
		<img src="${o.img}" alt="">
	</div>
	<h2 class="profile-title">${o.name}</h2>
	<div class="profile-body">
		<div>${o.username}</div>
		<div>${o.email}</div>
	</div>
</div>
`;

const makeAlcoholProfile = o=>`
<div class="display-flex">
	<div class="flex-none">
		<img src="${o.img}" alt="" />
	</div>
	<div>
		<div><strong>${o.name}</strong></div>
		<div>${o.type}</div>
		<div>${o.breed}</div>
		<div class="display-flex">
			<div class="flex-none"><button data-toggle=".profile-head" class="form-button">More</button></div>
			<div class="flex-none"><a href="#settings-alcohol-profile-page" class="form-button">Edit</a></div>
		</div>
	</div>
</div>
`;


const makeRecentProfile = o=>`
<div class="display-flex alcohol-jump" data-id="${o.alcohol_id}">
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
const makeSettingsAlcoholProfileInputs = (o,namespace="settings-alcohol-profile") => `
${FormControl({namespace:namespace,label:"Name",name:"name",value:o.name})}
${FormControl({namespace:namespace,label:"Type",name:"type",value:o.type})}
${FormControl({namespace:namespace,label:"Breed",name:"breed",value:o.breed})}`;


const FormControl = ({namespace,label,name,value,type="text"}) => `
<div class="form-control">
	<label for="${namespace}-${name}" class="form-label">${label}</label>
	<input id="${namespace}-${name}" value="${value}" type="${type}" class="form-input" data-role="none">
</div>`;