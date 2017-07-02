import React, { Component }  from 'react'
import Cell from './cell'
import './styles/board.scss'

class Board extends Component {
  constructor (props){
    super (props)
    this.state = {
      boardLength: 10,
      boardHeight: 10
    }
  }
  render () {
    let cellsAll = []
    for (let i = 0; i < this.state.boardHeight; i++){
      for (let j = 0; j < this.state.boardLength; j++){
        let count = i * this.state.boardLength + j
        //console.log('count', count)
        cellsAll.push(<Cell key={count.toString()}/>)

      }
      cellsAll.push(<br />)
    }
    return (
      <div className='board'>
        { cellsAll }
      </div>
    )
  }
}

export default Board
