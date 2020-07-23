const makeResourceList = templater(o => `
<div class="animallist-item display-flex animal-jump" data-id="${o.id}">
	<div class="flex-none"><img src="${o.img}" alt="" class="list-image" /></div>
	<div class="flex-stretch animallist-body">
		<div>${o.name}</div>
		<div>${o.type}</div>
		<div>${o.breed}</div>
	</div>
</div>
`);
// javascript backtick string ^^^^

const makeResourceProfile = templater(o => `
    <div>
        <img src="${o.img}">
    </div>
    <div>
    <img src="${o.img}" alt="" class="list-image"/>
        <div>${o.name}</div>
        <div>${o.type}</div>
       <div>${o.resource}</div>
    </div>
`);

const makeUserProfile = templater(o => `
    <div>
        <img src="${o.img}">
    </div>
    <div>
    <img src="${o.img}" alt="" class="list-image"/>
        <div>${o.name}</div>
        <div>${o.username}</div>
        <div>${o.email}</div>
    </div>
`);