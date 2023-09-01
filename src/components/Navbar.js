import React from 'react'
// import Home from './Home'
// import Form from './Form'
import { Link } from 'react-router-dom'

const Navbar = () => {
   

  return (
 <>
    <div className="navbar">
        <img src='image/download.png' alt='logo' className='log'></img>
           <ul className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/form">Form</Link>
           </ul> 
        </div>
 </>
  )
}
export default Navbar
