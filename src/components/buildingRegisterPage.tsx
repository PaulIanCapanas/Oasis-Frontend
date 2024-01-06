import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CustomerHomeNav from './CustomerHomeNav'
import UserMapComponent from './userMapComponent'

import backgroundImage from '../assets/bg.jpg';

const BuildingCreator = () => {

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    user_id: parseInt(localStorage.getItem('userId') ?? '0'),
    longitude: '',
    latitude: '',
    description: '',
    address: '',
  })

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      name: event.currentTarget.value
    })
  }

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      description: event.currentTarget.value
    })
  }

  const handleLocationChange = (lat: string, lng: string, address: string) => {
    console.log(lat, lng, address);
    setFormData(l => ({
      ...l,
      longitude: lng,
      latitude: lat,
      address: address
    }))

    setPopupOpen(false);
  }

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3000/building/create-building', {
        ...formData,
        longitude: Number(formData.longitude),
        latitude: Number(formData.latitude)
      })
    } catch (e) {
      console.error('Axios response:', e);
    }
  }
  
  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <CustomerHomeNav />
      <div className="flex items-center justify-center h-screen backdrop-blur-sm" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <div className="flex ">
          <div className="mx-auto">
            <div className="mt-8 mx-auto max-w-[800px] relative">
              <div className="bg-white p-8 rounded-md shadow-md">
                <h2 className="text-3xl font-semibold mb-4">Building Creation</h2>
                <div className='relative mb-4'>
                  <input type="text" id='name' placeholder='Name' value={formData.name} onInput={handleNameChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                  <input type="text" id='description' placeholder='Description' value={formData.description} onInput={handleDescriptionChange} className="mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                  <div className="relative flex items-center"> {/* Wrap Location input and image in a flex container */}
                    <input type="location" name="Longitude" id="longitude" placeholder='Longitude' value={formData.longitude} readOnly={true} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                    <input type="location" name="Latitude" id="latitude" placeholder='Latitude' value={formData.latitude} readOnly={true} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                    <img
                      src="/src/assets/maps-icon.png"
                      alt="Map Icon"
                      className="absolute right-2 mt-2 w-5 h-7 cursor-pointer"
                      onClick={togglePopup}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                  <button
                    className="w-half mt-2 w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500">
                    Add Attachments
                  </button>
                  <div className='pt-5 pb-5'></div>
                  <button onClick={handleSubmit} className='top-20  bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none'>
                    Register Now!
                  </button>
                </div>
                <div>
                  {isPopupOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                      <div className="bg-white p-8 rounded-md max-w-[690px] mx-auto w-5/6 h-[90vh]">
                        <button onClick={togglePopup} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-4">
                          Close
                        </button>
                        <UserMapComponent onSetLocation={(lat, lng, address) => handleLocationChange(lat, lng, address)}  />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default BuildingCreator