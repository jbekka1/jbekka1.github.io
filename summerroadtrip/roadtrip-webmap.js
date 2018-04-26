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

let campsiteTent = L.icon({
  iconUrl: 'camping-tent-icon.PNG',
  iconSize: [55, 45], // size of the icon
  iconAnchor: [30, 25], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -15] // point from which the popup should open relative to the iconAnchor
  });

let batonRouge = L.marker([30.445832, -91.15766], {icon: campsiteTent}).addTo(summerRoadtrip)
let carsonNationalForest = L.marker([36.521275, -106.190435], {icon: campsiteTent}).addTo(summerRoadtrip)
let rockyMountain = L.marker([40.398856, -105.724774], {icon: campsiteTent}).addTo(summerRoadtrip)
let grandTeton = L.marker([43.733002, -110.678657], {icon: campsiteTent}).addTo(summerRoadtrip)
let yellowstone = L.marker([44.629573, -110.584736], {icon: campsiteTent}).addTo(summerRoadtrip)
let glacier = L.marker([48.634361, -113.707904], {icon: campsiteTent}).addTo(summerRoadtrip)
let banff = L.marker([51.508743, -116.011637], {icon: campsiteTent}).addTo(summerRoadtrip)
let northCascades = L.marker([48.822779, -121.338138], {icon: campsiteTent}).addTo(summerRoadtrip)
let olympic = L.marker([47.757053, -123.625476], {icon: campsiteTent}).addTo(summerRoadtrip)
let mtRainier = L.marker([46.910499, -121.679636], {icon: campsiteTent}).addTo(summerRoadtrip)
let cratersOfTheMoon = L.marker([43.161917, -113.478357], {icon: campsiteTent}).addTo(summerRoadtrip)
let arches = L.marker([38.724733, -109.602418], {icon: campsiteTent}).addTo(summerRoadtrip)

let tripOnelatlngs = [
  [30.445832, -91.15766],
  [36.521275, -106.190435],
];
let tripOne = L.polyline(tripOnelatlngs, {color: '#C17EF2'}).addTo(summerRoadtrip)

let tripTwolatlngs = [
  [36.521275, -106.190435],
  [40.398856, -105.724774],
];
let tripTwo = L.polyline(tripTwolatlngs, {color: '#BE6CE9'}).addTo(summerRoadtrip)

let tripThreelatlngs = [
  [36.521275, -106.190435],
  [40.398856, -105.724774],
];
let tripThree = L.polyline(tripThreelatlngs, {color: '#BE6CE9'}).addTo(summerRoadtrip)

let tripFourlatlngs = [
  [40.398856, -105.724774],
  [43.733002, -110.678657],
];
let tripFour = L.polyline(tripFourlatlngs, {color: '#A65ECB'}).addTo(summerRoadtrip)

let tripFivelatlngs = [
  [43.733002, -110.678657],
  [44.629573, -110.584736],
];
let tripFive = L.polyline(tripFivelatlngs, {color: '#9959BA'}).addTo(summerRoadtrip)

let tripSixlatlngs = [
  [44.629573, -110.584736],
  [48.634361, -113.707904],
];
let tripSix = L.polyline(tripSixlatlngs, {color: '#834C9F'}).addTo(summerRoadtrip)

let tripSevenlatlngs = [
  [48.634361, -113.707904],
  [51.508743, -116.011637],
];
let tripSeven = L.polyline(tripSevenlatlngs, {color: '#6D4084'}).addTo(summerRoadtrip)

let tripEightlatlngs = [
  [51.508743, -116.011637],
  [48.822779, -121.338138],
];
let tripEight = L.polyline(tripEightlatlngs, {color: '#623A76'}).addTo(summerRoadtrip)

let tripNinelatlngs = [
  [48.822779, -121.338138],
  [47.757053, -123.625476],
];
let tripNine = L.polyline(tripNinelatlngs, {color: '#6D4084'}).addTo(summerRoadtrip)

let tripTenlatlngs = [
  [47.757053, -123.625476],
  [46.910499, -121.679636],
];
let tripTen = L.polyline(tripTenlatlngs, {color: '#834C9F'}).addTo(summerRoadtrip)

let tripElevenlatlngs = [
  [46.910499, -121.679636],
  [43.161917, -113.478357],
];
let tripEleven = L.polyline(tripElevenlatlngs, {color: '#9959BA'}).addTo(summerRoadtrip)

let tripTwelvelatlngs = [
  [43.161917, -113.478357],
  [38.724733, -109.602418],
];
let tripTwelve = L.polyline(tripTwelvelatlngs, {color: '#A65ECB'}).addTo(summerRoadtrip)

let tripThirteenlatlngs = [
  [38.724733, -109.602418],
  [36.521275, -106.190435],
];
let tripThirteen = L.polyline(tripThirteenlatlngs, {color: '#BE6CE9'}).addTo(summerRoadtrip)

let tripFourteenlatlngs = [
  [36.521275, -106.190435],
  [30.445832, -91.15766],
];
let tripFourteen = L.polyline(tripFourteenlatlngs, {color: '#C17EF2'}).addTo(summerRoadtrip)

batonRouge.bindPopup('Start Point: Early Morning Departure from Baton Rouge, Louisiana // Final Destination')
carsonNationalForest.bindPopup('Day 1: Drive into Carson National Forest, trailblaize and camp 1 night at first come first serve campsite // Day 31: Camping 1 night on the road back to Baton Rouge; https://www.fs.usda.gov/carson ')
rockyMountain.bindPopup('Days 2 - 4: Early Morning drive into Rocky Mountain National Park, hiking and camping 3 nights at Aspenglen campground; https://www.nps.gov/romo/index.htm ')
grandTeton.bindPopup('Days 5 - 6: Drive early into Grand Teton National Park, hike and camp 2 nights at first come first serve campsite; https://www.nps.gov/grte/index.htm ')
yellowstone.bindPopup('Days 6 - 10: Drive into YellowStone National Park, spend 4 days hiking and 5 nights camping at Bridge Bay campground; https://www.nps.gov/yell/index.htm ')
glacier.bindPopup('Days 11 - 13: Drive Into Glaier National Park and trailblaize and camp 3 nights at Fish Creek campground; https://www.nps.gov/glac/index.htm ')
banff.bindPopup('Days 14 - 17: Drive into Banff National Park in Canada and spend 4 nights camping and hiking here at a walk-in campsite; https://www.lonelyplanet.com/canada/alberta/banff-and-jasper-national-parks ')
northCascades.bindPopup('Days 18 - 20: Drive in North Cascades National Park in Washington, hike and camp for 3 nights at Newhalem campground; https://www.nps.gov/noca/index.htm ')
olympic.bindPopup('Days 21 - 24: Drive into Olympic National Park and spend 4 nights hiking here and camping at Sol Duc Hot Springs Resort campground; https://www.nps.gov/olym/index.htm ')
mtRainier.bindPopup('Day 25: Drive to Mt. Rainier National Park and camp for 1 night here; https://www.nps.gov/mora/index.htm ')
cratersOfTheMoon.bindPopup('Days 26 - 27: Dive into Craters of the Moon National Monument in Idaho and camp for two nights here; https://www.nps.gov/crmo/index.htm ')
arches.bindPopup('Day 28 - 30: Drive into Arches National Park, hike and dirtbike through red rock canyons and camp for 3 nights in Devils Garden campground; https://www.nps.gov/arch/index.htm ')
