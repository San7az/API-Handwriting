const dateFormat = (date, fmt) => {
  var day = date.getDate()
  var month = date.getMonth() + 1
  var year = date.getFullYear()
  fmt = fmt.replace(/yyyy/, year)
  fmt = fmt.replace(/MM/, month)
  fmt = fmt.replace(/dd/, day)
  return fmt
}
