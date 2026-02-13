import React from 'react'
import Navbar from '../Components/Navbar'
import '../assets/css/home.css'

const Home = () => {
  return (
    <>
    <Navbar />
    <div className='home'>
        <h1 className="home-title">
            contact management system
        </h1>
        <p className='home-description'>
            Contact management software has kept my team organized by centralizing client information and communication.
        </p>
    </div>
    </>
  )
}

export default Home