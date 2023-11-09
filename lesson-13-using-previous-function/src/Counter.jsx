
import { useState } from "react";


// How to make a button Clickable.....
// const Counter = () => {
//     const [ count, setCount ] = useState(0)
//   return (
//     <section>
//         <h1>{ count }</h1>
//         <div className="calcBtn">
//             <button onClick={() => setCount(count - 1)} >-</button>
//             <button onClick={() => setCount(count + 1)} >+</button>

//             <button onClick={() => setCount(prevState => prevState - 1)} >-</button>
//             <button onClick={() => setCount(prevState => prevState + 1)} >+</button>
//         </div>

//         <div className="Counter">
//             <button onClick={() => setCount(0)} >Reset</button>
//         </div>
//     </section>
//   )
// }


const Counter = () => {
    const [ count, setCount ] = useState(0)
    // const [ values, setValues ] = useState({firstName: "", lastName: "" })

    const add = () => {
        // setCount(count + 1)

// Using the previous function
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
    }

    const subtract = () => {
        // setCount(count - 1)

// Using the previous function
        setCount((prev) => prev - 1)
    }


    // const updateArray = () => {
    //     setValues ({...values, last: "Dave"})
    //     setValues(prev => ({...prev, last: "Kennymas"}))
    // }
    // updateArray()
    // console.log(values);

  return (
    <section>
        <h1>{ count }</h1>
        <div className="calcBtn">
            <button onClick={ add } >+</button>
            <button onClick={ subtract } >-</button>
        </div>

        <div className="Counter">
            <button onClick={() => setCount(0)} >Reset</button>
        </div>
    </section>
  )
};


export default Counter;