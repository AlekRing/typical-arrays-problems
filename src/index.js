
exports.min = function min (array) {
  if (!array || array == ['']) return 0
  let min = Math.min(...array)

  return min
}

exports.max = function max (array) {
  if (!array || array == ['']) return 0
  let max = Math.max(...array)

  return max
}

exports.avg = function avg (array) {
  if (!array || array == ['']) return 0

  let sum = 0
  let aver = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  aver = sum / array.length

  return aver
}
