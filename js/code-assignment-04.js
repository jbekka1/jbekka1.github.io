let webgisArray = [
  24,
  'http://arcg.is/2DHACvD',
  'Book Assignment 1',
  'An online map tour of National Parks in Utah.',
  true,
  ['code04', 'webgis', 'jbekka1']
]

let webgisObject = {
  id: 24,
  url: 'http://arcg.is/2DHACvD',
  title: 'Book Assignment 1',
  desc: 'An online map tour of National Parks in Utah.',
  thumb: true,
  keywords: [
    'code04',
    'webgis',
    'jbekka1',
  ]
}

console.log(webgisArray[3]);
console.log(webgisObject.desc);
console.log(webgisObject['desc']);
