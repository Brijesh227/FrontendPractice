import React from 'react'
import './Square.css';

function Square({userClicked, content}) {
  return (
    <button className='sqaure-box' onClick={userClicked}>{ content }</button>
  )
}

export default Square