import React, { useState } from 'react';
import './top.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../../../contexts/UserContext'; // ✅ Import the context

// Imported Icons
import { BiSearchAlt } from 'react-icons/bi';
import { TbMessageCircle } from 'react-icons/tb';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';
import { BsQuestionCircle } from 'react-icons/bs';

// Imported Assets
import img from '../../../Assets/user (3).png';
import img2 from '../../../Assets/image (2).png';
import video from '../../../../../LoginAssets/video.mp4';

const Top = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const { user } = useUser(); // ✅ Get user from context

  const handleSearch = () => {
    const query = searchQuery.toLowerCase().trim();

    // Define routes based on keywords
    if (query.includes('orders') || query.includes('my orders')) {
      navigate('/my-orders');
    } else if (query.includes('add') || query.includes('business') || query.includes('enlist')) {
      navigate('/enlist');
    } else if (query.includes('top') || query.includes('sellers')) {
      navigate('/top-sellers');
    } else if (query.includes('gym') || query.includes('top gym') || query.includes('gym owners')) {
      navigate('/top-gym-owners');  // New route for Top Gym Owners
    } else if (query.includes('salon') || query.includes('top salon') || query.includes('salon owners')) {
      navigate('/top-salon-owners');  // New route for Top Salon Owners
    } else if (query.includes('help') || query.includes('support')) {
      navigate('/support');
    } else {
      alert('No page found for your search.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to GYM AND GLOW.</h1>
          <p>Hello {user?.username || 'User'}, Welcome back!</p> {/* ✅ Display user email */}
        </div>

        <div className="searchBar flex">
          <input
            type="text"
            placeholder='Search Dashboard'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <BiSearchAlt className="icon" onClick={handleSearch} />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={img} alt="Admin Image" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and sell extraordinary Services.</h1>
          <p>The world's fast growing industry today are natural made products!</p>

          <div className="buttons flex">
            <button className='btn' onClick={() => navigate('/enlist')}>Add Business</button>
            <button className='btn transparent' onClick={() => navigate('/edit-profile')}>Edit Profile</button>

          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>4 Orders</small>
                </span>
                <span>
                  This Month <br /> <small>175 Orders</small>
                </span>
              </div>

              <span className="flex link" onClick={() => navigate('/my-orders')}>
                Go to my orders <BsArrowRightShort className="icon" />
              </span>
            </div>

            <div className="imgDiv">
              <img src={img2} alt="Image Name" />
            </div>
          </div>

          <div className="sideBarCard">
            <BsQuestionCircle className="icon" />
            <div className="cardContent">
              <div className="circle1"></div>
              <div className="circle2"></div>

              <h3>Help Center</h3>
              <p>Having trouble in Planti, please contact us for more questions.</p>

              <button className='btn' onClick={() => navigate('/support')}>Go to help center</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
