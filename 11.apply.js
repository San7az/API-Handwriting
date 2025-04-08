/**
 *1. 判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
 2. 判断传入上下文对象是否存在，如果不存在，则设置为 window 。
 3. 将函数作为上下文对象的一个属性。
 4. 判断参数值是否传入
 5. 使用上下文对象来调用这个方法，并保存返回结果。
 6. 删除刚才新增的属性
 7. 返回结果
 * apply传入的为数组或者类数组
 */
Function.prototype.myApply = function (context) {
  // 判断调用对象是否为函数
  if (typeof this !== 'function') {
    console.log('type wrong')
  }
  let result = null
  // 判断上下文对象是否存在
  context = context || window

  // 将函数设置为对象的方法
  context.fn = this

  // 调用方法
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }

  // 删除属性
  delete context.fn
  return result
}
