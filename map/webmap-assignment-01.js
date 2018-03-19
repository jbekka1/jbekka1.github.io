//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let mymap = L.map('jasminesmapid').setView([51.505, -0.09], 15)
let basemapUrl = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
L.tileLayer(basemapUrl).addTo(mymap)
let marker = L.marker([51.5, -0.09]).addTo(mymap)
let polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(mymap);
