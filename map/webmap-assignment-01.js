//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let mymap = L.map('jasminesmapid').setView([51.505, -0.09], 15)
let basemapUrl = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png'
L.titleLayer(basemapUrl).addTo(mymap)
