import React from 'react'
import Display from '../Display/Display'
import Keypad from '../Keypad/Keypad'
import './Body.css'

function Body() {
  return (
    <div className='body'>
      <Display></Display>
      <Keypad></Keypad>
    </div>
  )
}

export default Body