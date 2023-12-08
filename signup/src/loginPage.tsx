import React, { useState } from "react";
import axios, { AxiosError } from 'axios';
import "./App.css";
import userIcon from "./assets/user-png.png";
import passwordIcon from "./assets/password-png.png";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  type ResponseType = {
    message: string;
  };

  const [loginError, setLoginError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:3000/login', formData);
    console.log('Server response:', response.data);
    setLoginError(null); 
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        
        const responseData = axiosError.response.data as ResponseType;

        setLoginError(responseData.message || 'Login failed');
        console.log('Axios response:', axiosError.response);
      } else {
        setLoginError('No response from the server');
      }
    } else {
      console.error('Error during login:', error);
      setLoginError('An error occurred while processing the request');
    }
  }
};
  

  return (
    <div>
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={userIcon} alt="" />
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <img src={passwordIcon} alt="" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        {loginError && <div className="error-message">{loginError}</div>}
        <div className="login">
          <button className="submit" onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
