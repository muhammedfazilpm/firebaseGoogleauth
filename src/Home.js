import React from 'react'

function Home() {
    
    
    const hanlelogout=()=>{
        localStorage.removeItem('email')
        window.location.reload()
    }
  return (
    <div>
    <h1>Home</h1>
    <button onClick={hanlelogout}>Logout</button>
    </div>
  )
}

export default Home
