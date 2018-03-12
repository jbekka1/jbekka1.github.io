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
for (let i = 0; i < projects.length; i++) {
  console.log('Element ' + i + 'desc: ' + projects[i].desc);
  console.log('images/ss-project-' + projects[i].id + '.png');
}
if (projects[i].hasScreenshot === true) {
  console.log('images/ss-project-' + projects[i].id + '.png');
} // need help understanding why my conditional statement is not being logged
