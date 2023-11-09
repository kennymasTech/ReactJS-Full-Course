
import React from 'react';
import { useEffect, useState, useCallback, useMemo } from "react";


const getArray = () => {
  for(let i = 0; i < 1000000000; i++) {

  }
  return["Kennymas", "Developer"]
}


const App = () => {
  const [ userInput, setUserInput ] = useState('')
  const [ randomInput, setRandomInput ] = useState('')
  
  const fib = useCallback((n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2)
  }, [])

  


  return (
    <main className='App'>
        <input type="text" placeholder='Type Here' 
                value={userInput} onChange={(e) => setUserInput(e.target.value)} />

        <h1>OutPut: { userInput || ".." } </h1>
    </main>
  )
};


export default App;
