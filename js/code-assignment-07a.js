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

for (let i = 0; i < projectData.length; i++) {
  let screenshotDescription = describeScreenshot(i)
  console.log(screenshotDescription)
  let screenshotSrc = describeScreenshotSrc(i)
  console.log(screenshotSrc)
}

$(document).ready(console.log('The page is ready!'))
