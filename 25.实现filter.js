Array.prototype.filter = function (callback) {
  if (typeof callback !== 'function') {
    throw Error('callback must be a function')
  }
  const res = []
  for (let i = 0, len = this.length; i < len; i++) {
    callback(this[i]) && res.push(this[i])
  }
  return res
}
