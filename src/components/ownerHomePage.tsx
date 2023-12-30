import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../App.css";
import { useNavigate, NavigateFunction } from "react-router-dom";
import MenuBar from "../assets/menubar.png"



const OwnerHomePage = () => {
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
                    <h1 className="navbar-title"><a className="navbarTitle" href="/homePage">Oasis</a></h1>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <img src={MenuBar} className="menubarImg" />
                            <div className="dropdown-content">
                                <a href="/profile">User</a>
                                <a href="/messages">Messages</a>
                                <a href="/bookings">Bookings</a>
                                <a href="/my-bookings">Your Bookings</a>
                                <div className="logout"><a href="/login">Logout</a></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            <body>
                <div className="listings-container">
                    <div className="room-listing">
                        <img src="path/to/bedroom-image.jpg" alt="Cozy Bedroom" />
                        <h3>Cozy Bedroom</h3>
                        <p>A comfortable and cozy bedroom.</p>
                        <p>Price: $100 per night</p>
                    </div>
                    <div className="room-listing">
                        <img src="path/to/bedroom-image.jpg" alt="Cozy Bedroom" />
                        <h3>Cozy Bedroom</h3>
                        <p>A comfortable and cozy bedroom.</p>
                        <p>Price: $100 per night</p>
                    </div>
                    <div className="room-listing">
                        <img src="path/to/bedroom-image.jpg" alt="Cozy Bedroom" />
                        <h3>Cozy Bedroom</h3>
                        <p>A comfortable and cozy bedroom.</p>
                        <p>Price: $100 per night</p>
                    </div>
                </div>

                <div>
                    
                </div>
            </body>
        </>
    );
};

export default OwnerHomePage;
