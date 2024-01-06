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
			<div>
				{description}
			</div>
		</>
	);
};


export default Description