import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerHomeNav from "./CustomerHomeNav";
import background from "../assets/bg.jpg";

interface Feature {
  title: string;
  content: string;
  description: string;
}

const features: Feature[] = [
  { title: "Looking for?", content: "Wifi", description: "Boarding houses equipped with wifi" },
  { title: "For how many?", content: "Number of residents", description: "The number of residents that will be living" },
  { title: "Meal Options", content: "Meal plans available", description: "Options for meals during the stay" },
  { title: "Security Measures", content: "24/7 security", description: "Ensuring the safety of residents around the clock" },
  { title: "Common Areas", content: "Shared spaces", description: "Spaces for socializing and community interaction" },
  { title: "Laundry Facilities", content: "On-site laundry", description: "Convenient access to laundry services" },
];

const CustomerHomePage: React.FC = () => {
  const [searchLocation, setSearchLocation] = useState<string>("");
  const [searchBudget, setSearchBudget] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/results");
  };

  return (
    <div className="relative h-screen bg-center bg-cover" style={{ backgroundImage: `url("${background}")` }}>
      <div className="absolute inset-0 backdrop-filter backdrop-blur-sm">
        <CustomerHomeNav />
        <div className="flex flex-col items-center justify-center h-full p-8 text-white">
          <div className="p-6 mb-8 text-center bg-black rounded-md bg-opacity-80">
            <h1 className="text-5xl font-bold">Welcome to Oasis</h1>
            <p className="text-lg">Your home away from home</p>
            <p className="text-lg">Discover comfort, safety, and community at Oasis Boarding House. We provide a serene and welcoming environment for your stay.</p>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="text"
              className="flex-1 w-full p-2 mr-2 text-black border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
              placeholder="Enter location or hotel name"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            />
            <select
              className="p-2 ml-2 text-blue-500 border border-blue-500 rounded-r-md focus:outline-none"
              value={searchBudget}
              onChange={(e) => setSearchBudget(e.target.value)}
            >
              <option value="" disabled>
                Select Budget
              </option>
              <option value="100">0 - 5000</option>
              <option value="200">5001 - 10000</option>
              <option value="300">10000+</option>
            </select>
            <button
              className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-md hover:bg-blue-700"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          <div className="w-full mt-56 overflow-x-auto">
            <div className="flex p-4 space-x-4 flex-nowrap">
              {features.map((feature, index) => (
                <div key={index} className="flex-shrink-0 p-4 bg-gray-900 rounded-md w-80 bg-opacity-80">
                  <h2 className="mb-4 text-2xl font-bold text-white">{feature.title}</h2>
                  <p className="text-white">{feature.content}</p>
                  <p className="text-white">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerHomePage;
