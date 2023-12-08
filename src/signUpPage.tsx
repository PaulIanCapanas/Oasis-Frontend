import React, { useState } from "react";
import axios from 'axios';
import "./App.css";
import user_icon from "./assets/user-png.png";
import password_icon from "./assets/password-png.png";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/signup', formData);
      console.log('Server response:', response.data);
    } catch (error: any) {
    console.error('Error submitting form:', error);
    console.log('Axios response:', error.response);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="signUp">
          <button className="submit" onClick={handleSubmit}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;