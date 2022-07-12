import React, { useContext, useRef } from "react";
import { GuideContext } from "../../../pages/guide";

function GuideNav() {

  const { guideComp, setGuideComp } = useContext(GuideContext);
  const home = useRef();
  const guide = useRef();
  const map = useRef();

  function handleNavClick(value) {
    switch(value) {
      case 'guideHome':
        guide.current.classList.remove('active');
        map.current.classList.remove('active');
        home.current.classList.add('active');
        setGuideComp('guideHome');
        return;
      case 'guideInfo':
        guide.current.classList.add('active');
        map.current.classList.remove('active');
        home.current.classList.remove('active');
        setGuideComp('guideInfo');
        return;
      case 'guideMap':
        guide.current.classList.remove('active');
        map.current.classList.add('active');
        home.current.classList.remove('active');
        setGuideComp('guideMap');
        return;
    }
  }

  return(
    <div className='fixed
    inset-x-0
    bottom-0'>
      <div className="navigation fixed  bottom-0"> 
        <ul>
            <li className="list active" ref={home}>
              <button onClick={() => handleNavClick('guideHome')}>
                <span className="icon">H</span>
                <span className="text">Home</span>
              </button>
            </li>
            <div className='bg-gray-200 mt-3 w-0.5 h-12'></div>
            <li className="list" ref={guide}>
              <button  onClick={() => handleNavClick('guideInfo')}>
                <span className="icon">G</span>
                <span className="text">GUIDE</span>
              </button>
            </li>
            <div className='bg-gray-200 mt-3 w-0.5 h-12'></div>
            <li className="list" ref={map}>
              <button onClick={() => handleNavClick('guideMap')}>
                <span className="icon">M</span>
                <span className="text">MAP</span>
              </button>
            </li>
            <div className='bg-gray-200 mt-3 w-0.5 h-12'></div>
            <li className="list" >
              <button >
                <span className="icon">S</span>
                <span className="text">Settings</span>
              </button>
            </li>
            <div className="indicator" id="indicator"></div>
        </ul>
      </div>
    </div>
  )
}

export default GuideNav;