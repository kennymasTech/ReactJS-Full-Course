
import React from 'react';
import { useState, useRef } from "react";



const App = () => {
  const [ randomInput, setRandomInput ] = useState('');
  const [ seconds, setSeconds ] = useState(0);

  const renders = useRef(0);

  const inputRef = useRef();

  const timerId = useRef();

  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds(prev => prev + 1);
    }, 1000)
    inputRef.current.focus()
  }

  const stopTimer = () => {
    clearInterval(timerId.current)
    timerId.current = 0;
    inputRef.current.focus()
   }

   const resetTimer = () => {
      stopTimer()
      if(seconds) {
        renders.current++;
        setSeconds(0)
      }
      inputRef.current.focus

            //  OR
    // clearInterval(timerId.current)
    // timerId.current = 0;
    // setSeconds(0)
    // renders.current ++;
    // inputRef.current.focus()
   }



  const handleInputChange = (e) => {
    setRandomInput(e.target.value)

    renders.current++
  };

  // const focusOnInput = () => {
  //   inputRef.current.focus()
  // }


  return (
    <main className='App'>
        <input 
            ref={inputRef}
            type="text" 
            value={randomInput} 
            placeholder="Type Here" 
            onChange={handleInputChange} 
        />

        <p> Renders : {renders.current} </p>
        

        <br />
        <br />

        <section>
            {/* <button onClick={focusOnInput} > Focus </button> */}
            <button onClick={stopTimer} > Stop </button>
            <button onClick={startTimer} > Start </button>
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
