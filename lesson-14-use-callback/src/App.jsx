
import React from 'react'
import { useEffect, useState } from "react";




const App = () => {
  const [ userInput, setUserInput ] = useState('')
  const [ num1 ] = useState(4)
  const [ num2 ] = useState(5)

  const sum = () => num1 + num2

  useEffect(() => {
      console.log(`new sum. Value: ${sum()}`);
  }, [sum])

  return (
    <main className='App'>
        <input type="text" placeholder='input' value={userInput}  />
    </main>
  )
};

export default App
