import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';
import { Button } from '@mui/material';

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavBar = () => {
        setOpenLinks(!openLinks);  
    }

  return (
    <div className='navbar'>
      {/*if openlinks is false then close*/}
      <div className='leftnav' id={openLinks ? 'open' : 'close'}>
        <img src={Logo} alt='Logo'/>
        <div className='hiddenLinks'>
            <Link to='/'>Home</Link>
            <Link to='/menu'>Menu</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='cart'>Cart</Link>
        </div>
      </div>
      <div className='rightnav'>
      <Link to='/'>Home</Link>
      <Link to='/menu'>Menu</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='cart'>Cart</Link>
      <Button onClick={toggleNavBar}>
        <ReorderIcon />
      </Button>
      </div>
      
    </div>
  )
}

export default Navbar
