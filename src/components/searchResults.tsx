import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../App.css";
import { useNavigate, NavigateFunction, useParams } from "react-router-dom";

const ResultsPage = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [searchBudget, setSearchBudget] = useState('');
  const navigate = useNavigate() as NavigateFunction;
  const { id } = useParams();

  const handleResult = async () => {
    try {
      const response = await axios.post('http://localhost:3000/building/get-buildings/' + id);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }

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
        <div>
          <button onClick={handleResult}>Click meh!!</button>
        </div>
        <div className="textResults">SEARCH RESULTS</div>
      </body>
    </>
  );
};

export default ResultsPage;
