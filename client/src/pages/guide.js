import React, { useState } from 'react';
import GuideNav from '../components/guide/guideNav';
import GuideHome from '../components/guide/guideHome';
import GuideInfo from '../components/guide/guideInfo';
import GuideMap from '../components/guide/guideMap';

export const GuideContext = React.createContext();

function Guide() {
  
  const [guideComp, setGuideComp] = useState('guideHome')

  function returnGuideComponent() {
    switch(guideComp) {
      case 'guideHome':
        return (
          <GuideHome />
        );
      case 'guideInfo':
        return (
          <GuideInfo />
        );
      case 'guideMap':
        return (
            <GuideMap />
        );
    }
  };


return (
  <>
  <GuideContext.Provider value={{ guideComp, setGuideComp }}>
    {returnGuideComponent()}
    <GuideNav />
  </GuideContext.Provider>
  </>
)
};

export default Guide;