
import { useState, useEffect } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import AddItem from './AddItem';
import SearchItem from './SearchItem';



function App() {

  const API_URL = "http://localhost:3000/items"

  const [newItem, setNewItem] = useState('');

  const [items, setItems] = useState([]);

  const [search, setSearch] = useState('');


  // // useEffect syntax

  // useEffect(() => {
  //   //  the function
  // }, [dependencies])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        const listItems = await response.json();

        setItems(listItems);

      } catch (err) {
        console.log(err);
      }
    }
    ( async () => fetchItems())()
    
  }, [])

  
  // const setAndSaveItem = (item) => {
  //   setItems(listItems)
    
  // }


  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
    setItems(listItems)
  }


// To be able to check our checkbox
const handleCheck = (id) => {
  const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
  setItems(listItems)
};


const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !== id)
  setItems(listItems)
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
          < SearchItem search={search} setSearch={setSearch} /> 
          < Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete} />
          < Footer length={items.length} />
           
    </div>
  )
}

export default App
