import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../App.css";
import { useNavigate, NavigateFunction } from "react-router-dom";
import CustomerHomeNav from "./CustomerHomeNav";
import backgroundImage from '../assets/bg.jpg';

const ResultsPage = () => {
    const [searchLocation, setSearchLocation] = useState('');
    const [searchBudget, setSearchBudget] = useState('');
    const navigate = useNavigate() as NavigateFunction;

    const locationData = [
        {
            title: "Location 1",
            image: "src/assets/testImages/pic1.jpeg",
            description: "A beautiful place with great amenities.",
        },
        {
            title: "Location 2",
            image: "src/assets/testImages/pic2.jpeg",
            description: "A peaceful retreat for your stay.",
        },
        {
            title: "Location 3",
            image: "src/assets/testImages/pic3.jpeg",
            description: "A peaceful retreat for your stay.",
        },
        {
            title: "Location 4",
            image: "src/assets/testImages/pic4.jpeg",
            description: "A peaceful retreat for your stay.",
        },
        {
            title: "Location 2",
            image: "src/assets/testImages/pic5.jpeg",
            description: "A peaceful retreat for your stay.",
        },
        {
            title: "Location 5",
            image: "src/assets/testImages/pic6.jpeg",
            description: "A peaceful retreat for your stay.",
        },
        {
            title: "Location 6",
            image: "src/assets/testImages/pic1.jpeg",
            description: "A peaceful retreat for your stay.",
        },
        {
            title: "Location 6",
            image: "path/to/image2.jpg",
            description: "A peaceful retreat for your stay.",
        },
    ];

    const handleSearch = () => {
        navigate('/results');
    };

    const handleLocationClick = (location: any) => {
        navigate('/description')
    };

    return (
        <>
            <CustomerHomeNav />
            <div className="flex items-center justify-center min-h-screen"  style={{ backgroundImage: `url("${backgroundImage}")` }}>
                <div className="p-8 bg-white-500 rounded-md shadow-md">
                    <h1 className="mb-4 text-3xl font-semibold text-gray-800">Results</h1>
                    <div className="flex flex-wrap">
                        {locationData.map((location, index) => (
                            <div
                                key={index}
                                className="mb-4 mr-4 p-4 bg-gray-200 rounded-md hover:bg-gray-300 cursor-pointer"
                                onClick={() => handleLocationClick(location)}
                            >
                                <img
                                    src={location.image}
                                    alt={`Location ${index + 1}`}
                                    className="mb-2 w-full h-32 object-cover rounded-md"
                                />
                                <div className="text-sm font-semibold">{location.title}</div>
                                <div className="text-xs text-gray-600">{location.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResultsPage;
