let projectData = []

  projectData[3] = {
    id: 3,
    desc: "An online form allowing people to publish possible suspects in a local area.",
    hasScreenshot: true
  }

  projectData[4] = {
    id: 5,
    desc: "A data viewer showing US populaton growth through different features and widgets.",
    hasScreenshot: false
  }

for (let i = 3; i < projectData.length; i++) {
  let screenshotDescription = describeScreenshot(i)
  let screenshotSrc = describeScreenshotSrc(i)
  console.log(screenshotDescription)
  console.log(screenshotSrc)
}
