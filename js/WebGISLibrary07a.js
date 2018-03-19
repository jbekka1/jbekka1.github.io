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
