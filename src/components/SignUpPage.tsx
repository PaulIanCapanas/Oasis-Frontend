import { useState } from "react";
import axios from 'axios';
import "../App.css";
import logo from '../assets/logo.png';
import image from '../assets/bg.jpeg';
import backgroundImage from '../assets/bg.jpg';

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
        <>
            <div className="flex  items-center justify-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain' }}>
                <div className="absolute inset-0 backdrop-filter backdrop-blur-sm">
                    <div className="flex w-5/6 mt-5 mx-auto flex-row">
                        <div className="flex-1 p-10 bg-gray-200 rounded-md inline-block left-10">
                            <div className="flex flex-col items-center justify-center flex-1 p-10 bg-gray-200 rounded-md">
                                <img src={logo} alt="Logo" className="object-cover w-32 h-32 mb-6 rounded-full" />
                                <img src={image} alt="Image" className="object-cover w-full h-64 mb-6 rounded-md" />
                                <div className="text-center text-gray-600">
                                    Find comfort away from home, discover your Oasis in every city.
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 p-10 bg-white rounded-md shadow-md inline-block">
                            <div className="mb-6 text-3xl font-semibold text-gray-800">Sign Up</div>
                            <form>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        name="first_name"
                                        value={formData.first_name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-0.5 border rounded-md"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        name="last_name"
                                        value={formData.last_name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-0.5 border rounded-md"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-0.5 border rounded-md"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full px-4 py-0.5 border rounded-md"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        name="phone_number"
                                        value={formData.phone_number}
                                        onChange={handleChange}
                                        className="w-full px-4 py-0.5 border rounded-md"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="number"
                                        placeholder="Age"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        className="w-full px-4 py-0.5 border rounded-md"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        placeholder="User Type"
                                        name="user_type"
                                        value={formData.user_type}
                                        onChange={handleChange}
                                        className="w-full px-4 py-0.5 border rounded-md"
                                    />
                                </div>
                                <div className="mb-6 text-sm text-blue-500">
                                    Already have an account? <a href="/login">Login here</a>
                                </div>
                                <div className="login">
                                    <button className="w-full py-0.5 text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={handleSubmit}>
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignupPage;