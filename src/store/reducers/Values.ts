import { createSlice } from '@reduxjs/toolkit'
import { math } from '../../utils/Math'

export const Values = createSlice({
  name: 'values',
  initialState: {
    first: '0',
    second: '0',
    sign: '',
    wasChanged: false,
    prevSign: '',
  },
  reducers: {
    setFirst: (state, action?)  => {
      if (state.first === '0') 
        state.first = String(action.payload)
      else
        state.first = state.first + action.payload
    },
    
    setSecond: (state, action)  => {
      if (action.payload === '.' && state.second.includes('.')) return
      if (state.second === '0' || state.wasChanged) {
        if (action.payload === '.') {
          state.second = state.second + action.payload
          return
        }
        state.second = String(action.payload)
        state.wasChanged = false
      }else{
        state.second = state.second + action.payload
        
      }
    },
    clearSecond: state => {
      state.second = '0'
      state.wasChanged = false
    },
    clearAll: state => {
      state.first = '0';
      state.second = '0';
      state.sign = '';
    },
    backspace: state => {
      if (state.wasChanged || state.second === '0') return
      if (state.second.length === 1) {
        state.second = '0'
        return
      }
      state.second = state.second.slice(0,state.second.length-1)
    },
    changeNumberSign: state => {
      state.second = String(math.changeSign(Number(state.second)))
    },
    changeSign: (state, action) => {
      state.prevSign = state.sign
      state.sign = action.payload
      if (state.prevSign === '') {
        state.first = String(Number(state.second))
        state.second = '0'
        state.wasChanged = true
        return
      }
      if (state.wasChanged) return
      state.first = math.doMath(state.prevSign, state.first, state.second)
      state.wasChanged = true
    },
    equalHandler: state => {
      if (state.sign === '') state.first = state.second
      state.first = math.doMath(state.sign, state.first, state.second)
      state.wasChanged = true
    },
    oneDivToNumber: state => {
      if (state.wasChanged) 
        state.first = String(math.oneDivToNumber(Number(state.first)))
      else 
        state.second = String(math.oneDivToNumber(Number(state.second)))
    },
    sqr: state => {
      if (state.wasChanged) 
        state.first = String(math.sqr(Number(state.first)))
      else 
        state.second = String(math.sqr(Number(state.second)))
    },
    sqrt: state => {
      if (state.wasChanged) 
        state.first = String(math.sqrt(Number(state.first)))
      else 
        state.second = String(math.sqrt(Number(state.second)))
    },
    percent: state => {
      state.second = String(math.percent(Number(state.first), Number(state.second)))
    }
  }
})

// Action creators are generated for each case reducer function
export const { percent, sqrt, sqr, oneDivToNumber, backspace, equalHandler, changeSign, setFirst, setSecond, clearSecond, clearAll, changeNumberSign } = Values.actions

export default Values.reducer