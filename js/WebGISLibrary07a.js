function describeScreenshot (i) {
  let describeScreenshot = 'Project ' + project.id + ' - ' + project.desc
  return describeScreenshot
}

function describeScreenshotSrc (i) {
  if (project.hasScreenshot === true) {
    let screenshotSrc = 'images/webgis-book-assignment-' + project.id + '.png'
    return screenshotSrc
  } else {
    return 'no-preview.png'
  }
}
