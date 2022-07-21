import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_GUIDE, ADD_POI } from '../../../utils/mutations';

function AddGuide() {

  const [formState, setFormState] = useState();

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const [addGuide] = useMutation(ADD_GUIDE);
  const [addPoi] = useMutation(ADD_POI);
  const handleFormSubmit = async (event) => {
    try {
      const guide = await addGuide({
        variables: {
          name: formState.name,
          address: formState.address,
          photo: formState.photo,
          contactPhone: formState.phone,
        },
      });

      let geocodeAddress = guide.data.addGuide.address.split(' ').join('%20').concat('&');

        const newLocation = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${geocodeAddress}key=`)
        .then(Response => Response.json())
        .then((data) => {
          console.log(data);
          const newLatLong = data.results[0].geometry.location;
          return newLatLong;
        })
        .catch((err) => console.log(err));
        const guideId = guide.data.addGuide._id
      const addPoiResponse = await addPoi({
        variables: {
          guideId: guideId,
          name: 'home',
          lat: newLocation.lat,
          lng: newLocation.lng
        }
      });
      console.log(addPoiResponse);
      if(guide) {
        window.location.replace("/dashboard");
      }
      
    } catch (e) {
      console.log(e);
    }
  }

  return(
    <div>
    <nav className="bg-cyan-800 text-white p-4 flex justify-between">
      <p className="text-3xl">🏕️</p>
      <a href="/Dashboard" className="bg-white p-3 rounded-full text-black" >Back to Dashboard</a>
      <p> </p>
    </nav>
    <div  className="bg-white m-5 rounded-md">
      <a href="/dashboard">X</a>
      <p>add guide</p>
      <div className="bg-cyan-800 p-3 text-white flex flex-col">
        <label className="m-2">Enter Your Rental Property Name:
          <input type="text" name='name' onChange={handleFormChange} className="text-black mx-2" />
        </label>
        <label className="m-2">Enter Your Rental Property Address:
          <input type="text" name='address' onChange={handleFormChange} className="text-black mx-2" />
        </label>
        <label className="m-2">Enter the phone number you want guests to see:
          <input type="text" name='phone' onChange={handleFormChange} className="text-black mx-2" />
        </label>
        <label className="m-2">Upload a Primary Photo:
          <input type="text" name='photo' onChange={handleFormChange} className="text-black mx-2" />
        </label>
        <button onClick={handleFormSubmit}>Save Guide</button>
      </div>
    </div>

    </div>
  )
}

export default AddGuide;