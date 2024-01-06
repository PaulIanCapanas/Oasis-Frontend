import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomerHomeNav from "./CustomerHomeNav";
import UserMapComponent from "./userMapComponent";
import background from "../assets/bg.png";
import { useTokenValidation } from "./AuthValid/validToken";
import BarGraph from "./barGraph";
import GeoServices from "./map/GeoServices";

interface Feature {
  title: string;
  content: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Looking for?",
    content: "Wifi",
    description: "Boarding houses equipped with wifi",
  },
  {
    title: "For how many?",
    content: "Number of residents",
    description: "The number of residents that will be living",
  },
  {
    title: "Meal Options",
    content: "Meal plans available",
    description: "Options for meals during the stay",
  },
  {
    title: "Security Measures",
    content: "24/7 security",
    description: "Ensuring the safety of residents around the clock",
  },
  {
    title: "Common Areas",
    content: "Shared spaces",
    description: "Spaces for socializing and community interaction",
  },
  {
    title: "Laundry Facilities",
    content: "On-site laundry",
    description: "Convenient access to laundry services",
  },
];

const Homepage: React.FC = () => {
  const [searchLocation, setSearchLocation] = useState<string>("");
  const [coords, setCoords] = useState<{lat: number, lng: number}>({
    lat: 0,
    lng: 0
  });
  const [searchBudget, setSearchBudget] = useState<string>("");
  const searchBoxRef = useRef(null);

  const navigate = useNavigate();

  const [isMapPopupOpen, setIsMapPopupOpen] = useState(false);
  const [isBarPopupOpen, setIsBarPopupOpen] = useState(false);

  const togglePopupMap = () => {
    setIsMapPopupOpen(!isMapPopupOpen);
  };
  const togglePopupBar = () => {
    setIsBarPopupOpen(!isBarPopupOpen);
  };

  useEffect(() => {
    async function loadAutocomplete() {
      const geocoder = new GeoServices();
      const google = await geocoder.getBackingInstance().load();
      new google.maps.places.Autocomplete(
        searchBoxRef.current as unknown as HTMLInputElement
      );
    }

    loadAutocomplete();
  }, []);

  useEffect(() => {
    if (!searchLocation) return;

    const geocoder = new GeoServices();
    geocoder.getBackingInstance().load().then(g => {
      const reverse = new g.maps.Geocoder();
      reverse.geocode({
        address: searchLocation
      }).then(r => {
        if (r.results.length <= 0) {
          return;
        }
        console.log(r);
        setCoords({lat: r.results[0].geometry.location.lat(), lng: r.results[0].geometry.location.lng() })
      })
    });
  }, [searchLocation]);

  const handleSetLocationFromField = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setSearchLocation(e.currentTarget.value);
  }

  const handleSearch = () => {
    navigate(`/results/${coords.lat}/${coords.lng}`);
  };
  const { tokenValid } = useTokenValidation();

  const handleMapSetLocation = (lat: string, lng: string, address: string) => {
    setSearchLocation(address);
    setCoords({
      lat: parseInt(lat),
      lng: parseInt(lng)
    });
  }

  if (tokenValid === null) {
    return <div>Loading...</div>; // Or some loading spinner
  }

  if (!tokenValid) {
    return <div>Invalid token</div>; // Or redirect to login page
  }

  return (
    <div
      className="relative h-screen bg-center bg-cover"
      style={{ backgroundImage: `url("${background}")` }}
    >
      <div className="absolute inset-0 backdrop-filter backdrop-blur-sm">
        {/* Your existing code */}
        <CustomerHomeNav />
        <div className="flex flex-col items-center justify-center h-full p-8 mt-8 text-white">
          <div className="p-6 mb-8 text-center rounded-md bg-opacity-80">
            <h1 className="mb-2 font-extrabold text-white text-8xl">OASIS</h1>
            <p className="text-xl">Your home away from home</p>
          </div>

          <p className="text-lg">
            Discover comfort, safety, and community at Oasis Boarding House. We
            provide a serene and welcoming environment for your stay.
          </p>
          <div className="flex items-center w-full mb-4">
            <div className="flex items-center justify-center w-full">
              <div className="relative">
                <img
                  src="/src/assets/bargraph.png"
                  alt="Left Icon"
                  className="absolute mt-2 w-5 h-5"
                  onClick={togglePopupBar}
                  style={{ cursor: "pointer" }}
                />
                <input
                  ref={searchBoxRef}
                  type="text"
                  style={{ width: "800px" }}
                  className="px-5 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter location or hotel name"
                  value={searchLocation}
                  onChange={handleSetLocationFromField}
                />
                <img
                  src="/src/assets/maps-icon.png"
                  alt="Map Icon"
                  className="absolute bottom-2 right-2 mt-2 w-5 h-7 cursor-pointer"
                  onClick={togglePopupMap}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <select
                className="p-2 text-blue-500 border border-blue-500 rounded-r-md focus:outline-none"
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
          </div>
          {isMapPopupOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-md max-w-[690px] mx-auto w-5/6 h-[90vh]">
                <button
                  onClick={togglePopupMap}
                  className=" bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Close
                </button>
                <UserMapComponent onSetLocation={(lat, lng, address) => handleMapSetLocation(lat, lng, address)} />
              </div>
            </div>
          )}
          {isBarPopupOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-md max-w-[690px] mx-auto w-5/6 h-[90vh]">
                <button
                  onClick={togglePopupBar}
                  className=" bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Close
                </button>
                <BarGraph />
              </div>
            </div>
          )}

          <div className="w-full overflow-hidden mt-36">
            <div
              className="flex p-4 space-x-4 flex-nowrap"
              style={{
                overflowX: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 p-4 bg-gray-900 rounded-md w-80 bg-opacity-80"
                >
                  <h2 className="mb-4 text-2xl font-bold text-white">
                    {feature.title}
                  </h2>
                  <p className="text-white">{feature.content}</p>
                  <p className="text-white">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>{/* Additional content or components */}</div>
      </div>
    </div>
  );
  // replace with your actual loading component
};

export default Homepage;
