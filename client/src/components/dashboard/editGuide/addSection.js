import React from "react";

const AddSection = ({setActiveAddSection}) => {

  return(
    <div>
      <div className="bg-green-400 w-2/3 m-auto my-24 p-5 rounded-xl">
        <div className="flex justify-between">
          <p> </p>
          <p>modal</p>
          <button onClick={() => setActiveAddSection(false)}>X</button>
        </div>
        <div className="flex flex-wrap">
          <label className="w-full mt-2"> Title:
            <input name="title" placeholder="Title" />
          </label>
          <label className="w-full mt-2"> Description:
            <input name="description" placeholder="Description" />
          </label>
        </div>
        <button className="bg-slate-300 m-2 p-2 rounded-full">Save Section</button>
      </div>
    </div>
  )
};

export default AddSection;