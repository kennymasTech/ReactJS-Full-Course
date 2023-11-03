import React from 'react'
import { faLaptop, faTabletAlt, faMobileAlt } from 'react-icons/fa';

const Header = ({title}) => {
  return (
    <header className='Header'>
        <h1>{title}</h1>

    </header>
  )
}

export default Header