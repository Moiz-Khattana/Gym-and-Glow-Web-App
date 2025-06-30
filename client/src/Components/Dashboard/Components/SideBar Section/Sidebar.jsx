import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './sidebar.css';

// Imported Images
import logo from '../../Assets/logo.png';

// Imported Icons
import { IoMdSpeedometer } from 'react-icons/io';
import { MdDeliveryDining, MdOutlineExplore, MdOutlineEvent } from 'react-icons/md';
import { BsTrophy, BsQuestionCircle, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { AiOutlinePieChart } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={logo} alt="Logo" />
        <h1>GYM & GLOW</h1>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <Link to="/Dashboard" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">DASHBOARD</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/user" className="menuLink flex"> {/* Updated Link to User.jsx */}
              <MdDeliveryDining className="icon" />
              <span className="smallText">USER MANAGEMENT</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/reports" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallText">ANALYTICS & REPORTS</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/support-feedback" className="menuLink flex">
              <BsTrophy className="icon" />
              <span className="smallText">SUPPORT & FEEDBACK</span>
            </Link>
          </li>

          <li className="listItem">
            <Link to="/reviews" className="menuLink flex">
              <MdDeliveryDining className="icon" />
              <span className="smallText">REVIEWS MANAGEMENT</span>
            </Link>
          </li>

          <li className="listItem">
           <Link to="/event-management" className="menuLink flex">
           <MdOutlineEvent className="icon" />
           <span className="smallText">EVENTS MANAGEMENT</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">SETTINGS</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <Link to="/notifications" className="menuLink flex">
              <AiOutlinePieChart className="icon" />
              <span className="smallText">NOTIFICATIONS</span>
            </Link>
          </li>

          <li className="listItem logOutBtn">
            <Link to="/" className="menuLink flex">
              <BsFillArrowLeftCircleFill className="icon" />
              <span className="smallText">LOG OUT</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <h3>Help Center</h3>
          <p>Having trouble? Please contact us for assistance.</p>
          <button className="btn">Go to Help Center</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
