import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../App.css";
import { useParams, useNavigate } from "react-router-dom";
import CustomerHomeNav from "./CustomerHomeNav";
import backgroundImage from '../assets/bg.jpg';

type Building = {
    id: number,
    name: string,
    address: string,
    latitude: number,
    longitude: number,
    user_id: number,
    description: string
}

const ResultsPage = () => {
    const { lat, lng } = useParams();
    const [buildings, setBuildings] = useState<Building[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function getBuildingsWithinRadius() {
            const data = await axios.post<{ id: Building[] }>('http://localhost:3000/building/get-buildings', {
                lat: parseInt(lat ?? '0'),
                lng: parseInt(lng ?? '0')
            })
            console.log(data)
            setBuildings(data.data.id);
        }

        getBuildingsWithinRadius().catch(console.error);
    }, [lat, lng])

    const handleLocationClick = (id: number) => {
        navigate(`/description/${id}`);
        // alert('BUILDING RESERVED LETS GOOOOO WIIEEEE');
    };

    return (
        <>
            <CustomerHomeNav />
            <div className="flex items-center justify-center min-h-screen"  style={{ backgroundImage: `url("${backgroundImage}")` }}>
                <div className="p-8 bg-white-500 rounded-md shadow-md">
                    <h1 className="mb-4 text-3xl font-semibold text-gray-800">Results</h1>
                    <div className="flex flex-wrap">
                        {buildings.map((location, index) => (
                            <div
                                key={index}
                                className="mb-4 mr-4 p-4 bg-gray-200 rounded-md hover:bg-gray-300 cursor-pointer"
                                onClick={() => handleLocationClick(location.id)}
                            >
                                <div className="text-sm font-semibold">{location.name}</div>
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
