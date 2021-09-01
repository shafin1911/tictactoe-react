const checkIfMatch = (arr, i, firstValue, rowCheck) => {
  let count = arr[0].length
  let n = 0
  let flag = true
  while (n < count) {
    if (firstValue !== arr[rowCheck ? i : n][rowCheck ? n : i]) {
      flag = false
      break
    }
    n++
  }
  if (flag) return true
  return false
}

export const gameLogic = (arr) => {
  let count = arr[0].length
  for (let i = 0; i < arr[0].length; i++) {
    let firstValue = arr[i][0]
    if (firstValue && checkIfMatch(arr, i, firstValue, true))
      return `${firstValue} wins`

    firstValue = arr[0][i]
    if (firstValue && checkIfMatch(arr, i, firstValue, false))
      return `${firstValue} wins`
  }

  // Diagonal Check
  // [0,0] [1,1] [2,2] [3,3]
  // [0,3] [1,2] [2,1] [3,0]
  let firstValue = arr[0][0]
  let lastValue = arr[0][count - 1]
  let lflag = true
  let rflag = true
  let k = 0,
    l = 0
  let m = 0,
    n = count - 1
  for (let j = 0; j < count; j++) {
    if (firstValue && firstValue !== arr[k][l]) {
      lflag = false
    }
    if (lastValue && lastValue !== arr[m][n]) {
      rflag = false
    }
    k++
    l++
    m++
    n--
  }
  if (firstValue && lflag) return `${firstValue} wins`
  if (lastValue && rflag) return `${lastValue} wins`
  return 'No Result'
}
