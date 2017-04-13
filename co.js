let p = [...new Array(10)].map((item, index) => {
  return function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(index)
        console.log(index)
      }, 1000)
    })
  }
})
/**
 * 传递一个函数数组，使用async函数，顺序执行每一个函数（包含异步）
 * @param {Array} fns
 * @return {Promise}
 */
async function autoRun (fns) {
  for (let fn of fns) {
    await fn()
  }
}

// autoRun(p).then(() => console.log('end'))

/**
 * 传递一个函数数组，依赖promise.then方法顺序执行每一个函数（包含异步）
 * @param {Array} fns
 * @return {Promise}
 */
function run (fns) {

  return new Promise((resolve, reject) => {
    let current = -1
    let len = fns.length
    next(0)
    function next (i) {
      if (i <= current) return reject(new TypeError('重复调用'))
      if (i >= len) return resolve()
      current = i

      let fn = fns[current]
      fn().then(() => next(i + 1)).catch((e) => reject(e))
    }
  })

  
}

// run(p).then(() => console.log('end'))

let m = [...new Array(10)].map((item, index) => {
  return function (next) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(index)
        console.log(index, typeof next)
        if (index < 16 ) next()
      }, 1000)
    })
  }
})
/**
 * 传递一个函数数组，其中每一个函数调用next方法用于执行下个函数
 * @param {Array} fns
 */
function compose (fns) {
  next(0)()
  function next (i) {
    return function () {
      let fn = fns[i]
      if (fn) fn(next(i + 1))
    }
  }
}
/**
 * 传递一个函数数组，其中每一个函数调用next方法用于执行下个函数，返回一个启动函数
 * @param {Array} fns
 * @return {Function}
 */
compose.wrap = function (fns) {
  return function () {
    compose(fns)
  }
}
// compose(m)
compose.wrap(m)()
