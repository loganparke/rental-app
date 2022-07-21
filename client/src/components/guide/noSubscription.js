import React from "react";
import cabinIcon from '../../assets/cabinIcon.png'


const NoSubscrption = () => {

  return( <div className="w-screen h-screen grid content-center p-5">
    <h1 className="text-xl my-5">We are sorry, but this guide has been deactivatied or the subscription has expired.</h1>
    <p>Please reach out to your host for more info</p>
    <img src={cabinIcon} alt='logo' className="w-2/3 m-auto mt-16"/>
  </div>)
}

export default NoSubscrption;