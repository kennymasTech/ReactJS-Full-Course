
import { useEffect, useState } from 'react';
import './App.css';
import Form from './form';


function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);

  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();

        // console.log(data)
        setItems(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchItems()
  })
  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
    </div>
  );
}

export default App;
