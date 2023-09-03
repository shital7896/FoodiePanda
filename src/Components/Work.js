import React from 'react'
import PickMeals from '../Assets/pick-meals-image.png'
import ChooseMeals from '../Assets/choose-image.png'
import DeliveryMeals from '../Assets/delivery-image.png'

const Work = () => {
    const workInfoData= [
     {
        image: PickMeals,
        title: "Pick Meals",
        text: " Welcome to Foodie Panda, we believe in making meal planning and eating well as easy as a few clicks. Say goodbye to the hassle of grocery shopping, meal prep, and cooking. ",
     },
     {
        image: ChooseMeals,
        title: "Choose How Often",
        text: " Welcome to Foodie Panda, where culinary excellence meets your personal preferences. Our diverse menu offers a range of delightful dishes crafted to satisfy every palate.",

     },
     {
        image: DeliveryMeals,
        title: "Fast Deliveries",
        text:" Welcome to Foodie Panda, we understand that sometimes you want to enjoy our exquisite dishes in the comfort of your own home. That's why we offer our convenient and reliable delivery service.",
     },
    ];
  return (
    <div className='work-section-wrapper'>
      <div className='work-section-top'>
        <h1 className='primary-heading'>Work</h1>
        <h2 className='primary-subheading'>How It Works</h2>
        <p className='primary-text'>
        At Foodie Panda, we're committed to providing you with an exceptional dining experience, whether you choose to dine-in or order your favorite dishes for takeout or delivery. Here's how it all works:
        </p>
      </div>
      <div className='work-section-bottom'>
        {
          workInfoData.map((data) => (
            <div className='work-section-info'>
                <div className='info-boxes-img-container'>
                    <img src={data.image}  alt=''/>
                </div>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
                </div>
          ))
        
        }
      </div>
    </div>
  )
}

export default Work
