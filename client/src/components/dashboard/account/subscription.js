import React from "react";

function Subscription() {

  return(
    <div className="bg-gray-100 m-auto py-5">
    <div className="bg-white m-auto rounded-xl w-5/6 mt-5">
      <div className="flex justify-between border-b-2 font-bold">
        <h2 className="font-bold text-lg m-3">Current Subscription:</h2>
        <div>
          <button className="m-3 bg-gray-200 p-2 px-3 rounded-full">Contact Support</button>
          <button className="m-3 text-white bg-cyan-400 p-2 px-3 rounded-full">Upgrade Subscription</button>
        </div>
        
      </div>
      <div className="flex flex-wrap m-5">
        <div className="w-full flex py-2">
          <p className=""><span className="font-semibold">Properties/Guides: </span> 1</p>
          <p>price</p>
        </div>

        <p className="mb-5 px-3">Started: startDate</p>
        <p className="mb-5 px-3">Ends: endDate</p>
        <p className="mb-5 px-3">Next Payment: </p>
      </div>
    </div>
    <button className=" my-4 p-3 rounded-full bg-cyan-400 text-white font-bold">Open Payment Portal</button>
    </div>
  );
};

export default Subscription;