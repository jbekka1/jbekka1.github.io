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

function describeScreenshot (i) {
  let describeScreenshot = 'Project ' + project.id + ' - ' + projectData[i].desc
  return describeScreenshot
}

function describeScreenshotSrc (i) {
  if (projectData[i].hasScreenshot === true) {
    return 'images/webgis-book-assignment-' + projectData[i].id + '.png'
  } else {
    return 'no-preview.png'
  }
}

for (let i = 0; i < projectData.length; i++) {
  let screenshotDescription = describeScreenshot(i)
  let screenshotSrc = describeScreenshotSrc(i)
  console.log(screenshotDescription)
  console.log(screenshotSrc)
}
