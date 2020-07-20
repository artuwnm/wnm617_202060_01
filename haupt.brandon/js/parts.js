const makeResourceList = templater(o => `
    <div class="resourcelist-item resource-jump" data-id="${o.id}">
    <img src="${o.img}" alt="" class="list-image"/>
        <div>${o.name}</div>
        <div>${o.type}</div>
       <div>${o.resource}</div>
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

const makeuserProfile = templater(o => `
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