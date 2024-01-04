import { useState } from "react";
import axios from 'axios';
import "../App.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone_number: '',
    age: '',
    user_type: '',
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
          <div className="input">
            <input
              type="text"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <input
              type="number"
              placeholder="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="user_type"
              name="user_type"
              value={formData.user_type}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="login">
          <button className="submit" onClick={handleSubmit}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;