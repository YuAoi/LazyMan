let arr1 = [...new Array(10)].map((item, index) => index * 2)
let arr2 = [...new Array(10)].map((item, index) => index)
/**
 * [合并两个有序数组]
 * @param  {Array} arr1 [description]
 * @param  {Array} arr2 [description]
 * @return {Array}      [description]
 */
function concatOrderedArray (arr1, arr2) {
  let arr1Len = arr1.length
  let arr2Len = arr2.length
  let start = 0
  // 如果arr2是空数组，则直接返回arr1；如果arr1是空数组，则复制arr2至arr1后返回arr1
  if (arr2Len === 0) {
    return arr1
  } else if (arr1Len === 0) {
    arr1.push.apply(arr1, arr2)
    return arr1
  }
  for (let i = 0; i < arr2Len; i++) {
    for (let k = start; k < arr1Len; k++) {
      if (arr1[k] > arr2[i]) {
        arr1.splice(k, 0, arr2[i])
        start = k + 1
        arr1Len++
        break
      } else if (k === arr1Len - 1) {
        arr1.push.apply(arr1, arr2.slice(i))
        return arr1
      }
    }
  }
  return arr1
}

console.log(concatOrderedArray(arr1, arr2))
console.log('check: ', arr1.every((item, index) => {
  if (index === 0) return true
  return item >= arr1[index - 1]
}))