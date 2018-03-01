// This is my array
let geogProject = [
  24,
  'http://arcg.is/2DHACvD',
  'Book Assignment 1',
  'An online map tour of National Parks in Utah.',
  true
]

// This is my object. Each value has a corresponding property.
let geogProjectObject = {
  id: 24,
  url: 'http://arcg.is/2DHACvD',
  title: 'Book Assignment 1',
  desc: 'An online map tour of National Parks in Utah.',
  thumb: true,
}

// My array within an array (array-ception?)
let geogProject = [
  24,
  'http://arcg.is/2DHACvD',
  'Book Assignment 1',
  'An online map tour of National Parks in Utah.',
  true,
  ['code04', 'webgis', 'jbekka1']
]

// This is my object within an object (object-ception?)
let geogProjectObject = {
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

console.log(geogProject[3]);
console.log(geogProjectObject.desc);
console.log(projectObject['desc']);
