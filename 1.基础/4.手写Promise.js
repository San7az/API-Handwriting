const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  // 保存初始化状态
  var self = this

  // 初始化状态
  this.state = PENDING

  // 用于保存 resolve 或者 rejected 传入的值
  this.value = null

  // 用于保存 resolve 的回调函数
  this.resolvedCallbacks = []

  // 用于保存 rejected 的回调函数
  this.rejectedCallbacks = []

  // 状态转变为 resolved 方法
  function resolve(value) {
    // 判断传入元素是否为 Promise 值，如果是，则状态改变必须等待前一个状态改变后再进行改变
    if (value instanceof MyPromise) {
      return value.then(resolve, reject)
    }

    // 保证代码的执行顺序为本轮事件循环的末尾
    setTimeout(() => {
      // 只有状态为 pending 时候才执行
      if (self.state === PENDING) {
        // 修改状态
        self.state = RESOLVED

        // 设置传入的值
        self.value = value

        // 执行回调函数
        self.resolvedCallbacks.forEach((callback) => {
          callback(value)
        })
      }
    }, 0)
  }

  // 状态转变为 rejected 方法
  function reject(value) {
    // 保证代码的执行顺序为本轮事件循环的末尾
    setTimeout(() => {
      // 只有状态为 pending 时候才执行
      if (self.state === PENDING) {
        // 修改状态
        self.state = REJECTED

        // 设置传入的值
        self.value = value

        // 执行回调函数
        self.rejectedCallbacks.forEach((callback) => {
          callback(value)
        })
      }
    }, 0)
  }

  // 将两个方法传入函数执行
  try {
    fn(resolve, reject)
  } catch (e) {
    // 遇到错误时,捕获错误，执行 reject 函数
    reject(e)
  }

  MyPromise.prototype.then = function (onResolved, onRejected) {
    // 首先判断是否为函数类型
    onResolved =
      typeof onResolved === 'function'
        ? onResolved
        : function (value) {
            return value
          }
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : function (error) {
            throw error
          }
    // 如果是等待状态，则将函数加入对应列表
    if (this.state === PENDING) {
      this.resolvedCallbacks.push(onResolved)
      this.rejectedCallbacks.push(onRejected)
    }

    // 如果状态已经凝固，则执行对应方法
    if (this.state === RESOLVED) {
      onResolved(this.value)
    }
    if (this.state === REJECTED) {
      onRejected(this.value)
    }
  }
  function then(onFulfilled, onRejected) {
    // 保存前一个 promise 的 this
    const self = this
    return new MyPromise((resolve, reject) => {
      // 封装前一个 promise 成功时执行的函数
      let fulfilled = () => {
        try {
          const result = onFulfilled(self.value) // 承前
          return result instanceof MyPromise
            ? result.then(resolve, reject)
            : resolve(result) // 启后
        } catch (err) {
          reject(err)
        }
      }

      // 封装前一个 promise 失败时执行的函数
      let rejected = () => {
        try {
          const result = onRejected(self.value)
          return result instanceof MyPromise
            ? result.then(resolve, reject)
            : reject(result)
        } catch (err) {
          reject(err)
        }
      }

      switch (self.state) {
        case PENDING:
          self.resolvedCallbacks.push(fulfilled)
          self.rejectedCallbacks.push(rejected)
          break
        case RESOLVED:
          fulfilled()
          break
        case REJECTED:
          rejected()
          break
      }
    })
  }
}
