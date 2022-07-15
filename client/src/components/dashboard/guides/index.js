import React, { useState } from "react";
import GuidesPreview from "./guidesPreview";
import AddGuide from "../addGuide/addGuide";

function Guides() {

  const [addGuide, setAddGuide] = useState(false);

  function handleClick() {
    if(addGuide === false) {
      setAddGuide(true);
      return;
    }
    setAddGuide(false);
    return;
  }

  // "/dashboard/addGuide"

return (
  <div className="text-3lx font-bold bg-gray-100">

      <>
      <div className="flex flex-wrap justify-between p-5 bg-white">
        <h1 className="text-4xl">All Guides</h1>
        <a href="/dashboard/addGuide" className="bg-cyan-400 rounded-full p-2 px-3 text-white">+ Add Guide</a>
      </div>
      <div>
        <div>
          <p># of Guides</p>
          <GuidesPreview />

        </div>
      </div>
      </>

  
  </div>
)
};

export default Guides;