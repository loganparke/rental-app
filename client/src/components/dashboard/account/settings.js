import React from "react";
import { useStoreContext } from '../../../utils/GlobalState';

function Settings() {

  const [state, dispatch] = useStoreContext();
  console.log(state);

  return(
    <div className="bg-gray-100">
      <div className="w-5/6 m-auto pb-5">
        <h3>Account Details</h3>
        <div className="flex justify-between bg-white rounded-lg p-5">
          <p className="bg-white font-bold p-2">Change Login Info:</p>
          <div>
            <button className="bg-cyan-400 text-white font-bold p-2 rounded mx-3">
              Change Login Email
            </button>
            <button className="bg-cyan-700 text-white font-bold p-2 rounded">
              Change Login Password
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
};
export default Settings;