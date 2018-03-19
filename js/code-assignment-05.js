let projectData = []

projectData[0] = {
  id: 3,
  desc: "An online form allowing people to publish possible suspects in a local area.",
  hasScreenshot: true
}
projectData[1] = {
  id: 4,
  desc: "A data viewer showing US populaton growth through different features and widgets.",
  hasScreenshot: true
}

for (let i = 0; i < projectData.length; i++) {
  console.log('Index position ' + i + 'desc: ' + projectData[i].desc);
  if (projectData[i].hasScreenshot === true) {
    console.log('images/ss-project-' + projectData[i].id + '.png')
} else {
  console.log('images/no-preview.png')
}
