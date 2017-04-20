/**
 * 获得两个字符中最长公共子串
 * @param  {String} word1
 * @param  {String} word2
 * @return {String} result
 */
function lcs (word1, word2) {
  let result
  let len = word1.length
  let hash = [...new Array(len)].map(() => 0)
  for (let i = 0; i < len; i++) {
    if (word1[i] === word2[i]) {
      hash[i]++
      if (i !== 0) hash[i] += hash[i - 1]
    }
  }

  let index = getMax(hash)

  result = word1.substr(index - hash[index] + 1, hash[index])

  return result
}
/**
 * 获得一个数组中最大值的索引
 * @param  {Array} arr
 * @return {Number} index
 */
function getMax (arr) {
  let len = arr.length
  if (len === 0) return null
  let index = 0
  let max = arr[0]
  for (let i = 1; i < len; i++) {
    if (arr[i] > max) {
      index = i
      max = arr[i]
    }
  }
  return index
}
/**
 * 获得一个数组中最大值
 * @param  {Array} arr
 * @return {Number} value
 */
function getMaxValue (arr) {
  if (arr.length === 0) return null
  return Math.max.apply(Math, arr)
}

console.log('Check: ', lcs('abc0defghj2klmnn', 'abc1defghj3klmnn') === 'defghj')