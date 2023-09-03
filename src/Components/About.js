import React from 'react'
import AboutBackgroung from '../Assets/about-background.png'
import AboutBackgroungImage from '../Assets/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <div className='about-section-container'>
      <div className='about-background-image-container'>
       <img src={AboutBackgroung}  alt=''/>
      </div>
      <div className='about-section-image-container'>
       <img src={AboutBackgroungImage} alt='' />
      </div>
      <div className='about-section-text' >
        <h1 className='primary-heading'>About</h1>
        <p className='primary-text'>
        At Foodie Panda, we are passionate about serving authentic Asian flavors. Our chefs carefully craft each dish to provide you with an unforgettable dining experience.
        </p>
      </div>
     
    </div>
  )
}

export default About
