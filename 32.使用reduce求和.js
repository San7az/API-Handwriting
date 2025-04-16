// 单层结构
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.reduce((item, sum) => item + sum, 0)

// 多层结构
let arr1 = [1, 2, 3, [[4, 5], 6], 7, 8, 9]
// 需要先展开
arr1.flat(Infinity).reduce((item, sum) => item + sum, 0)

// 数组包对象
let arr2 = [{ a: 1, b: 3 }, { a: 2, b: 3, c: 4 }, { a: 3 }]
arr2.reduce((prev, cur) => prev + cur['a'], 0)
