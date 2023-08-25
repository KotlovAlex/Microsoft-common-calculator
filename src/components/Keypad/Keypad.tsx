import React from 'react'
import './Keypad.css'
import Button from '../Button/Button'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { equalHandler, changeNumberSign, changeSign, clearAll, clearSecond, setSecond, backspace, oneDivToNumber, sqr, sqrt, percent } from '../../store/reducers/Values'

function Keypad() {
  const wasChanged = useAppSelector(state => state.values.wasChanged);
  const dispatch = useAppDispatch();

  return (
    <div className='keypad noselected'>
      <Button onClick={() => dispatch(percent())}>%</Button>
      <Button onClick={() => dispatch(clearSecond())}>CE</Button>
      <Button onClick={() => dispatch(clearAll())}>C</Button>
      <Button onClick={() => dispatch(backspace())}>{'<'}</Button>
      <Button onClick={() => dispatch(oneDivToNumber())}>1/x</Button>
      <Button onClick={() => dispatch(sqr())}>x<span>2</span></Button>
      <Button onClick={() => dispatch(sqrt())}>{'\u221Ax'}</Button>
      <Button onClick={() => dispatch(changeSign('/'))}>{'\u00F7'}</Button>
      <Button onClick={() => dispatch(setSecond(7))}>7</Button>
      <Button onClick={() => dispatch(setSecond(8))}>8</Button>
      <Button onClick={() => dispatch(setSecond(9))}>9</Button>
      <Button onClick={() => dispatch(changeSign("*"))}>{'\u2A2F'}</Button>
      <Button onClick={() => dispatch(setSecond(4))}>4</Button>
      <Button onClick={() => dispatch(setSecond(5))}>5</Button>
      <Button onClick={() => dispatch(setSecond(6))}>6</Button>
      <Button onClick={() => dispatch(changeSign('-'))}>-</Button>
      <Button onClick={() => dispatch(setSecond(1))}>1</Button>
      <Button onClick={() => dispatch(setSecond(2))}>2</Button>
      <Button onClick={() => dispatch(setSecond(3))}>3</Button>
      <Button onClick={() => dispatch(changeSign('+'))}>+</Button>
      <Button onClick={() => dispatch(changeNumberSign())}>+/-</Button>
      <Button onClick={() => dispatch(setSecond(0))}>0</Button>
      <Button onClick={() => dispatch(setSecond('.'))}>.</Button>
      <Button isEqual={true} onClick={() => dispatch(equalHandler())}>=</Button>
    </div>
  )
}

export default Keypad