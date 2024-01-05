import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BuildingMapComponent from './buildingMapComponent'

const BuildingCreator = () => {

  const [formData, setFormData] = useState({
    name: '',
    user_id: '',
    longitude: '',
    latitude: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/building/create-building', formData)
    } catch (error: any) {
      console.log('Axios response:', error.response);
    }
  }

  return (
    <>
      <div>BuildingCreator</div>
      <div>
        <input type="text" id='name' placeholder='Name'/>
        <input type="text" id='description' placeholder='Description'/>
        
      </div>
      <BuildingMapComponent />
    </>
  )
}

export default BuildingCreator