import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./css/App.css";
import { useNavigate, NavigateFunction } from "react-router-dom";
import MenuBar from "./assets/menubar.png"
import ProfilePicture from "./assets/profile.jpg"



const UserPage = () => {
    const [searchLocation, setSearchLocation] = useState('');
    const [searchBudget, setSearchBudget] = useState('');
    const navigate = useNavigate() as NavigateFunction
    const handleSearch = () => {
        navigate('/results')
    };

    return (
        <>
            <nav className="navbar">
                <div className="menu-bar">
                    <h1 className="navbar-title"><a className="navbarTitle" href="/owner-home-page">Oasis</a></h1>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <img src={MenuBar} className="menubarImg" />
                            <div className="dropdown-content">
                                <a href="/user-page">User</a>
                                <a href="/chat">Messages</a>
                                <a href="/bookings">Bookings</a>
                                <a href="/my-bookings">Your Bookings</a>
                                <div className="logout"><a href="/login">Logout</a></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <body>
                <div className="main-container">
                    <div className="profile-container">
                        <div className="profile-image">
                            <img src={ProfilePicture} alt="User Profile Image"/>
                        </div>

                        <div className="profile-info">
                            <h2>Juan Dela Cruz</h2>
                            <p>Student</p>
                        </div>

                        <div className="profile-details">
                            <p>Email: juan.DCruz@example.com</p>
                            <p>Location: Iloilo, Philippines</p>
                        </div>
                    </div>

                    <div className="user-content">
                        <h2>User Content</h2>
                        <p>Welcome to your user page, Juan D Cruz! This is where you can showcase additional user-related content.</p>
                        
                    </div>
                </div>
            </body>
        </>
    );
};

export default UserPage;
