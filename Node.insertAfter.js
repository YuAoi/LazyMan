Node.prototype.insertAfter = function (newElement, referenceElement) {
  if (!newElement) throw new TypeError('newElement 必须传递')
  // 如果不传递referenceElement，则将执行appendChild操作
  if (!referenceElement) {
    return this.appendChild(newElement)
  }
  if (referenceElement.parentNode !== this) {
    throw new TypeError('referenceElement只能是当前节点的子节点')
  }
  let next = referenceElement.nextSibling
  // 如果referenceElement === lastChild
  if (next === null) {
    return this.appendChild(newElement)
  } else {
    return this.insertBefore(newElement, next)
  }
}
