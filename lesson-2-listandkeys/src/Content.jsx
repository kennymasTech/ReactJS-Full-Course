
import React from 'react'
import {useState} from 'react'
import {BsTrash} from 'react-icons/bs'
import {AiOutlineHome} from 'react-icons/ai'


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



  // const [name, setName] = useState()

  //   const handleNameChange = () => {
  //       const names = ["Kennymas", "Kanas", "Supreme"]
  //       const int = Math.floor(Math.random() * 3)
  //         setName (names[int])
  //     }

  //     const handleClick = () => {
  //       console.log("you click it");
  //     }

  //     const handelClickOne = (names) => {
  //       console.log(`${names} was Clicked`);
  //     }

  //     const handleClickTwo = (event) => {
  //       console.log(event.target.innerText);
  //     }

  return (
    <main>

      {/* to get an empty data message after delete */}
      {/* {items.length === 0 && (
        <div className="empty-data">
          <h1>No Data</h1>
        </div>
      )} */}

      {items.length? (

      <ul>
        {items.map((item) => (
          <li className='item' key={item.id}>
            <input type="checkbox" checked={item.checked} onChange={() => handleCheck(item.id)}/>

            <label style={(item.checked) ? {textDecoration: "line-through"} : null} 
                  onDoubleClick={() => handleCheck(item.id)}> {item.item} </label>

            < BsTrash onClick={() => handleDelete(item.id)} role='button' tabIndex="0" />

            < AiOutlineHome role='button' tabIndex="0" />
          </li>
          
        ))}
      </ul>
      ) : (
        <p style={{marginTop: "2rem"}}>Your List Is Empty</p>
      )}



      {/* <p>
        Hello {name};
      </p>
      <button onClick={handleNameChange}>Chande Name</button>
      <button onClick={() => handelClickOne("Kennymas")}>Click This</button>
      <button onClick={(event) => handleClickTwo(event)}>Click Now</button> */}

    </main>
  )
}

export default Content
