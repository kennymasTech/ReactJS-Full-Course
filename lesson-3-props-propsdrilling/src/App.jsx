
import {useState} from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'



function App() {
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
    <div className='App'>

          < Header title="Cohort 3.0 List" />   
          < Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
          < Footer length={items.length} />
           
    </div>
  )
}

export default App
