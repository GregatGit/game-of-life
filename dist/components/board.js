import React, { Component }  from 'react'
import Cell from './cell'
import './styles/board.scss'
import cellsArr from '../logic/cellbuilder'
import updateNeigboursCount from '../logic/counter'

class Board extends Component {
  constructor (props){
    super (props)
    this.state = {
      boardLength: 10,
      boardHeight: 10,
      generation: 0
    }
  }
  nextGeneration = () => {
    console.log('before', cellsArr)
    let temp = this.state.generation
    this.setState({generation: temp + 1})
    for (let i = 0; i < cellsArr.length; i++){
      for (let j = 0; j < cellsArr[i].length; j++){
        updateNeigboursCount(cellsArr, i, j, this.state.boardHeight, this.state.boardLength)
        }
     }
    for (let i = 0; i < cellsArr.length; i++){
      cellsArr[i].forEach((cell) => {
        //cell.alive = !cell.alive
        if (cell.alive){
          if (cell.neighbourCount < 2 || cell.neighbourCount > 3){
            cell.alive = false
          }else{
            if (cell.count === 3){
              cell.alive = true
            }
          }
        }
      })
    }
    console.log('before count reset', cellsArr)
    for (let i = 0; i < cellsArr.length; i++){
      cellsArr[i].forEach((cell) => {
        cell.neighbourCount = 0
      })
    }
  }
  resetNeighbourCount = (cell) => {
    if (cell.alive){
      if (cell.neighbourCount > 2 || cell.neighbourCount < 3){
        cell.alive = false
      }else{
        if (cell.neighbourCount === 3)
          cell.alive = true
      }
    }
    cell.resetNeighbourCount = 0
  }
  render () {
    let cellsAll = []
    for (let i = 0; i < this.state.boardHeight; i++){
      for (let j = 0; j < this.state.boardLength; j++){
        let count = i * this.state.boardLength + j
        let aliveOrDead = `dead`
        if (cellsArr[i][j].alive){
          aliveOrDead = `alive`
        }
        cellsAll.push(
          <Cell id={count.toString()}
            class={aliveOrDead}
        />)
      }
      cellsAll.push(<br />)
    }
    return (
      <div className='board'>
        { cellsAll }
        <button onClick={this.nextGeneration}>next Gen</button>
      </div>
    )
  }
}

export default Board
