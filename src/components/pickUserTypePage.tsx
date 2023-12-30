import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../App.css";
import { useNavigate, NavigateFunction } from "react-router-dom";



const UserType = () => {
    const [searchLocation, setSearchLocation] = useState('');
    const [searchBudget, setSearchBudget] = useState('');
    const navigate = useNavigate() as NavigateFunction
    const handleSearch = () => {
        navigate('/results')
    };

    return (
        <>
        <div className="user-type">
            <div className="owner-type">
                <a href="/owner-home-page">Renting Your Place?</a>
            </div>
            <div className="customer-type">
                <a href="/customer-home-page">Looking For a Place?</a>
            </div>
        </div>
        </>
    );
};

export default UserType;
