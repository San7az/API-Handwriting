function myInstanceOf(obj, constructor) {
  // 如果obj不是对象，则直接返回false
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return false
  }
  let proto = Object.getPrototypeOf(obj) // 获取实例对象的隐式原型__proto__
  let prototype = constructor.prototype // 获取构造函数的显式原型prototype
  while (true) {
    if (!proto) {
      return false
    }
    if (proto === prototype) {
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
}
