function myFlat(arr, depth) {
  if (!Array.isArray(arr) || depth < 0) {
    return
  }
  return arr.reduce((prev, cur) => {
    if (Array.isArray(cur)) {
      return prev.concat(myFlat(cur, depth - 1))
    } else {
      return prev.concat(cur)
    }
  }, [])
}
