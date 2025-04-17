function jsonToTree(data) {
  // 初始化结果数组，并判断输入数据的格式
  let result = []
  if (!Array.isArray(data)) {
    return result
  }

  // 使用map，将当前对象的id与当前对象对应存储起来
  let map = {}
  data.forEach((item) => {
    map[item.id] = item
  })

  data.forEach((item) => {
    let parent = map[item.pid]
    if (parent) {
      ;(parent.children || (parent.children = [])).push(item)
    } else {
      result.push(item)
    }
  })
  return result
}
