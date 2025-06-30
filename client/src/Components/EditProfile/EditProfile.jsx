import React, { useState } from 'react';
import Sidebar from '../../Components/Dashboard/Components/SideBar Section/Sidebar';
import profileImg from '../Dashboard/Assets/user (3).png';

const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    confirmPassword: '',
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Profile:', profileData);
    // Backend integration here
  };

  return (
    <div className="editProfilePage">
      <Sidebar />
      <div className="editProfileWrapper">
        <h2>Edit Your Profile</h2>

        <div className="profileImageSection">
          <img
            src={
              profileData.profilePic
                ? URL.createObjectURL(profileData.profilePic)
                : profileImg
            }
            alt="Profile"
          />
        </div>

        <form className="enlistForm" onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={profileData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="inputGroup">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={profileData.email}
              onChange={handleChange}
            />
          </div>

          <div className="inputGroup">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="03XX-XXXXXXX"
              value={profileData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="inputGroup">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              value={profileData.address}
              onChange={handleChange}
            />
          </div>

          <div className="inputGroup">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter new password"
              value={profileData.password}
              onChange={handleChange}
            />
          </div>

          <div className="inputGroup">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              value={profileData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <div className="inputGroup">
            <label>Update Profile Picture</label>
            <input
              type="file"
              name="profilePic"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          <button className="submitBtn" type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
