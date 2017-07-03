import React, { Component }  from 'react'
import Cell from './cell'
import './styles/board.scss'
import cellsArr from '../logic/cellbuilder'
console.log(cellsArr[0][3])

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
    let temp = this.state.generation
    this.setState({generation: temp + 1})
    for (let i = 0; i < cellsArr.length; i++){
      for (let j = 0; j < cellsArr[i].length; j++){
        cellsArr[i][j].updateNeigboursCount(cellsArr)
      }
    }
    console.log(cellsArr)
  }
  render () {
    let cellsAll = []
    for (let i = 0; i < this.state.boardHeight; i++){
      for (let j = 0; j < this.state.boardLength; j++){
        let count = i * this.state.boardLength + j
        //console.log('count', count)
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
