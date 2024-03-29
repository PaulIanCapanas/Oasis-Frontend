import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuBar from "../assets/menubar.png";
import Cookies from 'js-cookie';
import Logo from "../assets/logo.png"


const CustomerHomeNav: React.FC = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };  

const handleLogout = () => {
  Cookies.remove('jwtToken');
    navigate("/login");
}
  return (
    <nav className="fixed w-full flex items-center justify-between p-4 bg-gray-800">
      <div className="pr-4">
        <img src={Logo} alt="" className="w-15 h-12 cursor-pointer"/>
      </div>
      <Link to="/customer-home-page" className="text-2xl font-bold text-white hover:text-gray-300">
        Oasis
      </Link>
      <div className="flex items-center space-x-4 ml-auto">
        <div className="relative group">
          <img
            src={MenuBar}
            alt="Menu"
            className="w-12 h-12 cursor-pointer"
            onClick={toggleDropdown}
          />
          <div
            className={`${
              isDropdownOpen ? "block" : "hidden"
            } absolute right-0 p-2 mt-2 text-black bg-white rounded-md`}
          >
            <Link to="/building-register" className="block">
              Listings
            </Link>
            <div className="block logout">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CustomerHomeNav;
