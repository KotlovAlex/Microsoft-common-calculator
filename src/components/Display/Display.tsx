import React from 'react'
import './Display.css'
import { useAppSelector } from '../../hooks/redux'

function Display() {
  const {first, second, sign} = useAppSelector(state => state.values)

  return (
    <div className='display'>
      <div className='history'>{sign === '' ? '' : `${first} ${sign}`}</div>
      <div className='main'>{second}</div>
    </div>
  )
}

export default Display