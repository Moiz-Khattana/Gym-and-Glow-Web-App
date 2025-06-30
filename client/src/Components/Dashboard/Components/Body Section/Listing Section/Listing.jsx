import React from 'react';
import './listing.css';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsArrowRightShort } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigation hook

// imported Images
import img from '../../../Assets/image (1).png';
import img1 from '../../../Assets/image (9).png';
import img2 from '../../../Assets/image (8).png';
import img3 from '../../../Assets/image (10).png';
import user1 from '../../../Assets/user (1).png';
import user2 from '../../../Assets/user (2).png';
import user3 from '../../../Assets/user (3).png';
import user4 from '../../../Assets/user (4).png';

const Listing = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <div className='lisitingSection'>

      <div className="heading flex">
        <h1>My Listings</h1>
        
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="Image Name" />
          <h3>RAVE SALON</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img1} alt="Image Name" />
          <h3>CITY GYM</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img2} alt="Image Name" />
          <h3>BEAUTY SALON</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img3} alt="Image Name" />
          <h3>GYM OF GUJRAT</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top gym owners</h3>
            <button className='btn flex' onClick={() => navigate('/top-gym-owners')}>
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user1} alt="User Image" />
              <img src={user2} alt="User Image" />
              <img src={user3} alt="User Image" />
              <img src={user4} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                146 memberships sold <br />
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Top Salon Owners</h3>
            <button className='btn flex' onClick={() => navigate('/top-salon-owners')}>
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user3} alt="User Image" />
              <img src={user1} alt="User Image" />
              <img src={user4} alt="User Image" />
              <img src={user2} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                2856 memberships sold <br />
                <small>
                  26 owners <span className="date">31 days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
