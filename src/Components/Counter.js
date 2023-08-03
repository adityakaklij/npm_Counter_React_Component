import React, { useState } from 'react'
import "../App.css"

export default function Counter() {

    const [counter, setCounter] = useState(0)
  return (
    <div>
        
        <h1>Counter {counter}</h1>

        <div>

        <button onClick={() => {setCounter(counter + 1)}}>Increment</button>
        <button onClick={() => {setCounter(counter - 1)}}>Decrement</button>
        </div>

    </div>
  )
}
