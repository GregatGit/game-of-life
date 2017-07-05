import React, { Component }  from 'react'
import Cell from './cell'
import './styles/board.scss'
import cellsArr from '../logic/cellbuilder'
import updateNeigboursCount from '../logic/counter'
import aliveOrDeadUpdate from '../logic/resetNeighbourCount'
import BadgeSimple from './BadgeSimple'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
 
class Board extends Component {
  constructor (props){
    super (props)
    this.state = {
      boardLength: 60,
      boardHeight: 30,
      generation: 0,
      clicked: false,
      gameInProgess: false
    }
  }
  componentDidMount () {
    this.gameStart()
  }
  nextGeneration = () => {
    for (let i = 0; i < cellsArr.length; i++){ // count cells alive neighbours
      for (let j = 0; j < cellsArr[i].length; j++){
        updateNeigboursCount(cellsArr, i, j, this.state.boardHeight, this.state.boardLength)
        }
    }
    let temp = this.state.generation
    this.setState({generation: temp + 1})
    // see which cell should be alive or dead
    for (let i = 0; i < cellsArr.length; i++){
      cellsArr[i].forEach(aliveOrDeadUpdate)
    }
    // rest all cell neighbour counts to 0
    for (let i = 0; i < cellsArr.length; i++){
      cellsArr[i].forEach((cell) => {
        cell.neighbourCount = 0
      })
    }
  }
  // buttons
  gameStart = () => {
    if (!this.state.gameInProgess){
      this.setState({gameInProgess: true})
      this.gameIsRunning = setInterval(this.nextGeneration, 500)
    }
    
  }
  gameStop = () => {
    if (this.state.gameInProgess){
      clearInterval(this.gameIsRunning)
      this.setState({gameInProgess: false})
    }
  }
  gameClear = () => {
    if (this.state.generation > 0){
      this.gameStop()
    }
    for (let i = 0; i < cellsArr.length; i++){
      cellsArr[i].forEach((cell) => {
        cell.neighbourCount = 0
        cell.alive = false
      })
      this.setState({generation: 0, gameInProgess: false})
    }
    
  }
  switchCellOffOrOn = (arr, row, col) => {
    arr[row][col].alive = !arr[row][col].alive
    this.setState({clicked: true})
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
          <Cell 
            id={count.toString()}
            class={aliveOrDead}
            turnOffOn={() => this.switchCellOffOrOn(cellsArr, i, j)}
        />)
      }
      cellsAll.push(<br />)
    }
    return (
      <div className='board'>
        { cellsAll }
        <button
          onClick={this.gameStart}
        >
          Start
        </button>
        <button
          onClick={this.gameStop}
        >
          Stop
        </button>
        <button
          onClick={this.gameClear}
        >
          Clear
        </button>
        <MuiThemeProvider>
          <BadgeSimple 
            count={this.state.generation}
          />
        </MuiThemeProvider>    
      </div>
    )
  }
}

export default Board
