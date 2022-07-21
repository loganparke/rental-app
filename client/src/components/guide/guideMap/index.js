import React, { useState } from "react";

function GuideMap() {

  return(
    <div className="w-screen h-5/6">
    <div className="w-full h-full">
      
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.991574283802!2d-111.94963348429894!3d41.309046908810515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87530b63492a5b9b%3A0x864c738889ba5c70!2s2700%20N%201050%20E%2C%20North%20Ogden%2C%20UT%2084414!5e0!3m2!1sen!2sus!4v1642448367447!5m2!1sen!2sus"
      className="w-full h-full" 
      loading="lazy">
      </iframe>
    </div>
    </div>
  )
}

export default GuideMap;