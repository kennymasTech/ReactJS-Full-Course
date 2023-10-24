import React from 'react'
      {/* INLINE CSS IN REACTJS  */}

// const Header = () => {
    
//   return (
//     <header style={{
//         backgroundColor: "red",
//         color: "#fff",
        // borderRadius: "5px",
      //   padding: "10px"
//     }}>
//       <h1>WELCOME TO REACT IN DETAILS</h1>
//     </header>
//   )
// }

            {/* OR */}


const Header = () => {
    const headerStyle = {
        backgroundColor: "red",
        color: "#fff",
        borderRadius: "5px",
        padding: "10px"
    }
  return (
    <header style={headerStyle}>
      <h1>WELCOME TO REACT IN DETAILS</h1>
      <h2 style={{color: "black", background: "greenyellow", borderRadius: "0 10px 0 10px"}}>WELCOME TO DLT-AFRICA BOOT CAMP</h2>
    </header>
  )
}

export default Header

