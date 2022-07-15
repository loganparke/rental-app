import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_GUIDE } from '../../../utils/mutations';

function AddGuide() {

  const [formState, setFormState] = useState();

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState);
  };

  const [addGuide] = useMutation(ADD_GUIDE);
  const handleFormSubmit = async (event) => {
    console.log('hi');
    try {
      console.log('hello')
      const guide = await addGuide({
        variables: {
          name: formState.name,
          address: formState.address,
          photo: formState.photo,
          contactPhone: formState.phone,
        },
      });
      console.log('new guide below')
      console.log(guide);
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