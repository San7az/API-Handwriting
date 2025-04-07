/**
 * 函数防抖是指在事件被触发 n 秒后再执行回调
 * 如果在这 n 秒内事件又被触发，则重新计时
 * 这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。
 */
function debounce(fn, wait) {
  let timer = null
  return function () {
    let context = this,
      args = arguments
    // 如果定时器存在，则取消之前的定时器，并重新计时
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}
