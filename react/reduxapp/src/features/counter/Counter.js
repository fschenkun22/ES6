import { Button } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadData } from '../movie/movieSlice'
import { asyncIcrement, decrement, incrementByAmount,increment } from './counterSlice'



function Counter() {
  const { value } = useSelector(state => state.counter)
  const { movieGetStatus, movieGetErr} = useSelector(state => state.movie)
  const dispatch = useDispatch()


  const incrementHandle = () => {
   console.log('+');
   dispatch(increment())
  }

  const dec = () => {
    dispatch(decrement())
  }

  const asyncAdd = () => {
    dispatch(asyncIcrement(5))
  }

  const movieHandle = () => {
    dispatch(loadData())
  }
  


  return (
    <div>
      <Button onClick={incrementHandle}>+</Button> 
      <Button onClick={dec}>-</Button>
      value:{value}
      <Button onClick={asyncAdd}>async add</Button>

      <Button onClick={movieHandle} loading={movieGetStatus} 
      danger={movieGetErr} >movie get</Button>

    </div>
  )
}

export default Counter