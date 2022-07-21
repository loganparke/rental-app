import React, { useState } from "react";
import Subscription from "./subscription";
import Notifications from "./notification";
import Settings from "./settings";
import cabinIcon from '../../../assets/cabinIcon.png'

import { useStoreContext } from '../../../utils/GlobalState';

function Account() {
  const [state, dispatch] = useStoreContext();

  const [accountNav, setAccountNav] = useState('subscription');

  const handleAccountNav = (section) => {
    switch (section) {
      case 'subscription':
        setAccountNav('subscription');
        break;
      case 'notifications':
        setAccountNav('notifications');
        break;
      case 'settings':
        setAccountNav('settings');
        break;  
      default:
        break;
    }
  }

  const displayAccountSection = () => {
    switch (accountNav) {
      case 'subscription':
        return <Subscription />;
      case 'notifications':
        return <Notifications />;
      case 'settings':
        return <Settings />;
      default:
        break;
    }
  }

return (
  <div id="profile-top" className="pt-5 bg-white" >
    <div className="flex flex-wrap mt-5 w-5/6 m-auto">
          <img className="w-1/4" src={cabinIcon} />
    <div className="flex flex-wrap w-3/4 justify-between">
      <div className="flex flex-wrap w-full justify-between">
        <h1 className="pl-5">{state?.user?.username}</h1>
        <button className="bg-gray-100 rounded-full h-10 px-4">Edit Profile</button>
      </div>
      <div className="w-full flex">
        <div className="w-1/2">
          <p>guest Contact phone:</p>
          <p>{state?.user?.phone}</p>
        </div>
        <div className="w-1/2">
          <p >guest contact email:</p>
          <p>{state?.user?.email}</p>
        </div>
        
      </div>
    </div>
    </div>

    <nav id="profile-nav" className="w-full flex flex-wrap justify-around mt-4 bg-gray-50 p-5 font-semibold">
      <button onClick={() => handleAccountNav('subscription')}>Subscription</button>
      <button onClick={() => handleAccountNav('notifications')}>Notifications</button>
      <button onClick={() => handleAccountNav('settings')}>Settings</button>
    </nav>

    {displayAccountSection()}
  </div>
)
};

export default Account;