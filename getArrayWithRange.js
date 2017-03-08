let selectFrom = (start, end) => {
  let choices = end - start + 1
  return Math.floor(Math.random() * choices + start)
}

let inArray = (arr, item) => arr.indexOf(item) > -1

/*
  * 在一个范围内取一个固定长度不重复的数组
  *
  * @param {Number} len 长度，必须整数
  * @param {Array} range 范围
  * @return {Array} 一个不重复的随机数组成的数组
*/

let getArrayWithRange = (len, range = [2, 32]) => {
  if (typeof len !== 'number' || !Number.isInteger(len)) throw new TypeError('len 必须是整数')
  if (len < 0) throw new RangeError('len 必须大于0')
  if (!Array.isArray(range)) throw new TypeError('range 必须是一个数组')
  if (range.length !== 2) throw new RangeError('range 长度必须为二')
  if (typeof range[0] !== 'number' || !Number.isInteger(range[0]) || typeof range[1] !== 'number' || !Number.isInteger(range[1])) throw new TypeError('range 只能包含整数')
  if (range[0] >= range[1]) throw new RangeError('传入的范围不对')
  if (len > range.reduce((a, b) => b - a) + 1) throw new RangeError('len 超出 range')
  
  let res = []
  
  while(len) {
    let randomValue = selectFrom(...range)
    if (!inArray(res, randomValue)) {
      res.push(randomValue)
      len--
    }
  }
  return res
}

console.log(getArrayWithRange(12, [5, 30]).sort((a, b) => a - b))