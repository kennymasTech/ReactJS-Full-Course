
import React from 'react';
import { useState } from "react";



const App = () => {
  const [ userInput, setUserInput ] = useState('')
  const [ count, setCount ] = useState(0)
  const [ color, setColor ] = useState(false)
 

  
  return (
    <main className='App'>
        <input 
            type="text" style={{color: color ? '#FFF' : '#FFF952'}}
            value={userInput} 
            onChange={(e) => setUserInput(e.target.value)} 
        />

        <br />
        <br />

        <p> {count} </p>

        <section>
            <button onClick={(() => setCount(prev => prev - 1))} > - </button>
            <button onClick={(() => setCount(prev => prev + 1))} > + </button>
            <button onClick={(() => setColor(prev => !prev))} > Color </button>
        </section>

        <br />
        <br />

        <p> {userInput} </p>

    </main>
  )
};


export default App;
