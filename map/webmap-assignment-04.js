//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let coloradoMap = L.map('jasminesmapid').setView([40.015769, -105.29263], 11)
let basemapUrl ="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
coloradoMap.on('click', function (event){
  console.log('You clicked the map at ' + event.latlng)
})
L.tileLayer(basemapUrl).addTo(coloradoMap)
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
let wildlifeClosureOptions = {
  style: wildlifeClosureStyle,
  onEachFeature: wildlifeClosurePopup
}
function wildlifeClosurePopup (feature, layer) {
  let closureTypeName = feature.properties.ClosureNam
  let closureType = feature.properties.Species
  layer.bindPopup('The area of ' + closureTypeName + ' has a seasonal wildlife closure due to a species of ' + closureType)
}
L.geoJSON(boulderWildlifeClosures, wildlifeClosureOptions).addTo(coloradoMap)
