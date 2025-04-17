function add(...args) {
  return args.reduce((a, b) => a + b)
}

function currying(fn) {
  let args = []
  return function temp(...newArgs) {
    if (newArgs.length) {
      args = [...args, ...newArgs]
      return temp
    } else {
      let val = fn.apply(this, args)
      args = [] // 保证再次调用时清空
      return val
    }
  }
}
let addCurry = currying(add)
