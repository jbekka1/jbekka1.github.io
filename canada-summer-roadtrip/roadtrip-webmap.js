let summerRoadtrip = L.map("roadtripmapid").setView([41.089, -105.504], 4)
summerRoadtrip.on('click', function (event){
  console.log('You clicked the map at ' + event.latlng)
})

let satelliteBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')
let topoBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}').addTo(summerRoadtrip)
let streetBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}')

let roadtripBasemaps = {
  'Street Map': streetBasemap,
  'Satellite Map': satelliteBasemap,
  'Topographic Map': topoBasemap,
}
L.control.layers(roadtripBasemaps).addTo(summerRoadtrip)

let carsonNationalForest = L.marker([36.521275, -106.190435]).addTo(summerRoadtrip)

let dayOne = L.polyline([])
