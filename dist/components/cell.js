import React from 'react'
import './styles/cell.scss'

const Cell = (props) => {
  let cellClass = `cell ${props.class}`
  return (
    <div id={props.id} className={cellClass}></div>
  )
}

export default Cell
