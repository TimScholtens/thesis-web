import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import {START_COORDINATES, START_ZOOM, MIN_ZOOM, HOST, MOUSECLICK_MAPPING} from './config.js'

let geojsonLayer = null
let selectedFeatureSet = new Set()


function init() {
    let map = L.map('map').setView([START_COORDINATES['lat'], START_COORDINATES['long']], START_ZOOM);

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

function loadNeighbourhoods(map) {

    fetch(`${HOST}/api/geojson/provinces`)
        .then(resp => resp.json())
        .then(data => JSON.parse(data))
        .then(json => {
            geojsonLayer = L.geoJSON(json, {
                style: setStyle,
                onEachFeature: onEachFeature,
            })

            geojsonLayer.addTo(map)
        })
}

/* Set of function for the hover over the geojson layer */
function setStyle(feature) {
    return {
        weight: 0.1,
        opacity: 0.5,
        color: 'black',
        // dashArray: '2',
        fillOpacity: 0.5,
        fillColor: '#163e4c'
    };
}

function onEachFeature(feature, layer) {

    const highlightFeature = (e) => {
        let l = e.target;
        l.setStyle(({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        }))
    }

    const deHighlightFeature = (e) => {
        let l = e.target;
        l.setStyle(({
            // weight: 5,
            color: '#163e4c',
            // dashArray: '',
            // fillOpacity: 0.7
        }))
    }

    layer.on({
        // mouseover: (e) => {
        //     onEachFeature(e)
        //
        // },
        // mouseout: (e) => {
        //     geojsonLayer.resetStyle()
        // },
        mousedown: (e) => {
            // if left click add to selected features list, else remove from list
            let mouseClickValue = e.originalEvent.which
            let clickedFeature = e.target.feature.properties.name

            if (mouseClickValue === MOUSECLICK_MAPPING['left']) {
                highlightFeature(e)
                selectedFeatureSet.add(clickedFeature)

                console.log(`Currently selected features ${selectedFeatureSet}`)
                return;
            }

            if (mouseClickValue === MOUSECLICK_MAPPING['right']) {

                deHighlightFeature(e)
                selectedFeatureSet.delete(clickedFeature)

                console.log(`Currently selected features ${selectedFeatureSet}`)
            }


            // onEachFeature(e)
            // console.log(e.target.feature)
        }

    });

}


let map = init()

loadNeighbourhoods(map)