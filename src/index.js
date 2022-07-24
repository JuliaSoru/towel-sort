
// You should implement your task here.

module.exports = function towelSort(matrix) {
  try {
    let arr = []
    let count = 0
    matrix.forEach((element, idx) => {
      count += 1
      if (count % 2 === 0) {
        element.reverse()
        arr.push(...element)
      } else {
        arr.push(...element)
      }
    });
    return arr
  } catch (TypeError) {
    return []
  }
}
