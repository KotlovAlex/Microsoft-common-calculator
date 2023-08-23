import React from 'react'
import './Keypad.css'
import Button from '../Button/Button'

function Keypad() {
  return (
    <div className='keypad noselected'>
      <Button>%</Button>
      <Button>CE</Button>
      <Button>C</Button>
      <Button>{'<'}</Button>
      <Button>1/x</Button>
      <Button>x^2</Button>
      <Button>{'sqrt(x)'}</Button>
      <Button>/</Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>*</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>-</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>+</Button>
      <Button>+/-</Button>
      <Button>0</Button>
      <Button>.</Button>
      <Button isEqual={true}>=</Button>
    </div>
  )
}

export default Keypad