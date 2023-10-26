
import {BsTrash} from 'react-icons/bs'
import React from 'react'

const ItemList = ({items, handleCheck, handleDelete}) => {
  return (
    
      <ul>
        {items.map((item) => (
          <li className='item' key={item.id}>
            <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)}/>

            <label style={(item.checked) ? {textDecoration: "line-through"} : null} 
                  onDoubleClick={() => handleCheck(item.id)}> {item.item} </label>

            < BsTrash onClick={() => handleDelete(item.id)} role='button' tabIndex="0" />

          </li>
          
        ))}
      </ul>
    
  )
}

export default ItemList
