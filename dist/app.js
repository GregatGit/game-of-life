import React from 'react'
import ReactDOM from 'react-dom'
import Board from './components/board'
import './components/styles/app.scss'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

class App extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <div className='centerMe'>
          <img alt="freeCodeCamp logo" src="https://www.freecodecamp.com/design-style-guide/img/freeCodeCamp-alternative.png" />
          <h1>Game of Life</h1>
          <p>a freeCodeCamp challange</p>
          <p>by Greg Duncan</p>
        </div>
        <Board />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('react-container'))
