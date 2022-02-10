import React, { useState } from 'react'

function Counter() {

  const[counter,setCounter] = useState(0)

  const increment = () => {
    setCounter(prev => prev + 1)
  }

  const dec = () =>{
    setCounter(p=>p-1)
  }

  return (
    <div>
      Value:{counter} <button onClick={increment}>+</button> <button onClick={dec}>-</button>

    </div>
  )
}

export default Counter