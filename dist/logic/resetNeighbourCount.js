const resetNeighbourCount = (cell) => {
  if (cell.alive){
    if (cell.neighbourCount < 2 || cell.neighbourCount > 3){
      cell.alive = false
    }else{
      if (cell.count === 3){
        cell.alive = true
      }
    }
  }
}

export default resetNeighbourCount

