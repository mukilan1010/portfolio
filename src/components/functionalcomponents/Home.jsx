import React from 'react'
import '../css/Home.css';
import profilePic from '../pictures/hero.png'

import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">Hii There,<br></br> <span > This is Mukilan</span></h1>
          <p className="home-description">
            Hi, I'm Mukilan, a passionate Frontend Developer with experience in 
            building user-friendly web applications. Explore my work and skills below!
          </p>
          <Link to="/about" className="home-button">Learn More</Link>
        </div>
        <div className="home-image">
          <img src={profilePic} alt="Mukilan Profile" className="profile-pic" />
        </div>
      </div>
    </div>
  )
}

export default Home;
