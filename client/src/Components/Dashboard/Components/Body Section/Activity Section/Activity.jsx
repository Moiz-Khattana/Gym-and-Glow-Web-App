import React from 'react'
import './activity.css'

// Imported Icons =========>
import {BsArrowRightShort} from 'react-icons/bs'

// Imported Images =========>
import user1 from '../../../Assets/user (1).png'
import user2 from '../../../Assets/user (2).png'
import user3 from '../../../Assets/user (3).png'
import user4 from '../../../Assets/user (4).png'
import user5 from '../../../Assets/user (5).png'

const Activity = () => {
  return (
    <div className='activitySection'>
       <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className='btn flex'>
          See All
          <BsArrowRightShort className="icon"/>
        </button>
       </div>

       <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">syeda zahra</span>
            <small>Ordered a new membership at Empire Fitness</small>
          </div>
          <div className="duration">
            7 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user2} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">momin butt</span>
            <small>Ordered a membership renewal at fitness center</small>
          </div>
          <div className="duration">
            2 hrs ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user3} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">faraz ahmad</span>
            <small>Ordered a membership</small>
          </div>
          <div className="duration">
            9 mins ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user4} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">syed hashim</span>
            <small>Ordered a membership</small>
          </div>
          <div className="duration">
            21 min ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user5} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">abdullah masood</span>
            <small>Ordered a membership</small>
          </div>
          <div className="duration">
            5 min ago
          </div>
        </div>
       </div>

        
    </div>
  )
}

export default Activity