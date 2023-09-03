import React from 'react'
import Navbar from './Navbar'
import Contact  from './Contact'
import BannerBackground from '../Assets/home-banner-background.png'
import BannerImage from '../Assets/home-banner-image.png'
import { FiArrowRight } from 'react-icons/fi'

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar/>
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
         <img src={BannerBackground}  alt=''/>
          </div> 
          <div className='home-text-section'>
          <h1 className='primary-heading'>Welcome to Foodie Panda Restaurant</h1>
          <p className='primary-text'>Experience the finest Asian cuisine in town.</p>
         <button className='secondary-button'>
          Order Now <FiArrowRight />
         </button>
          </div>
    <div className='home-image-container'> 
    <img src={BannerImage} alt=''/>
         
    </div>

      </div>
    </div>
  )
}

export default Home
