import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import { useNavigate, NavigateFunction } from "react-router-dom";
import MenuBar from "./assets/menubar.png"



const CustomerHomePage = () => {
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
                            <img src={MenuBar} className="menubarImg"/>
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
                <div className="header2">In lespaul We trust</div>
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Enter location or hotel name"
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                    />
                    <select
                        className="budget-select"
                        value={searchBudget}
                        onChange={(e) => setSearchBudget(e.target.value)}
                    >
                        <option value="" disabled>Select Budget</option>
                        <option value="100">$100</option>
                        <option value="200">$200</option>
                        <option value="300">$300</option>
                    </select>
                    <button className="search-button" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </body>
        </>
    );
};

export default CustomerHomePage;
