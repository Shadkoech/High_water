import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    const [incrementBy, setIncrementBy] = useState(1);
    
    function handleclick() {
        count = setCount(count + incrementBy);
    }
  return (
    <div>
        <h1>Count value is: {count}</h1>
        <button onClick={handleclick}>Increment</button>
        <button onClick={() => {setCount(count - incrementBy)}}>Decrement</button>

        <h1>We are incrementing the increment by: {incrementBy}</h1>
        <button onClick={() => {setIncrementBy(incrementBy + 1 )}}>Increase increment</button>
      

    </div>
  )
}

export default Counter
