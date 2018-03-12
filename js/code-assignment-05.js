let project3 = {
  id: 3,
  desc: "An online form allowing people to publish possible suspects in a local area.",
  hasScreenshot: true
}
let project4 = {
  id: 5,
  desc: "A data viewer showing US populaton growth through different features and widgets.",
  hasScreenshot: true
}
let projects = [
  project3,
  project4
]
for (let projectIndex = 0; projectIndex < projects.length; projectIndex++) {
}
console.log('Element ' + projectIndex + 'desc: ' + projects[projectIndex].desc);
console.log('images/ss-project-' + projects[projectIndex].id + '.png');
if (projects[projectIndex].hasScreenshot === true) {
  console.log('images/ss-project-' + projects[projectIndex].id + '.png');
}
