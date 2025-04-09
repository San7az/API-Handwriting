function getType(value) {
  if (value === null) {
    return value + ''
  }
  // 判断是否为引用数据类型
  if (typeof value === 'object') {
    let valueClass = Object.prototype.toString().call(value)
    // 如果是数组，返回字符串[object Array]

    let type = valueClass.split(' ')[1].split('')
    // result: ['A','r','r','a','y',']']

    type.pop()
    return type.join('').toLowerCase()
  } else {
    // 判断是否是基本数据类型或者函数类型
    return typeof value
  }
}
