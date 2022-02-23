import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 10
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, {payload}) => {
      state.value += payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const asyncIcrement = (payload) =>(dispatch)=>{
  setTimeout(() => {
      dispatch(incrementByAmount(payload))
  },3000);
}

export default counterSlice.reducer