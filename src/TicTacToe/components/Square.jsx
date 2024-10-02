import React from 'react'
import './Square.css';

function Square({index, userClicked, content}) {
  return (
    <div className='sqaure-box'>
        <button onClick={() => userClicked(index)}>{ content }</button>
    </div>
  )
}

export default Square