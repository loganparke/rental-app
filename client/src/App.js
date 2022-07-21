import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from "./utils/GlobalState";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LoginSignup from './pages/login';
import Guide from './pages/guide';
import Footer from './components/footer';
import GuideInsights from './components/dashboard/guideInsights/guideInsights';
import EditGuide from './components/dashboard/editGuide/editGuide';
import AddGuide from './components/dashboard/addGuide/addGuide';
import AddSubscription from './pages/addSubscription';

import Protected from './utils/Protected';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
return (
  <ApolloProvider client={client}>
  <StoreProvider>
    <div className="App bg-gray-100">
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/login" 
            element={<LoginSignup />} 
          />
          <Route 
            path="/user/:userId/guide/:guideId" 
            element={<Guide />} 
          />
          
            <Route 
              path="/Dashboard" 
              element={
                <Protected>
                  <Dashboard />
                </Protected>
              } 
            />
            <Route
              path="/guideId/insights"
              element={
                <Protected>
                  <GuideInsights />
                </Protected>}
            />
            <Route
              path="/dashboard/guide/edit/:guideId"
              element={
                <Protected>
                  <EditGuide />
                </Protected>}
            />
            <Route
              path="/dashboard/addGuide"
              element={
                <Protected>
                  <AddGuide />
                </Protected>}
            />
            <Route
              path="/dashboard/addSubscription"
              element={
                <Protected>
                  <AddSubscription />
                </Protected>}
            />
        </Routes>
      </Router>
      <Footer/>
    </div>
  </StoreProvider>
  </ApolloProvider>
);
}

export default App;
