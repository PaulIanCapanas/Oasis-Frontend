import React, { useState } from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import logo from '../assets/logo.png';
import image from '../assets/bg.jpeg';
import backgroundImage from '../assets/bg.jpg';

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [loginError, setLoginError] = useState<string | null>(null);

  const navigate = useNavigate() as NavigateFunction;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.username.trim() || !formData.password.trim()) {
      setLoginError('Please enter both username and password');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/homePage', formData);

      if (response.data.success) {
        setLoginError(null);
        navigate('/homePage');
      } else {
        setLoginError('Invalid credentials. Please try again.');
      }
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;

        if (axiosError.response) {
          const responseData = axiosError.response.data as { message: string };
          setLoginError(responseData.message || 'Login failed');
        } else {
          setLoginError('No response from the server');
          navigate('/user-type');
        }
      } else {
        console.error('Error during login:', error);
        setLoginError('An error occurred while processing the request');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }} >
      <div className="flex max-w-screen-2xl">
        <div className="flex-1 p-10 bg-white rounded-md shadow-md">
          <div className="mb-6 text-3xl font-semibold text-gray-800">Login</div>
          <div className="mb-6 text-gray-600">
            Oasis is totally free to use. Sign up using your email address or username below to get started.
          </div>
          <form>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Username or Email"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md"
              />
            </div>
            <div className="mb-6 text-sm text-blue-500">
              Don't have an account? <a href="/create-user">Register here</a>
            </div>
            {loginError && <div className="mb-6 text-red-500">{loginError}</div>}
            <div>
              <button
                className="w-full py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 p-10 bg-gray-200 rounded-md">
          <img src={logo} alt="Logo" className="object-cover w-32 h-32 mb-6 rounded-full" />
          <img src={image} alt="Image" className="object-cover w-full h-64 mb-6 rounded-md" />
          <div className="text-center text-gray-600">
            Find comfort away from home, discover your Oasis in every city.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
