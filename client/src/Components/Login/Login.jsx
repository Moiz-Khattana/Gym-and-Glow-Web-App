import React, { useEffect, useState } from 'react';
import './Login.css'; 
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// Import our assets
import video from '../../LoginAssets/video.mp4';
import logo from '../../LoginAssets/logo.png';
import Moiz from '../../LoginAssets/Moiz.jpg';
import Fajar from '../../LoginAssets/Fajar.jpeg';
import Hamza from '../../LoginAssets/Hamza.jpg';


// Imported Icons
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { useUser } from '../../contexts/UserContext';

const Login = () => {
  // Usestate Hook to store inputs
  const [loginUserName, setLoginUserName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigateTo = useNavigate();

  // Let us now show the message to the user
  const [loginStatus, setLoginStatus] = useState('');
  const [statusHolder, setstatusHolder] = useState('message');

  // Onclick let us get what the user has entered
  const { setUser } = useUser(); // use context

  const loginUser = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", loginUserName);
    formData.append("password", loginPassword);
    
    try {
      const response = await axios.post(`http://localhost:5000/api/v1/serviceProvider/getUser`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const userData = response.data.data[0]; // Since your backend sends it in an array
      console.log("Logged in user:", userData);

      // Set context with required fields
      setUser({
        email: userData.email,
        password: userData.password,
        username: userData.username,
      });

      navigateTo('/dashboard');
    } catch (error) {
      console.error("Error logging in:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    if (loginStatus !== '') {
      setstatusHolder('showMessage'); // Show message
      setTimeout(() => {
        setstatusHolder('message'); // Hide it after 4s
      }, 4000);
    }
  }, [loginStatus]);

  // Clear the form on submit
  const onSubmit = () => {
    setLoginUserName('');
    setLoginPassword('');
  };

  return (
    <>
    <div className='loginPage flex'>
      <div className="container flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className='title'>Enlist And Provide Extraordinary Services</h2>
            <p>Rise And Shine!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Don't have an account?</span>
            <Link to={'/register'}>
              <button className='btn'>Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome Back!</h3>
          </div>

          <form className='form grid' onSubmit={onSubmit}>
            <span className={statusHolder}>{loginStatus}</span>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className='icon' />
                <input
                  type="text"
                  id='username'
                  placeholder='Enter Username'
                  onChange={(event) => {
                    setLoginUserName(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className='icon' />
                <input
                  type="password"
                  id='password'
                  placeholder='Enter Password'
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                />
              </div>
            </div>

            <button type='submit' className='btn flex' onClick={loginUser}>
              <span>Login</span>
              <AiOutlineSwapRight className='icon' />
            </button>

            <span className='forgotPassword'>
              Forgot your password? <a href="">Click Here</a>
            </span>
          </form>
        </div>

      </div>
    </div>
    <div className="team-section">
    <div data-aos="zoom-in" data-aos-duration="1000" className="team-heading">
      <h2 className="team-title">
        People who made it <span className="team-highlight">Successful</span>
      </h2>
      <p className="team-description">
        Behind the success of our website is a dynamic team of
        dedicated individuals. It's the passion, expertise, and
        collaborative spirit of every person in our group that has
        shaped this success story.
      </p>
    </div>
    <br />
    <div className="team-grid">
      <div data-aos="zoom-in" data-aos-duration="400" className="team-card">
        <div className="team-img-container" style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
          <img src={Hamza} alt="" className="team-img" />
          <div className="team-info">
            <h1 className="team-name">Hamza</h1>
            <h6 className="team-role">BACKEND DEVELOPER  AND UI/UX DESIGNER </h6>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-duration="800" className="team-card">
        <div className="team-img-container" style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
          <img src={Moiz} alt="" className="team-img" />
          <div className="team-info">
            <h1 className="team-name">Moiz Khattana</h1>
            <h6 className="team-role">FRONT-END DEVELOPER & DOCUMENTATION EXPERT </h6>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-duration="1200" className="team-card">
        <div className="team-img-container" style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
          <img src={Fajar} alt="" className="team-img" />
          <div className="team-info">
            <h1 className="team-name">Noor-e-Fajar</h1>
            <h6 className="team-role">RESEARCH AND TESTING EXPERT</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  );
};

export default Login;