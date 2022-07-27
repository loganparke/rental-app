import React, { useState } from "react";
import { useStoreContext } from "../../../utils/GlobalState";
import cabinIcon from '../../../assets/cabinIcon.png';
import emailIcon from '../../../assets/email.png';

function GuideHome() {
  const [state] = useStoreContext();

  return(
      <div className="guideHome h-full w-full top-0 left-0 fixed">
        <div className="guideHomebg h-full w-full">
          <img className="object-none h-full" src={state?.guide?.photo} />
        </div>
      <div className="guideHomeFront flex flex-col justify-around h-screen pb-10">
        <div className="w-5/6 mx-auto rounded">
          <img className="w-1/3 m-auto mb-3" src={cabinIcon} alt='logo' />
          <h1 className="text-black font-bold text-2xl">Welcome to </h1>
          <strong className="text-3xl">{state?.guide?.name}</strong>

          <div className="flex justify-around my-3"> 
            <div className="flex border-b-2">
              <a href={'tel:' + state?.guide?.contactPhone} className="text-6xl pr-2">✆</a>
              <a href={'mailto:' + state?.user?.email}>
              <img className="w-14 h-14 my-2 ml-2" src={emailIcon} alt="phone" />
              </a>
            </div>
          </div>
          <div className="flex justify-around">
            <p className="w-2/3">{state?.guide?.address}</p>
          </div>
        </div>
        
      </div>
      </div>

  )
}

export default GuideHome;