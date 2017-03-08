let add = (...args) => {
  let fn = (...args1) => add(...[...args, ...args1])
  fn.valueOf = () => args.reduce((a, b) => a + b)
  return fn
}

console.log(add(1))
console.log(add(1)(2))
console.log(add(1, 2, 3, 4)(5))
console.log(add(1)(2)(3)(4)(5))