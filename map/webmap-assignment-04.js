//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let colorado = L.map('jasminesmapid').setView([39.11748, -105.7435], 4)
let basemapUrl ="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
L.tileLayer(basemapUrl).addTo(colorado)

let stateStyle = {
  color: "purple"
}
let stateOptions = {
  style: stateStyle
}
L.geoJSON(stateDemographics, stateOptions).addTo(colorado)
