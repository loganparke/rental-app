import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_CLIENT_USER, QUERY_GUIDE } from '../utils/queries';
import { SET_USER, SET_GUIDE } from '../utils/actions';
import NoSubscrption from '../components/guide/noSubscription';
import GuideNav from '../components/guide/guideNav';
import GuideHome from '../components/guide/guideHome';
import GuideInfo from '../components/guide/guideInfo';
import GuideMap from '../components/guide/guideMap';

import { useStoreContext } from '../utils/GlobalState';

export const GuideContext = React.createContext();

function Guide() {
  const [state, dispatch] = useStoreContext();
  const { userId, guideId } = useParams();

  //query user to check if subsription is active
  const { loading: loadingUser, data: dataUser } = useQuery(QUERY_CLIENT_USER, {
    variables: {
      userId: userId
    }
  });

  const { loading: loadingGuide, data: dataGuide } = useQuery(QUERY_GUIDE, {
    variables: {
      guideId: guideId
    }
  });

  useEffect(() => {
    if (dataUser) {
      dispatch({
        type: SET_USER,
        user: dataUser.clientUser,
      });
    }
  }, [dataUser, loadingUser, dispatch]);

  useEffect(() => {
    if (dataGuide) {
      dispatch({
        type: SET_GUIDE,
        guide: dataGuide.guide,
      });
    }
  }, [dataGuide, loadingGuide, dispatch]);
  
  const [guideComponent, setGuideComponent] = useState('guideHome');

  //console.log(state.user.subscriptionStatus)
  const checkSubscrption = () => {
    if(!state?.user?.subscriptionStatus){
      console.log('no subscriptions');
      return ( <NoSubscrption /> )
    }
  }
  

  function returnGuideComponent() {
    switch(guideComponent) {
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
  {/* change string to false */}
  {state?.user?.subscriptionStatus === 'fals' ? (
    <NoSubscrption />
  ) : (
    <GuideContext.Provider value={{ guideComponent, setGuideComponent }}>
    <div className='h-screen'>
        {returnGuideComponent()}
        <GuideNav />
    </div>

  </GuideContext.Provider>
  )}
  
  </>
)
};

export default Guide;