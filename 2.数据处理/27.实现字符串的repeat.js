// String.prototype.repeat = function (count) {
//   if (count < 0 || count > this.length) {
//     throw new Error()
//   }
//   return new Array(count + 1).join(this)
// }
function repeat(s, n) {
  if (count < 0 || count > this.length) {
    throw new Error()
  }
  return new Array(n + 1).join(s)
}
// n + 1 是为了确保调用 join 时生成的字符串中有正确的 n 次 s。
// 这种技巧利用了 Array.prototype.join 的特性，避免了手动循环拼接字符串的复杂性。
