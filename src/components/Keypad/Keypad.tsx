import React from 'react'
import './Keypad.css'
import Button from '../Button/Button'
import { useAppDispatch } from '../../hooks/redux'
import { changeNumberSign, clearAll, clearSecond, setFirst, setSecond } from '../../store/reducers/Values'

function Keypad() {
  const dispatch = useAppDispatch()

  return (
    <div className='keypad noselected'>
      <Button>%</Button>
      <Button onClick={() => dispatch(clearSecond())}>CE</Button>
      <Button onClick={() => dispatch(clearAll())}>C</Button>
      <Button>{'<'}</Button>
      <Button>1/x</Button>
      <Button>x^2</Button>
      <Button>{'sqrt(x)'}</Button>
      <Button>/</Button>
      <Button onClick={() => dispatch(setSecond(7))}>7</Button>
      <Button onClick={() => dispatch(setSecond(8))}>8</Button>
      <Button onClick={() => dispatch(setSecond(9))}>9</Button>
      <Button>*</Button>
      <Button onClick={() => dispatch(setSecond(4))}>4</Button>
      <Button onClick={() => dispatch(setSecond(5))}>5</Button>
      <Button onClick={() => dispatch(setSecond(6))}>6</Button>
      <Button>-</Button>
      <Button onClick={() => dispatch(setSecond(1))}>1</Button>
      <Button onClick={() => dispatch(setSecond(2))}>2</Button>
      <Button onClick={() => dispatch(setSecond(3))}>3</Button>
      <Button>+</Button>
      <Button onClick={() => dispatch(changeNumberSign())}>+/-</Button>
      <Button onClick={() => dispatch(setSecond(0))}>0</Button>
      <Button onClick={() => dispatch(setSecond('.'))}>.</Button>
      <Button isEqual={true}>=</Button>
    </div>
  )
}

export default Keypad