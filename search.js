
let arr = [...new Array(100)].map((item, index) => index)

/*
 * 顺序查找
 *
 * @param {Array} arr
 * @param {*} data
 * @return {Number} index
*/
function reqSearch (arr, data) {
  let index = -1
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === data) {
      index = i
    }
  }
  return index
}

console.log('index', reqSearch(arr, 99))  // 99

/*
 * 查找最小值
 *
 * @param {Array} arr
 * @return {Number} min
*/
function findMin(arr) {
  let min = arr[0]
  for (let i = 1, len = arr.length; i < len; i++) {
    if (arr[i] < min) min = arr[i]
  }
  return min
}

console.log('min', findMin([3 , 2, 4, 1]))  // 1

/*
 * 二分查找
 *
 * @param {Array} arr
 * @param {*} data
 * @return {Number} index 
*/
function binSearch(arr, data) {
  let upperBound = arr.length - 1
  let lowerBound = 0
  if (data === arr[upperBound]) return upperBound
  if (data === arr[lowerBound]) return lowerBound
  if (data > arr[upperBound] || data < arr[lowerBound]) return -1

  let mid
  while (lowerBound <= upperBound) {
    mid = Math.floor((upperBound + lowerBound) / 2)
    if (arr[mid] < data) lowerBound = mid + 1
    else if (arr[mid] > data) upperBound = mid - 1
    else return mid
    console.log('lu', lowerBound, upperBound)
  }
  return -1
}

console.log('bin', binSearch(arr, 96))
