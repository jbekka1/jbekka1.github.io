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

function describeScreenshot (project) {
  let describeScreenshot = 'Project ' + project.id + ' - ' + project.desc
  return describeScreenshot
}

function describeScreenshotSrc (project) {
  if (project.hasScreenshot === true) {
    let describeScreenshotSrc = 'images/ss-project-' + project.id + '.png'
    return descibeScreenshotSrc
  }
  return 'images/no-preview.png'
}

for (let i = 0; i < projectData.length; i++) {
  let screenshotDescription = describeScreenshot(projectData[i])
  let screenshotSrc = describeScreenshotSrc(projectData[i])
  console.log(screenshotDescription)
  console.log(screenshotSrc)
}
