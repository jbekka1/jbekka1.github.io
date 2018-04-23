let summerRoadtrip = L.map('roadtripmapid').setView([51.505, -0.09], 13)
let basemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(basemapUrl).addTo(summerRoadtrip)
