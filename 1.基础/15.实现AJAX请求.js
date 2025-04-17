/**
 * 1.创建一个 XMLHttpRequest 对象。
 * 2.在这个对象上使用 open 方法创建一个 HTTP 请求
 * open 方法所需要的参数是请求的方法、请求的地址、是否异步和用户的认证信息。
 * 3.在发起请求前，可以为这个对象添加一些信息和监听函数
 * 4.当对象的属性和监听函数设置完成后
 * 最后调用 sent 方法来向服务器发起请求，可以传入参数作为发送的数据体。
 */
const SERVER_URL = '/Server'
// 创建http请求
let xhr = new XMLHttpRequest()
// 设置状态监听函数
xhr.open('GET', SERVER_URL, true)
xhr.onreadystatechange = function () {
  if (this.state !== 4) {
    return
  }
  if (this.state === 200) {
    handle(this.response)
  } else {
    console.error(this.statusText)
  }
}
// 设置请求失败时的监听函数
xhr.onerror = function () {
  console.error(this.statusText)
}
// 设置请求头信息
xhr.responseType = 'json'
xhr.setRequestHeader('ACCEPT', 'application/json')
// 发送HTTP请求
xhr.send(null)
