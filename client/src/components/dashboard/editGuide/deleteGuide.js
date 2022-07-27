import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_GUIDE } from '../../../utils/mutations';

const DeleteGuide = () => {
  const { guideId } = useParams();

    //delete guide functionality
    const [deleteActive, setDeleteActive] = useState('false');
    const [deleteGuide] = useMutation(DELETE_GUIDE);
    
  
    const handleDeleteGuide = async () => {
      console.log('hi')
      const updatedUser = await deleteGuide({
        variables: {
          guideId: guideId
        }
      });
      window.location.replace('/dashboard');
    };

  return (
  <>
    <div className="bg-white m-5 rounded-lg shadow">
        <button className="bg-red-600 p-2 m-3 rounded-md text-white font-bold" onClick={() => setDeleteActive('true')}>DELETE GUIDE</button>
      </div>
      {deleteActive === 'true' && (
        <div className="absolute top-0 left-0 w-screen h-screen z-40">
          <div className="w-full h-full bg-gray-700 opacity-60"> </div>
          <div className="bg-white rounded-lg absolute top-1/2 left-1/4 flex flex-wrap w-1/2 m-auto">
            <h1 className="w-full text-center text-lg font-bold mt-5">WARNING</h1> 
            <p className="p-5">This action is permanent and irreversable, if you want to remake this guide you will have to start from scratch.  Do you wish to continue?</p>
            <div className="w-full flex justify-around m-3"> 
              <button onClick={() => setDeleteActive('false')} className="shadow-md bg-gray-200 text-black font-bold rounded-md p-2 mb-3">Cancel</button>
            <button onClick={() => handleDeleteGuide()} className="shadow-lg bg-red-600 text-white font-bold rounded-md p-2 mb-3">DELETE GUIDE</button>
            </div>
            
          </div>
          
        </div>
      )}
    </>
  )
};

export default DeleteGuide;