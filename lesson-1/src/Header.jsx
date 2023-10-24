import React from 'react'

// const Header = () => {
    
//   return (
//     <header style={{
//         backgroundColor: "red",
//         color: "#fff"
//     }}>
//       <h1>WELCOME TO REACT IN DETAILS</h1>
//     </header>
//   )
// }

            {/* OR */}


const Header = () => {
    const headerStyle = {
        backgroundColor: "red",
        color: "#fff"
    }
  return (
    <header style={headerStyle}>
      <h1>WELCOME TO REACT IN DETAILS</h1>
    </header>
  )
}

export default Header

