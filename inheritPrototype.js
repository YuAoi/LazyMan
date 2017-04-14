function Super (prop) {
  this.prop = prop
}
Super.prototype = {
  constructor: Super,
  name: 'Super'
}

function Sub (prop) {
  Super.call(this, prop)
}
inheritPrototype(Sub, Super)
Sub.prototype.sayName = function () {
  console.log(this.prop)
}
/**
 * SubType 继承 SuperType
 * @param  {Function} SubType   子类构造函数
 * @param  {Function} SuperType 父类构造函数
 * @return {Function} SubType 返回子类构造函数
 */
function inheritPrototype (SubType, SuperType) {
  SubType.prototype = object(SuperType.prototype)
  SubType.prototype.constructor = SubType
  return SubType
}
/**
 * object方法
 * @param  {Object} prototype 一个原型对象
 * @return {F} 返回一个F类的实例，__proto__属性指向prototype
 */
function object (prototype) {
  let F = function () {}
  F.prototype = prototype
  return new F()
}
