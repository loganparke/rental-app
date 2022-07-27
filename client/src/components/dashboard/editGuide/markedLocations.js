import React, { useState } from "react"
import { useStoreContext } from "../../../utils/GlobalState";
import { useMutation } from "@apollo/client";
import { ADD_POI, DELETE_POI } from "../../../utils/mutations";

const MarkedLocations = () => {
  const [state] = useStoreContext();
  const guideId = state?.guide?._id;

  const places = state?.guide?.poi?.filter(place => 
    place.name !== 'home');

  const [activeAdd, setActiveAdd] = useState(false);
  const [formState, setFormState] = useState();

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const [addPoi] = useMutation(ADD_POI);

  const handleSavePoi = async () => {
    console.log('jo')
    try {
      let geocodeAddress = formState.address.split(' ').join('%20').concat('&');

      const newLocation = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${geocodeAddress}key=AIzaSyCnd1TuJv-z-dpDnNruxMPm8WN8BYYaMkA`)
        .then(Response => Response.json())
        .then((data) => {
          console.log(data);
          const newLatLong = data.results[0].geometry.location;
          return newLatLong;
        })
        .catch((err) => console.log(err));

      const addPoiResponse = await addPoi({
        variables: {
          guideId: guideId,
          name: formState.name,
          address: formState.address,
          type: formState.selectType,
          lat: newLocation.lat,
          lng: newLocation.lng
        }
      });
      setActiveAdd(false);
    } catch (e) {
      console.log(e);
    }
  }

  //delete POI
  const [deletePoi] = useMutation(DELETE_POI);
  const handleDeletePoi = async (poiId) => {
    const deletePoiResponse = await deletePoi({
      variables: {
        guideId: guideId,
        poiId: poiId
      }
    });
  }

  

  return (
    <>
    <section className="mt-5 w-full flex flex-wrap">
        <div className="w-full flex mb-3">
          <p className="w-1/4"></p>
          <h3 className="w-1/2 m-3 text-2xl">Marked Locations</h3>
          <button className="bg-cyan-700 p-2 rounded-md h-10 text-white font-bold mt-2" onClick={() => setActiveAdd(true)}>
            ➕ Add Location
          </button>
        </div>
        <div className="w-full m-auto flex flex-wrap justify-around">
        {places?.map((place) => {
          return(
            <div key={place?._id} className="bg-gray-100 w-5/12 p-3 m-2 rounded-md shadow-lg">
              <div className="flex justify-between">
                <p className="opacity-0">🗑️</p>
                <h4 className="px-4 font-bold">{place?.name}</h4>
                <button className="relative bg-red-600 rounded h-8" onClick={() => handleDeletePoi(place?._id)}>🗑️</button>
              </div>
              
              <p>address: {place?.address}</p>
              <p>type: {place?.type}</p>
            </div>
          )
        })}
        </div>
      </section>
    {(activeAdd) && (
      <div>
        <div className="absolute top-0 left-0 opacity-30 bg-gray-400 w-screen h-screen"> </div>
      <div className="absolute top-50 left-0 flex justify-around">
        <div className="rounded-md bg-cyan-700 p-2 flex flex-wrap w-1/2 z-20">
        <div className="flex w-full justify-between text-white font-bold">
          <p></p>
          <h3>Add a location to your map</h3> 
          <button onClick={() => setActiveAdd(false)} className='bg-gray-50 rounded text-black px-2'>X</button>
        </div> 
      <div className="w-full">
        <select name="selectType" onChange={handleFormChange}>
          <option selected disabled>Select a Type</option>
          <option>Restaurant</option>
          <option>Recreation</option>
          <option>Groceries</option>
          <option>Parks/Nature</option>
          <option>Shopping</option>
        </select>
      </div>
        
        <div className="w-full">
          <p className="text-white font-bold">Location Name:</p>
          <input name="name" onChange={handleFormChange} type='text' placeholder='Name'/>
        </div>
        <div className="w-full">
          <p className="text-white font-bold">Location Address:</p>
          <input name="address" onChange={handleFormChange} type='text' placeholder='Address'/>
        </div>
        
      <div className="flex justify-around w-full">
        <button onClick={() => handleSavePoi()} className="bg-gray-50 rounded p-1 m-1">Save Location</button>
      </div>
        
      </div>
      </div>
      
      </div>
    )}
    </>
  )
};

export default MarkedLocations;