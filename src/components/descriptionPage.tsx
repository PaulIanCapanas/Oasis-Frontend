import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../App.css";
import { useNavigate, NavigateFunction, useParams } from "react-router-dom";
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

const Description = () => {

	const navigate = useNavigate() as NavigateFunction;

	const [description, setDescription] = useState<Building>({
		id: 0,
    	name: '',
    	address: '0',
    	latitude: 0,
    	longitude: 0,
    	user_id: 0,
    	description: ''
	});
	const handleReservation = async () =>{
		alert("reservation complete")
		const reservation = await axios.post('http://localhost:3000/reservation/create-reservation', description);
		}
	const {id} = useParams();

	useEffect(() => {

		async function getDescription() {
			const data = await axios.post(`http://localhost:3000/building/get-building/${id}`)
			console.log(data.data.id[0]);
			setDescription(data.data.id[0]);
		}

		getDescription().catch(console.error);
	}, [])

	return (
		<>
			<CustomerHomeNav />
			<div style={{padding: '8em'}}>
				{description.description}

			</div>
			<div>
                <button
                  className="w-full py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                  onClick={handleReservation}
                >
                  Reserve
                </button>
              </div>
		</>
	);
};


export default Description