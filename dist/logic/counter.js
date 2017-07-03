
const updateNeigboursCount = function (arr, row, col, maxRow, maxCol) {
  if (arr[row][col].alive) {
    if (row !== 0) { // if not on the top row
      arr[row - 1][col].neighbourCount++ 
      if (col !== 0) {
        arr[row - 1][col - 1].neighbourCount++
      }
      if (col < maxCol - 1) {
        arr[row - 1][col + 1].neighbourCount++
      }
    }
    if (row !== maxRow - 1) { // if not on bottom row
      arr[row + 1][col].neighbourCount++ 
      if (col !== 0) {
        arr[row + 1][col - 1].neighbourCount++
      }
      if (col < maxCol - 1) {
        arr[row + 1][col + 1].neighbourCount++
      }
    }
    if (col > 0) { // left neighbour
      arr[row][col - 1].neighbourCount++
    }
    if (col < maxCol - 1) { // right neighbour
      arr[row][col + 1].neighbourCount++
    }
  }
}

export default updateNeigboursCount
