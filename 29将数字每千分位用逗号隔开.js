let format = (n) => {
  let num = n.toString()
  let decimals = ''
  num.indexOf('.') > -1 ? (decimals = num.split('.')[1]) : decimals
  let len = num.length
  if (len <= 3) {
    return num
  } else {
    let temp = ''
    let reminder = len % 3
    decimals ? (temp = '.' + decimals) : temp
    if (reminder > 0) {
      // 不是3的整数倍
      return (
        num.slice(0, reminder) +
        ',' +
        num.slice(reminder, len).match(/\d{3}/g).join(',') +
        temp
      )
    } else {
      return num.slice(0, len).match(/\d{3}/g).join(',') + temp
    }
  }
}
