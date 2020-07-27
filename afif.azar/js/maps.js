

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


	// map_el.data("map") is the same as the map variable in demos

	return map_el;
}



const makeMarkers = (map_el,map_locs) => {

	let map = map_el.data("map");
	let markers = map_el.data("markers");

	console.log(markers)

	if(markers) markers.forEach(o=>o.setMap(null));

	markers = [];

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

	setTimeout(()=> setMapBounds(map_el.data("map"),map_locs), 100);
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
     			console.log("Error?".args);
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
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#545454"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "-87"
            },
            {
                "lightness": "-40"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f0f0f0"
            },
            {
                "saturation": "-22"
            },
            {
                "lightness": "-16"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "-52"
            },
            {
                "hue": "#00e4ff"
            },
            {
                "lightness": "-16"
            }
        ]
    }
];