import React from 'react'
import '../styles/Home.css'
import { Link} from 'react-router-dom'
import { Button } from '@mui/material'

function Home() {
  return (
    <div className='home'>
      <div className='headerContainer'>
      <h1>Sahara Restaurant</h1>
      <p>Taste of Happiness!</p>
      <Link to='/menu'><Button>ORDER NOW</Button></Link>
      </div>
    </div>
  )
}

export default Home
