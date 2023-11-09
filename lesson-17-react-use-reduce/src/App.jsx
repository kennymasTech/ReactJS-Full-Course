
import React from 'react';
import { useState } from "react";



const App = () => {
  const [ userInput, setUserInput ] = useState('')
  const [ count, setCount ] = useState(0)
  const [ color, setColor ] = useState(false)
 

  
  return (
    <main className='App'>
        <input 
            type="text" style={{color: color ? '#fff' : '#fff92'}}
            value={userInput} 
            onChange={(e) => setUserInput(e.target.value)} 
        />

        <br />
        <br />

        <p> {count} </p>

        <section>
            <button onClick={() => setCount(prev => prev - 1)} > - </button>
            <button onClick={() => setCount(prev => prev + 1)} > + </button>
            <button onClick={(() => setColor(prev => !prev))} > Color </button>
        </section>

        <button onClick={resetTimer} > Reset </button>

        <br />
        <br />

        <p> Seconds : {seconds} </p>

        <br />
        <br />

        <p> {randomInput} </p>

    </main>
  )
};


export default App;
