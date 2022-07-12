import React, { useState } from "react";

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

  const handleFormSubmit = () => {
    console.log(formState);
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
      <form className="bg-cyan-800 p-3 text-white flex flex-col">
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
          <input type="file" name='photo' onChange={handleFormChange} className="text-black mx-2" />
        </label>
        <input type="submit" onSubmit={handleFormSubmit}/>
      </form>
    </div>

    </div>
  )
}

export default AddGuide;