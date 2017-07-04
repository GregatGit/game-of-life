
const updateNeigboursCount = function (arr, row, col, maxRow, maxCol) {
  let theCell = arr[row][col]
  console.log('here: ', theCell.alive, row, col, theCell.neighbourCount)
  if (theCell.alive) {
    // check top row
    if (row !== 0){
      arr[row - 1][col].neighbourCount++
      // check top left
      if (col > 0)
        arr[row -1][col - 1].neighbourCount++
      if (col < maxCol - 1)
        arr[row - 1][col + 1].neighbourCount++
    }
    // check bottom row
    if (row < maxRow - 1){
      arr[row + 1][col].neighbourCount++
      if (col > 0)
        arr[row + 1][col - 1].neighbourCount++
      if (col < maxCol - 1)
        arr[row + 1][col + 1].neighbourCount++
    }
    // check left
    if (col > 0)
      arr[row][col - 1].neighbourCount++
    // check left
    if (col < maxCol - 1)
      arr[row][col + 1].neighbourCount++
  }
}

export default updateNeigboursCount

/*
if (row !== 0) { // check top row
      arr[row - 1][col].neighbourCount++ 
      if (col !== 0) {
        arr[row - 1][col - 1].neighbourCount++
      }
      if (col < maxCol - 1) {
        arr[row - 1][col + 1].neighbourCount++
      }
    }
    if (row !== maxRow - 1) { // check bottom row
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
    */