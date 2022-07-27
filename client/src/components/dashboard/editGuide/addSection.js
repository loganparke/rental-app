import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_CATEGORY } from "../../../utils/mutations";

const AddSection = ({setActiveAddSection, guideId}) => {
  //console.log(guideId)

  const [formState, setFormState] = useState();

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  console.log(formState);

  const [addCategory] = useMutation(ADD_CATEGORY);
  const saveSection = async(event) => {
    const id = guideId;
    try{
      const addCategoryResponse = await addCategory({
        variables: {
          name: formState.title,
          description: formState.description,
          guideId: id
        }
      });
      setActiveAddSection(false);
    } catch (e){
      console.log(e);
    }
    
  }

  return(
    <div className="absolute w-screen h-screen m-auto top-0 left-0 z-30 text-white">
      <div className="bg-gray-600 opacity-30 w-full h-full z-20"></div>
      <div className="w-full absolute top-0 left-0 z-40">
        <div className=" bg-cyan-600 w-2/3 m-auto my-24 p-5 rounded-xl">
        <div className="flex justify-between">
          <p> </p>
          <p className="font-bold text-xl">Add A Section</p>
          <button onClick={() => setActiveAddSection(false)}>X</button>
        </div>
        <div className="flex flex-wrap">
          <label className="w-full mt-8 flex"> <p className="w-1/3">Title:</p>
            <input name="title" onChange={handleFormChange}  placeholder="Title" className="mx-2 rounded border-2 border-gray-400 w-2/3 text-black"/>
          </label>
          <label className="w-full mt-3 flex"><p className="w-1/3">Description:</p> 
            <textarea name="description" onChange={handleFormChange} placeholder="Description" className="text-black mx-2 rounded border-2 border-gray-400 w-2/3"/>
          </label>
        </div>
        <button className="bg-stone-500 m-2 mt-4 p-2 rounded-md" onClick={saveSection}>Save Section</button>
      </div>
      </div>
      
    </div>
  )
};

export default AddSection;