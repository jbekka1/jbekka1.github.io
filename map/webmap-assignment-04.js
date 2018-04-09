//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let coloradoMap = L.map('jasminesmapid').setView([39.951121, -105.294346], 16)
let basemapUrl ="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
L.tileLayer(basemapUrl).addTo(coloradoMap)

let stateStyle = function () {
  let formatting = {
    color: "purple",
    weight: 3,
    fillOpacity: 0.4
  }
  return formatting
}
let stateOptions = {
  style: stateStyle
}
L.geoJSON(coloradoRockClimbing, stateOptions).addTo(coloradoMap)
