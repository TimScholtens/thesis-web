import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import {START_COORDINATES, START_ZOOM, MIN_ZOOM, HOST} from './config.js'


function init(){
	let map = L.map('map').setView([START_COORDINATES['lat'],START_COORDINATES['long'] ], START_ZOOM);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		minZoom: MIN_ZOOM,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/light-v9',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(map);

	return map

}

function loadNeighbourhoods(map){

	fetch(`${HOST}/api/geojson/provinces`)
		.then(resp => resp.json())
		.then(data => JSON.parse(data))
		// .then(json => console.log(json))
		.then(json => L.geoJSON(json).addTo(map))
		// .then(data => console.log(data))


}


function getSelectedNeighbourhoods(){

}

let map = init()

loadNeighbourhoods(map)