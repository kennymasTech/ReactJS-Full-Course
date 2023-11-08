
import React from 'react';
import { useEffect, useState, useCallback } from "react";




const App = () => {
  const [ userInput, setUserInput ] = useState('')
  const [ result, setResult ] = useState(0)
  const [ num1 ] = useState(5)
  const [ num2 ] = useState(5)

  const sum = useCallback(() => num1 + num2)

  const buildArray = useCallback(() => [num1, num2], [num1, num2])

  useEffect(() => {
      console.log(`new Array ${buildArray()}`);
      setResult(buildArray())
  }, [buildArray])

  return (
    <main className='App'>
        <input type="text" placeholder='Type Here' 
                value={userInput} onChange={(e) => setUserInput(e.target.value)} />

        <h1>OutPut: { userInput || ".." } </h1>
    </main>
  )
};

export default App;
