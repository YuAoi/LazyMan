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

async function autoRun (fns) {
  for (let fn of fns) {
    await fn()
  }
}

autoRun(p).then(() => console.log('end'))

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
        if (index < 6 ) next()
      }, 1000)
    })
  }
})

function compose (fns) {

  return function () {
    let current = 0
    let len = fns.length
    
    fns[current](next(current + 1))
  }

  function next (i) {

    return function () {
      let fn = fns[i]
      if (fn) fn(next(i + 1))
    }
  }
}

compose(m)()