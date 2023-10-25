import React from 'react'
import { useState } from 'react'

const InputField = () => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

  return (
    <div className="main">
        <input type="text" value={text} onChange={handleChange} />
        <p>You Are Typing: {text}</p>
    </div>
  )
}

export default InputField
