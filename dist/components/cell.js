import React from 'react'
import './styles/cell.scss'

const Cell = (props) => {
  return (
    <div key={props.key} className='cell alive'></div>
  )
}

export default Cell
