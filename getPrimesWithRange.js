function isPrime(n) {
  if (n <= 3) return n > 1
  if (n % 2 == 0 || n % 3 == 0) return false

  for (let  i = 5; i * i <= n; i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) return false
  }
  return true
}

/*
  * 从一个范围内取质数数组
  *
  * @param {Array} range 一个数组
  * @return {Array}
*/

let getPrimesWithRange = ([start = 2, end = 32] = []) => {
  let res = []
  while(start <= end) {
    if (isPrime(start)) res.push(start)
    start++
  }
  return res
}

console.log(getPrimesWithRange())
console.log(getPrimesWithRange([0, 32]))