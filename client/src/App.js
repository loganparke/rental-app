import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import LoginSignup from './pages/login';
import Guide from './pages/guide';
import Footer from './components/footer';
import GuideInsights from './components/dashboard/guideInsights/guideInsights';
import EditGuide from './components/dashboard/editGuide/editGuide';
import AddGuide from './components/dashboard/addGuide/addGuide';

function App() {
return (
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
);
}

export default App;
