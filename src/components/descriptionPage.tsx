import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../App.css";
import { useNavigate, NavigateFunction, useParams } from "react-router-dom";
import CustomerHomeNav from "./CustomerHomeNav";
import backgroundImage from '../assets/bg.jpg';


const Description = () => {

	const [description, setDescription] = useState<string>('');
	const building_id = useParams();

	useEffect(() => {

		async function getDescription() {
			const data = await axios.post(`http://localhost:3000/building/get-building/${building_id}`)
			console.log(data)
			setDescription(data.data.description);
		}

		getDescription().catch(console.error);
	}, [])

    return (
        <>
            <CustomerHomeNav />
            <div className="flex items-center justify-center h-screen bg-gray-200" style={{ backgroundImage: `url("${backgroundImage}")` }}>
                <div className="max-w-md p-6 bg-white rounded-md shadow-md">
                    <h2 className="text-3xl font-semibold mb-4">Location Details</h2>
                    <p className="text-gray-600 mb-4">
                        Explore the amazing features of our latest smartphone. This cutting-edge device comes with a powerful processor, stunning display, and an advanced camera system to capture your memorable moments.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Additional features include a long-lasting battery, fast charging capabilities, and a sleek design that fits comfortably in your hand.
                    </p>
                    <div className="flex justify-end">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                            Reserve Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Description