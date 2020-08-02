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
<div class="backgroundcolor-profile">
				<div class="flex-none" style="text-align:center">
					<img src="${o.img}" alt="" class="userimage" id="profilephoto">
					<h2 style="color: white;">${o.name}</h2>
					<div style="color: white;">${o.username}</div>
					<div style="color: white;">${o.email}</div>
				</div>
</div>
`;

const makeAlcoholProfile = o=>`
<div class="display-flex">
	<div class="alcohol-profile-image">
		<img src="${o.img}" alt=""/>
	</div>

	<a href="#list-page"><i class="arrow_white arrowleft"></i></a>
				<a class="settings ui-link" href="#settings-alcohol-profile-page">
				<img src="img/edit.svg" alt="" class="icon">
			</a>
</div>

<div class="display-flex flex-justify-center" style="padding:1em">
				
				<table cellspacing="15" class="confirmationtable" style="margin: 1em auto; ">
				  <tbody><tr>
				    <td style="text-align: right; ">Name</td>
				    <td></td>
				    <td style="text-align: left;"><strong>${o.name}</strong></td>
				  </tr>
				  <tr>
				    <td style="text-align: right;">Type</td>
				    <td></td>
				    <td style="text-align: left;"><strong>${o.type}</strong></td>
				  </tr>
				  <tr>
				    <td style="text-align: right;">Alcohol Percent</td>
				    <td></td>
				    <td style="text-align: left;"><strong>${o.alcoholpercent}</strong></td>
				  </tr>
				   <tr>
				    <td style="text-align: right;">Description</td>
				    <td></td>
				    <td style="text-align: left; font-size:14px;">${o.description}</td>
				  </tr>
				   
				</tbody>
			</table>
			
			
			</div>

`;


const makeRecentProfile = o=>`
<div class="display-flex alcohol-jump" data-id="${o.alcohol_id}">
	<div class="flex-none">
		<img src="${o.img}" class="recent-image" alt="" />
	</div>
	<div style="padding:0.5em">
		<div><strong>${o.name}</strong></div>
		<div>${o.type}</div>
		<div>${o.alcoholpercent}</div>
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
${FormControl({namespace:namespace,label:"Alcohol Percent",name:"alcoholpercent",value:o.alcoholpercent})}`;


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


const makeAlcoholProfileInputs = (o,namespace="list-add") => {
let types = [
	['dog','Dog'],
	['cat','Cat'],
	['horse','Horse'],
	['turtle','Turtle'],
	['rabbit','Rabbit']
];
return `
<div class="form-control">
	<label for="${namespace}-name" class="form-label">Name</label>
	<input type="text" class="form-input" id="${namespace}-name" placeholder="Type Alcohol Name" data-role="none" value="${o.name}">
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
	<label for="${namespace}-alcoholpercent" class="form-label">alcoholpercent</label>
	<input type="text" class="form-input" id="${namespace}-alcoholpercent" placeholder="Type Alcohol Percent" data-role="none" value="${o.alcoholpercent}">
</div>
<div class="form-control">
	<label for="${namespace}-description" class="form-label">Description</label>
	<textarea class="form-input" id="${namespace}-description" placeholder="Type Alcohol Description" data-role="none">${o.description}</textarea>
</div>`;
}