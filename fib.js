function recurFib (n) {
  if (n < 2) return n
  return recurFib(n - 2) + recurFib(n - 1)
}

function dynFib (n) {
  if (n < 2) return n

  let k = 0
  let j = 1
  let c
  for (let i = 2; i <= n; i++) {
    c = k + j
    k = j
    j = c
  }
  return c
}

let index = 40
console.log('check: ', recurFib(index) === dynFib(index))

let now = new Date
console.log('recurFib', recurFib(index), new Date - now)
now = new Date
console.log('dynFib', dynFib(index), new Date - now)