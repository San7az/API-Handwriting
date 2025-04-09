/**
 * 函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
 * fn.length 表示该函数定义时的参数个数，具体指的是函数声明中形参列表的长度。
 */
function curry(fn, ...args) {
  return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args)
}
