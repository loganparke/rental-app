import React, { useState } from 'react';
import DasboardNav from '../components/dashboard/dashboardNav';
import Guides from "../components/dashboard/guides";
import Content from '../components/dashboard/content';
import Messages from '../components/dashboard/messages';
import Account from '../components/dashboard/account';

export const DasboardContext = React.createContext();

function Dashboard() {
  //dashboardContext state variable
  const [dash, setDash] = useState('guides');

  function returnDashboardComponent() {
      switch(dash) {
    case 'guides':
      return (
        <Guides />
      );
    case 'content':
      return (
        <Content />
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