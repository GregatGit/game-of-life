const cellsArr = []
let height = 40
let width = 60

function newCell(row, col){
  let temp = false
  if (row % 2 === 0){
    temp = true
  }
  this.alive = temp
  this.row = row
  this.col = col
  this.neighbourCount = 0
}

for (let i = 0; i < height; i++){
  let rowArr = []
  for (let j = 0; j < width; j++){
    rowArr.push(new newCell(i, j))
  }
  cellsArr.push(rowArr)
}

export default cellsArr
