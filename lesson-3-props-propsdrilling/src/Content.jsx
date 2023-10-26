
import React from 'react'
import {useState} from 'react'
import {BsTrash} from 'react-icons/bs'


const Content = () => {
  const [items, setItems] = useState([

    {
      id: 1,
      checked: false,
      item: 'ReactJS'
    },
    {
      id: 2,
      checked: false,
      item: 'JavaScript'
    },
    {
      id: 3,
      checked: false,
      item: 'NodeJS'
    }
  ]);

// To be able to check our checkbox
const handleCheck = (id) => {

  const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
  setItems(listItems)
}


// To be able to delete our checkbox
const handleDelete = (id) => {

  const listItems = items.filter((item) => item.id !== id)
  setItems(listItems)

  // To save to local storage after delete
  localStorage.setItem('ShoppingList', JSON.stringify(listItems))
}


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
