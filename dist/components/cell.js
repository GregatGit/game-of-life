import React from 'react'
import './styles/cell.scss'

const Cell = (props) => {
  let cellClass = `cell ${props.class}`
  return (
    <div id={props.id} 
        className={cellClass}
        onClick={props.turnOffOn}
        >
    </div>
  )
}

export default Cell
