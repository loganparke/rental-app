import React, { useState, useEffect } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import DasboardNav from '../components/dashboard/dashboardNav';
import Guides from "../components/dashboard/guides";
import Messages from '../components/dashboard/messages';
import Account from '../components/dashboard/account';

import auth from '../utils/auth';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from "../utils/queries";
import { SET_USER } from '../utils/actions';

export const DasboardContext = React.createContext();

function Dashboard() {

  //dashboardContext state variable
  const [dash, setDash] = useState('guides');

  //setting global state with useStoreContext and useEffect
  const [state, dispatch] = useStoreContext();

  const { loading, data } = useQuery(QUERY_USER);

  useEffect(() => {
    if (data) {
      dispatch({
        type: SET_USER,
        user: data.user,
      });
    }
  }, [data, loading, dispatch]);

  function returnDashboardComponent() {
      switch(dash) {
    case 'guides':
      return (
        <Guides />
      );
    case 'messages':
      return (
          <Messages />
      );
    case 'account':
      return (
          <Account />
      );
  }
  }

return (
  <>
    <DasboardContext.Provider value={{ dash, setDash }}>
      <DasboardNav />
      {returnDashboardComponent()}
    </DasboardContext.Provider>
  </>    
  )
};

export default Dashboard;