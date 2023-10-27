
import React from 'react'

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section className='square' style={{backgroundColor: colorValue }}>
        <p> { colorValue ? colorValue : "Empty Value" } </p>
        <p> {hexValue ? hexValue : null} </p>
        <p> {} </p>
    </section>
  )
}

Square.defaultProps = {
    colorValue: "Empty color value"
}

export default Square
