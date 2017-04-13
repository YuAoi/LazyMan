/**
 * 传入一个element，返回一个js描述对象，如有fn则调用fn并将element当做参数传入
 * @param {Element} element
 * @param {function} fn
 * @return {Object} virtualElement
 */

function getDomTree (element, fn) {
  if (fn && typeof fn === 'function') fn(element)
  let datasetReg = /^(?:data\-)/
  let virtualElement = {}

  virtualElement.nodeName = element.nodeName
  virtualElement.nodeValue = element.nodeValue
  virtualElement.nodeType = element.nodeType

  if (element.nodeType !== 1) {
    return virtualElement
  }

  virtualElement.children = []
  virtualElement.styleData = {}
  virtualElement.dataset = {}
  for (let i = 0, len = element.attributes.length; i < len; i++) {
    let attr = element.attributes[i]

    virtualElement[attr.nodeName] = attr.nodeValue

    if (datasetReg.test(attr.nodeName)) {
      let propName = attr.nodeName.replace(datasetReg, '').replace(/\-(\w)/g, (match, sub) => sub.toUpperCase())
      virtualElement.dataset[propName] = attr.nodeValue
      continue
    }
  }
  
  for (let i = 0, len = element.style.length; i < len; i++) {
    let cssProp = element.style[i]
    let cssValue = element.style.getPropertyValue(cssProp)
    virtualElement.styleData[cssProp] = cssValue
  }

  let currentChild = element.firstChild
  while (currentChild) {
    virtualElement.children.push(getDomTree(currentChild, fn))
    currentChild = currentChild.nextSibling
  }

  return virtualElement
}
