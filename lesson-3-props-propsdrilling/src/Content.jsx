
import React from 'react'
import {BsTrash} from 'react-icons/bs'


const Content = ({items, setItems, handleCheck, handleDelete}) => {
  

  return (
    <main>

      {items.length? (

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
      ) : (
        <p style={{marginTop: "2rem"}}>Your List Is Empty</p>
      )}

    </main>
  )
}

export default Content
