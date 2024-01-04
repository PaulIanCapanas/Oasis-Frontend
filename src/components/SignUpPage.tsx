import { useState } from "react";
import axios from 'axios';
import "../App.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    age: '',
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
      const response = await axios.post('http://localhost:3000/user/register', formData);
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
              placeholder="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input">
            <input
              type="text"
              placeholder="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="age">
            <input
              type="Number"
              placeholder="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="password">
            <input
              type="text"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="login">
          <button className="submit" onClick={handleSubmit}>Sign Up</button>
        </div>
      </div>
    
    
  );
};

export default SignupPage;