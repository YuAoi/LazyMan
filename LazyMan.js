class LazyMan {
  constructor(name) {
    this.name = name
    this.task = []
    Promise.resolve().then(() => this.run())
  }

  async run() {
    for (let fn of this.task) await fn()
    return this
  }

  eat(food) {
    this.use(() => {
      console.log(`eat: ${food}`)
    })
    return this
  }

  sleep(ms) {
    this.use(() => {
      console.log(`sleep:${ms}`)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('wakeup')
            resolve()
        }, ms)
      })
    })
    return this
  }

  use(fn) {
    this.task.push(fn)
    return this
  }
}

// 使用方法
new LazyMan('foo').eat('food0').sleep(2000).eat('food1').eat('food2')
