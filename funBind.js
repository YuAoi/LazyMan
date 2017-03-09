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

    let bfn = function() {
      self.apply(this instanceof MFN ? this : oThis || this, args)
    }
    bfn.prototype = new MFN

    return bfn
  }
}
