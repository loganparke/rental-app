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
    <div className="App bg-gray-100  min-h-screen">
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/Dashboard" 
            element={<Dashboard />} 
          />
          <Route 
            path="/login" 
            element={<LoginSignup />} 
          />
          <Route 
            path="/guideId/guide" 
            element={<Guide />} 
          />
          <Route
            path="/guideId/insights"
            element={<GuideInsights />}
          />
          <Route
            path="/guideId/edit"
            element={<EditGuide />}
          />
          <Route
            path="/dashboard/addGuide"
            element={<AddGuide />}
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
