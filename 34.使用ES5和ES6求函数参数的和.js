// ES5
function sum() {
  let sum = 0
  Array.prototype.forEach.call(arguments, function (item) {
    sum = sum + item
  })
  return sum
}

// ES6
function sumEs6(...nums) {
  let sum = 0
  nums.forEach(function (item) {
    sum = sum + item
  })
  return sum
}
