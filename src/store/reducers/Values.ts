import { createSlice } from '@reduxjs/toolkit'
import { math } from '../../utils/Math'

export const Values = createSlice({
  name: 'values',
  initialState: {
    first: '1',
    second: '2',
    sign: '+',
    wasChanged: false
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
    setSign: (state, action) => {
      state.sign = String(action.payload)
      state.wasChanged = true
    },
    clearSecond: state => {
      state.second = '0'
    },
    clearAll: state => {
      state.first = '0';
      state.second = '0';
      state.sign = '';
    },
    addition: state => {
      state.first = String(math.addition(Number(state.first), Number(state.second)))
      state.second = '0'
    },
    changeNumberSign: state => {
      state.second = String(math.changeSign(Number(state.second)))
    }
  }
})

// Action creators are generated for each case reducer function
export const { addition, setFirst, setSecond, clearSecond, clearAll, changeNumberSign } = Values.actions

export default Values.reducer