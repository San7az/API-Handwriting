//下面来看一道比较典型的问题
// 通过这个问题来对比几种异步编程方法
// 红灯 3s 亮一次，绿灯 1s 亮一次，黄灯 2s 亮一次
// 如何让三个灯不断交替重复亮灯？
function red() {
  console.log('red')
}
function green() {
  console.log('green')
}
function yellow() {
  console.log('yellow')
}

// 用promise实现
const task = (timer, light) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === 'red') {
        red()
      } else if (light === 'green') {
        green()
      } else if (light === 'yellow') {
        yellow()
      }
      resolve()
    }, timer)
  })
}
const step = () => {
  task(3000, 'red').then(() => {
    task(1000, 'green').then(() => {
      task(2000, 'yellow').then(() => {
        step()
      })
    })
  })
}
step()

// 用async/await实现
const taskRunner = async () => {
  await task(3000, 'red')
  await task(1000, 'green')
  await task(2000, 'yellow')
  taskRunner()
}
taskRunner()
