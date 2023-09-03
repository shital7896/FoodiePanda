import React from 'react'
import panda from '../Assets/panda.png'
import { BsTwitter } from 'react-icons/bs'
import { SiLinkedin } from 'react-icons/si'
import { BsYoutube } from 'react-icons/bs' 
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
          <div className='footer-logo-container'>
            <img src={panda} alt='' />
          </div>
          <div className='footer-icons'>
            <BsTwitter />
            <SiLinkedin />
            <BsYoutube />
            <FaFacebookF />
          </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Careers</span>
                <span>Testimonials</span>
                <span>Work</span>
           </div>
           <div className='footer-section-columns'>
           <span>777-5888-1717</span>
           <span>hello@foodie.com</span>
           <span>press@foodie.com</span>
           <span>contact@foodie.com</span>
           </div>
           <div className='footer-section-columns'>
           <span>Terms & Conditions</span>
           <span>Privacy Policy</span>

           </div>
        </div>
       </div>
  )
}

export default Footer
