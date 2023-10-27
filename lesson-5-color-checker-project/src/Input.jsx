
import React from 'react'

const Input = ({ colorValue, setColorValue, setHexValue, isDarkText, setDarkText}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Add Color Name:</label>
        <input 
            autoFocus 
            type="text" 
            required 
            placeholder='Add color name' 
            value={colorValue} 
            onChange={(e) => {
                setColorValue(e.target.value)
                setHexValue(e.target.value)
            }}

             />

            <button type='button' onClick={() => {
                
            }}></button>
        
    </form>
  )
}

export default Input
