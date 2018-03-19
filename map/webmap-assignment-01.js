//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let glenCanyon = L.map('jasminesmapid').setView([37.057563, -111.255357], 11)
let basemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemapUrl).addTo(glenCanyon)
let glenCanyonDam = L.marker([36.936092, -111.484053], {color: 'green'}).addTo(glenCanyon)
let grandBench = L.polygon([
  [37.202207215, -111.2922],
  [37.163366, -111.294946],
  [37.069737, -111.222162],
  [37.126147, -111.176843],
  [37.197284, -111.200189]
], {color: 'green'}).addTo(glenCanyon);

grandBench.bindPopup('Grand Bench')
glenCanyonDam.bindPopup('Glen Canyon Dam')

function logCurrentCoordinates (event) {
  console.log('You clicked the map at ' + event.latlng)
}
glenCanyon.on('click', logCurrentCoordinates)

glenCanyon.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})

// create a red polyline from an array of LatLng points
let latlngs = [
    [37.037953, -111.206455],
    [37.017122, -111.162166],
    [36.992995, -111.133327],
    [36.980929, -111.123371]
];
let westCanyon = L.polyline(latlngs, {color: 'green'}).addTo(glenCanyon);
westCanyon.bindPopup('West Canyon');
