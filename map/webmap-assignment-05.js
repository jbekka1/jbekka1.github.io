//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let coloradoMap = L.map('jasminesmapid').setView([40.015769, -105.29263], 11)
coloradoMap.on('click', function (event){
  console.log('You clicked the map at ' + event.latlng)
})
let streetBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(coloradoMap)
let satelliteBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')
let topoBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}')

let coloradoBasemaps = {
  'Street Map': streetBasemap,
  'Satellite basemap': satelliteBasemap,
  'Topographic basemap': topoBasemap,
}
L.control.layers(coloradoBasemaps).addTo(coloradoMap)

function wildlifeClosureStyle (feature) {
  let closureType = feature.properties.Species
  let locationColor = 'Violet'
  if ( closureType = ' Bat ') {locationColor = 'Purple'}
  let wildlifeClosureStyle = {
    color: locationColor,
    weight: 2,
    fillOpacity: 0.4
  }
  return wildlifeClosureStyle
}
function wildlifeClosurePopup (feature, layer) {
  let closureTypeName = feature.properties.ClosureNam
  let closureType = feature.properties.Species
  layer.bindPopup('The area of ' + closureTypeName + ' has a seasonal wildlife closure due to a species of ' + closureType)
}
let wildlifeClosureOptions = {
  style: wildlifeClosureStyle,
  onEachFeature: wildlifeClosurePopup
}
L.geoJSON(boulderWildlifeClosures, wildlifeClosureOptions).addTo(coloradoMap)
