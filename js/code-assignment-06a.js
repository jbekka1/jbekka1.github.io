projectData[0] = {
  id: 3,
  desc: "An online form allowing people to publish possible suspects in a local area.",
  hasScreenshot: true
  }

projectData[1] = {
  id: 5,
  desc: "A data viewer showing US populaton growth through different features and widgets.",
  hasScreenshot: false
}

function describeScreenshot (project) {
  let describeScreenshot = 'Project ' + project.id + ' - ' + project.desc
  return describeScreenshot
}

function describeScreenshotSrc (project) {
  if (project.hasScreenshot === true) {
    let screenshotSrc = 'images/webgis-book-assignment-' + project.id + '.png'
    return screenshotSrc
  } else {
    return 'no-preview.png'
  }
}

for (let i = 0; i < projectData.length; i++) {
  let screenshotDescription = describeScreenshot(projectData[i])
  let screenshotSrc = describeScreenshotSrc(projectData[i])
  console.log(screenshotDescription)
  console.log(screenshotSrc)
}
