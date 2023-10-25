import React from 'react'


const ListComponent = () => {
    const items = [
        { id: 1, name: "kennymas", age: 30 },
        { id: 2, name: "Rocco", age: 25},
        { id: 3, name: "Supreme", age: 20},
        { id: 4, name: "Hollar", age: 15}
    ]
        
  return (
    <main>
        <p>HELLO WORLD</p>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
    </main>
  )
}

export default ListComponent
