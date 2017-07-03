const cellsArr = []
let height = 10
let width = 10

function newCell(row, col, maxRow, maxCol){
  let temp = false
  if (row % 2 === 0){
    temp = true
  }
  this.row = row
  this.col = col
  this.alive = temp
  this.neighbourCount = 0
  this.changeNextGeneration = false
  this.updateNeigboursCount = function(arr){
    if (this.alive){
      if (row !== 0){ // if not on the top row
        arr[row - 1][col].neighbourCount++
        if (col !== 0){
          arr[row - 1][col - 1].neighbourCount++
        }
        if (col < maxCol - 1){
          arr[row - 1][col + 1].neighbourCount++
        }
      }
      if (row !== maxRow - 1){ // if not on bottom row
        arr[row + 1][col].neighbourCount++
        if (col !== 0){
          arr[row + 1][col - 1].neighbourCount++
        }
        if (col < maxCol - 1){
          arr[row + 1][col + 1].neighbourCount++
        }
      }
      if (col > 0){ // left neighbour
        arr[row][col - 1].neighbourCount++
      }
      if (col < maxCol - 1){ // right neighbour
        arr[row][col + 1].neighbourCount++
      }
    }
  }
}

for (let i = 0; i < height; i++){
  let rowArr = []
  for (let j = 0; j < width; j++){
    rowArr.push(new newCell(i, j, width, height))
  }
  cellsArr.push(rowArr)
}

export default cellsArr



// function person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
// }
  // // position on board
  // this.cellsAbove = true
  // this.cellsBelow = true
  // this.cellsLeft = true
  // this.cellsRight = true
// var myFather = new person("John", "Doe", 50, "blue");