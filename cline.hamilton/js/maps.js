

const makeMap = async(target, center={ lat: 37.786229, lng: -122.399287 }) => {
	let map_el = $(target);

	new google.maps.Map(map_el[0], {
		center: center,
		zoom: 12,
		disableDefaultUI: true
	});
}