import React from "react";
import { Link } from "react-router-dom";
function Nav() {

  return (
    <>
        <nav className='w-full bg-gray-300 flex flex-wrap justify-between p-4'>
        <Link to="/">Cabin App 🏕️</Link>
        <Link to="/login">Login</Link>
        </nav>
        
      
    </>
  );
}

export default Nav;