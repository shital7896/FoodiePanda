import React from 'react'
import { AiFillStar} from 'react-icons/ai'


const Testimonial = () => {
  return (
    <div className='work-section-wrapper'> 
    <div className='work-section-top'>
        <p className='primary-subheading'>Testimonial</p>
        <h1 className='primary-heading'>What They Are Saying</h1>
        <p className='primary-text'>
        Foodie Panda never disappoints. The quality of the ingredients and the attention to detail in every dish is simply remarkable. The staff is friendly and knowledgeable, always ready to provide recommendations and accommodate special requests. Whether it's a romantic date night or a special celebration,  Foodie Panda is my go-to choice. 
        </p>
    </div>
      <div className='testimonial-section-bottom'>
        <p>
        I recently had the pleasure of ordering takeout from Foodie Panda , and it was a game-changer. The online ordering process was a breeze, and the food arrived piping hot and packed with care. 
        </p>
        <div className='testimonials-stars-container'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />

        </div>
        <h2>Lisa P</h2>
      </div>
    </div>
  )
}

export default Testimonial
