import { configureStore } from '@reduxjs/toolkit'
import Values from './reducers/Values'

export const store = configureStore({
    reducer: {
      values: Values
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store