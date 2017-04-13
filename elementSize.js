function getElementLeft (element) {
  let actualLeft = element.offsetLeft
  let current = element.offsetParent
  while (current !== null) {
    let parentBorderLeftWidth = document.defaultView.getComputedStyle(current, null).borderLeftWidth
    actualLeft += current.offsetLeft
    if (parentBorderLeftWidth) {
      actualLeft += parseFloat(parentBorderLeftWidth)
    }
    current = current.offsetParent
  }
  return actualLeft
}

function getElementTop (element) {
  let actualTop = element.offsetTop
  let current = element.offsetParent
  while (current !== null) {
    let parentBorderTopWidth = document.defaultView.getComputedStyle(current, null).borderTopWidth
    actualTop += current.offsetTop
    if (parentBorderTopWidth) {
      actualTop += parseFloat(parentBorderTopWidth)
    }
    current = current.offsetParent
  }
  return actualTop
}

function getViewport () {
  if (document.compatMode === 'BackCompat') {
    return {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    }
  } else {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  }
}

function getBoundingClientRect (element) {
  let scrollTop = document.documentElement.scrollTop
  let scrollLeft = document.documentElement.scrollLeft

  if (element.getBoundingClientRect) {
    if (typeof arguments.callee.offset !== 'number') {
      let temp = document.createElement('div')
      temp.style.cssText = 'position: absolute; left: 0; top: 0;'
      document.body.appendChild(temp)
      arguments.callee.offset = -temp.getBoundingClientRect().top - scrollTop
      document.body.removeChild(temp)
      temp = null
    }

    let rect = element.getBoundingClientRect()
    let offset = arguments.callee.offset

    return {
      left: rect.left + offset,
      right: rect.right + offset,
      top: rect.top + offset,
      bottom: rect.bottom + offset
    }
  } else {
    let actualLeft = getElementLeft(element)
    let actualTop = getElementTop(element)

    return {
      left: actualLeft - scrollLeft,
      right: actualLeft + element.offsetWidth - scrollLeft,
      top: actualTop - scrollTop,
      bottom: actualTop + element.offsetHeight - scrollTop
    }
  }
}
