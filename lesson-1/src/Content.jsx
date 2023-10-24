import React from 'react'

const Content = () => {

    const handleNameChange = () => {
        const names = ["Kennymas", "Kanas", "Supreme"]
        const int = Math.floor(Math.random() * 3)
          return names[int]
      }

      const handleClick = () => {
        console.log("you click it");
      }

      const handelClickOne = (names) => {
        console.log(`${names} was Clicked`);
      }

      const handleClickTwo = (event) => {
        console.log(event.target.innerText);
      }

  return (
    <main>
      <p>
        Hello {handleNameChange()};
      </p>
      <button onClick={handleClick}>Click Here</button>
      <button onClick={() => handelClickOne("Kennymas")}>Click This</button>
      <button onClick={(event) => handleClickTwo(event)}>Click Now</button>
    </main>
  )
}

export default Content
