
import React from 'react'
import { useState } from 'react'


const Counter = () => {
    const [count, setCount] = useState(0);

    const increament = () => {
        setCount(count + 1);
    };

    const decreament = () => {
        setCount(count - 1);
    };

  return (
    <main>
        <p> Welcome To useState Class </p>
        <p> Count: {count} </p>
        <button onClick={increament}>Increment</button> 
        <button onClick={decreament}>Decreament</button> 
    </main>
  )
}

export default Counter
