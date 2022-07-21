import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../../utils/auth";
import { DasboardContext } from "../../../pages/Dashboard";

function DasboardNav() {
  const [navState, setNavState] = useState('guides'); 
  const { dash, setDash } = useContext(DasboardContext);
  function handleNavClick(value) {
    switch(value) {
      case 'guides':
        setDash('guides');
        return;
      case 'messages':
        setDash('messages');
        return;
      case 'account':
        setDash('account');
        return;
    }
  }

  const handleLogout = () => {
    auth.logout();
  }

  return (
    <nav className="w-full bg-cyan-900 p-5 flex flex-wrap justify-between border-b-8 border-cyan-200"> 
    <div className="flex flex-wrap"> 
      <Link to="/dashboard" className="text-3xl">🏕️</Link>
      <div className="font-bold text-white">
        <button className="p-2 px-3 mx-5 bg-cyan-500 rounded-full" onClick={() => handleNavClick('guides')}>Guides</button>
        <button className="p-2 px-3 mx-5 bg-cyan-500 rounded-full"  onClick={() => handleNavClick('messages')}>Messages</button>
        <button className="p-2 px-3 mx-5 bg-cyan-500 rounded-full"  onClick={() => handleNavClick('account')}>Account</button>
      </div>
    </div>

    <div>
      <button onClick={handleLogout} className="font-bold text-white p-2 mx-5">Log Out</button>
    </div>
    </nav>
  );
}

export default DasboardNav;