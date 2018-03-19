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
