import { createSlice } from '@reduxjs/toolkit'
import { math } from '../../utils/Math'

export const Values = createSlice({
  name: 'values',
  initialState: {
    first: 1,
    second: 2,
    sign: ''
  },
  reducers: {
    setFirst: (state, action)  => {
      state.first = action.payload
    },
    setSecond: (state, action)  => {
      state.second = action.payload
    },
    addition: state => {
      state.first = math.addition(state.first, state.second)
      state.second += 0
    }
  }
})

// Action creators are generated for each case reducer function
export const { addition, setFirst, setSecond } = Values.actions

export default Values.reducer