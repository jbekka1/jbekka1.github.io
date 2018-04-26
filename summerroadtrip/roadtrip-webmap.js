let summerRoadtrip = L.map("roadtripmapid").setView([41.089, -105.504], 4)
summerRoadtrip.on('click', function (event){
  console.log('You clicked the map at ' + event.latlng)
})

let satelliteBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')
let topoBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}')
let streetBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(summerRoadtrip)

let roadtripBasemaps = {
  'Street Map': streetBasemap,
  'Satellite Map': satelliteBasemap,
  'Topographic Map': topoBasemap,
}
L.control.layers(roadtripBasemaps).addTo(summerRoadtrip)

let batonRouge = L.marker([30.445832, -91.15766]).addTo(summerRoadtrip)
let carsonNationalForest = L.marker([36.521275, -106.190435]).addTo(summerRoadtrip)
let rockyMountain = L.marker([40.398856, -105.724774]).addTo(summerRoadtrip)
let grandTeton = L.marker([43.733002, -110.678657]).addTo(summerRoadtrip)
let yellowstone = L.marker([44.629573, -110.584736]).addTo(summerRoadtrip)
let glacier = L.marker([48.634361, -113.707904]).addTo(summerRoadtrip)
let banff = L.marker([51.508743, -116.011637]).addTo(summerRoadtrip)
let northCascades = L.marker([48.822779, -121.338138]).addTo(summerRoadtrip)
let olympic = L.marker([47.757053, -123.625476]).addTo(summerRoadtrip)
let mtRainier = L.marker([46.910499, -121.679636]).addTo(summerRoadtrip)
let cratersOfTheMoon = L.marker([43.161917, -113.478357]).addTo(summerRoadtrip)
let moab = L.marker([38.582097, -109.549815]).addTo(summerRoadtrip)

let tripOnelatlngs = [
  [30.445832, -91.15766],
  [36.521275, -106.190435],
];
let tripOne = L.polyline(tripOnelatlngs, {color: 'green'}).addTo(summerRoadtrip)

let tripTwolatlngs = [
  [36.521275, -106.190435],
  [40.398856, -105.724774],
];
let tripTwo = L.polyline(tripTwolatlngs, {color: 'green'}).addTo(summerRoadtrip)

let tripThreelatlngs = [
  [36.521275, -106.190435],
  [40.398856, -105.724774],
];
let tripThree = L.polyline(tripThreelatlngs, {color: 'green'}).addTo(summerRoadtrip)

let tripFourlatlngs = [
  [40.398856, -105.724774],
  [43.733002, -110.678657],
];
let tripFour = L.polyline(tripFourlatlngs, {color: 'green'}).addTo(summerRoadtrip)

let tripFivelatlngs = [
  [43.733002, -110.678657],
  [44.629573, -110.584736],
];
let tripFive = L.polyline(tripFivelatlngs, {color: 'green'}).addTo(summerRoadtrip)

let tripSixlatlngs = [
  [44.629573, -110.584736],
  [48.634361, -113.707904],
];
let tripSix = L.polyline(tripSixlatlngs, {color: 'green'}).addTo(summerRoadtrip)

let tripSevenlatlngs = [
  [48.634361, -113.707904],
  [51.508743, -116.011637],
];
let tripSeven = L.polyline(tripSevenlatlngs, {color: 'green'}).addTo(summerRoadtrip)

let tripEightlatlngs = [
  [51.508743, -116.011637],
  [48.822779, -121.338138],
];
let tripEight = L.polyline(tripEightlatlngs, {color: 'green'}).addTo(summerRoadtrip)

let tripNinelatlngs = [
  [48.822779, -121.338138],
  [47.757053, -123.625476],
];
let tripNine = L.polyline(tripNinelatlngs, {color: 'green'}).addTo(summerRoadtrip)

let tripTenlatlngs = [
  [47.757053, -123.625476],
  [46.910499, -121.679636],
];
let tripTen = L.polyline(tripTenlatlngs, {color: 'green'}).addTo(summerRoadtrip)

let tripElevenlatlngs = [
  [46.910499, -121.679636],
  [43.161917, -113.478357],
];
let tripEleven = L.polyline(tripElevenlatlngs, {color: 'green'}).addTo(summerRoadtrip)

let tripTwelvelatlngs = [
  [43.161917, -113.478357],
  [38.582097, -109.549815],
];
let tripTwelve = L.polyline(tripTwelvelatlngs, {color: 'green'}).addTo(summerRoadtrip)

let tripThirteenlatlngs = [
  [38.582097, -109.549815],
  [36.521275, -106.190435],
];
let tripThirteen = L.polyline(tripThirteenlatlngs, {color: 'green'}).addTo(summerRoadtrip)

let tripFourteenlatlngs = [
  [36.521275, -106.190435],
  [30.445832, -91.15766],
];
let tripFourteen = L.polyline(tripFourteenlatlngs, {color: 'green'}).addTo(summerRoadtrip)
