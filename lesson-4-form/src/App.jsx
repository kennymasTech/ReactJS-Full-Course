
import {useState} from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import AddItem from './AddItem';



function App() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('Shoppinglist')) || []);


  const setAndSaveItem = (newItem) => {
    setItems(newItem)
    localStorage.setItem('Shoppinglist', JSON.stringify(newItem))
  }


  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
    setAndSaveItem(listItems)
  }


// To be able to check our checkbox
const handleCheck = (id) => {
  const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
  setAndSaveItem(listItems)
};


const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !== id)
  setAndSaveItem(listItems)
};



const handleSubmit = (e) => {
  e.preventDefault();
  if(!newItem) return; 
  addItem(newItem);
  setNewItem('');
}


  return (
    <div className='App'>

          < Header title="Cohort 3.0 List" />
          < AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />   
          < Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
          < Footer length={items.length} />
           
    </div>
  )
}

export default App
