import React from 'react'
import '../App.css';
import logo from '../asserts/logo.png'

const Navbar = () => {
  return (
    <div className="nav">
      <nav className='logo'>
        <img src={logo} alt="logo" />
      </nav>
    </div>
  )
}

export default Navbar
