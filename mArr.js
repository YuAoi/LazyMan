let mArr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8]
]

function rArr (mArr) {
  if (!Array.isArray(mArr)) throw new TypeError('必须传递数组')

  let height = mArr.length
  if (!height) return []

  for (let arr of mArr) {
    if (!Array.isArray(arr)) throw new TypeError('必须是格式正确的二维数组')
  }
  let width = mArr[0].length
  let result = Array.matrix(width, height, 0)

  result.forEach((arr, index) => {
    arr.forEach((item, ind) => {
      arr[ind] = mArr[ind][index]
    })
  })

  return result
}

Array.matrix = function(rows, cols, initial) {
  let result = []
  for (let i = 0; i < rows; i++) {
    let columns = []
    for (let j = 0; j < cols; j++) {
      columns[j] = initial
    }
    result[i] = columns
  }
  return result
}

Array.prototype.mConcat = function () {
  let result = []
  result = result.concat.apply(result, this)
  return result
}

let Counter = function () {
  let i = 0
  return function() {
    return i++
  }
}()
console.log(0, Counter())
console.log(1, Counter())

console.log(rArr(mArr))
console.log(mArr.mConcat())