Array.prototype.map = function (callback) {
  if (typeof callback !== 'function') {
    return
  }
  const res = []
  for (let i = 0, len = this.length; i < len; i++) {
    res.push(callback(this[i]))
  }
  return res
}
