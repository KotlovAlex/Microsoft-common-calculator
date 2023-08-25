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
    setFirst: (state, action)  => {
      if (state.first === '0') 
        state.first = String(action.payload)
      else
        state.first = state.first + action.payload
    },
    
    setSecond: (state, action)  => {
      if (action.payload === '.' && state.second.includes('.')) return
      if (state.second === '0' || state.wasChanged) { 
        state.second = String(action.payload)
        state.wasChanged = false
      }
      else
        state.second = state.second + action.payload
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
      console.log(state.sign);
      state.first = math.doMath(state.sign, state.first, state.second)
      state.wasChanged = true
    },
  }
})

// Action creators are generated for each case reducer function
export const { equalHandler, changeSign, setFirst, setSecond, clearSecond, clearAll, changeNumberSign } = Values.actions

export default Values.reducer