import React from 'react'
import './Square.css';

function Square({index, userClicked, content}) {
  return (
    <button className='sqaure-box' onClick={() => userClicked(index)}>{ content }</button>
  )
}

export default Square