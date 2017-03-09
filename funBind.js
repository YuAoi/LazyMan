if (typeof Function.prototype.bind !== 'function') {
  /*
   * fn.bind(o, arg1, arg2)
   *
   * @param {Object} oThis
   * @param {*} args
  */
  Function.prototype.bind = function(oThis, ...args) {
    if (typeof this !== 'function') throw new TypeError('非函数调用')

    let self = this
    
    let MFN = function() {}
    MFN.prototype = this.prototype

    let bfn = function(...args1) {
      self.apply(this instanceof MFN ? this : oThis || this, [...args, ...args1])
    }
    bfn.prototype = new MFN

    return bfn
  }
}
