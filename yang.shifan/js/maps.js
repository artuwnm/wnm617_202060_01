const makeMap = async(target, center={ lat: 37.786229, lng: -122.399287 }) => {
	await checkData(()=>window.google);
	let map_el = $(target);

    if(!map_el.data("map")) map_el.data({
            "map": new google.maps.Map(map_el[0], {
                center: center,
                zoom: 12,
                styles: mapStyles,
                disableDefaultUI: true
            }),
            "infoWindow": new google.maps.InfoWindow({content:""})
    });

	return map_el;
}

const makeMarkers = (map_el,map_locs) => {

	let map = map_el.data("map");
	let markers = map_el.data("markers");

	if(markers) markers.forEach(o=>o.setMap(null));

	markers = [];

	console.log(map_locs);

	map_locs.forEach((o,i,a)=>{
		let m = new google.maps.Marker({
			position: o,
			map: map_el.data("map"),
			icon: {
				// expects location object to have .icon property
				url: o.icon,
				scaledSize: {
					width:40,
					height:40
				}
			}
		});
		markers.push(m);
	});

	map_el.data("markers",markers);
	setTimeout(()=>setMapBounds(map_el.data("map"),map_locs), 100);
}

const setMapBounds = (map,map_locs) => {
	if(map_locs.length==1) {
		map.setCenter(map_locs[0]);
		map.setZoom(14);
	} else if(map_locs.length==0) {
		if(window.location.protocol!=="https:") return;
		else {
			navigator.geolocation.getCurrentPosition(p=>{
				let pos = {
					lat:p.coords.latitude,
					lng:p.coords.longitude
				}
				map.setCenter(pos);
				map.setZoom(15);
			},(...args)=>{
				console.log("Error?",args);
			},{
				enableHighAccuracy:false,
				timeout:5000,
				maximumAge:0
			});
		}
	} else {
		let bounds = new google.maps.LatLngBounds(null);
		map_locs.forEach(o=>{
			bounds.extend(o)
		});
		map.fitBounds(bounds);
	}
}

const mapStyles = [
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#C6E2FF"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#C5E3BF"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#D1D1B8"
            }
        ]
    }
];


