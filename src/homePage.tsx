import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import { useNavigate, NavigateFunction } from "react-router-dom";



const HomePage = () => {
    const [searchLocation, setSearchLocation] = useState('');
    const [searchBudget, setSearchBudget] = useState('');
    const navigate = useNavigate() as NavigateFunction
    const handleSearch = () => {
        navigate('/results')
    };

    return (
        <>
            <nav className="navbar">
                <h1 className="navbar-title"><a className="navbarTitle" href="/homePage">Oasis</a></h1>
                <ul className="nav-list">
                    <li className="nav-item"><a href="/">Home</a></li>
                    <li className="nav-item"><a href="/about">About</a></li>
                    <li className="nav-item"><a href="/services">Services</a></li>
                    <li className="nav-item"><a href="/contact">Contact</a></li>
                    <li className="logout"><a href="/login">Logout</a></li>
                </ul>
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

export default HomePage;
