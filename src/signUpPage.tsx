import React, { useState } from "react";
import axios from 'axios';
import "./css/App.css";
import user_icon from "./assets/user-png.png";
import password_icon from "./assets/password-png.png";
import { useNavigate, NavigateFunction } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate  = useNavigate() as NavigateFunction;

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/create-user', formData);
      console.log('Server response:', response.data);
      console.log('SignUp succesful!')
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
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="texts">Already have an account?<a href="/login">Log in here</a></div>
        <div className="login">
          <button className="submit" onClick={handleSubmit}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;