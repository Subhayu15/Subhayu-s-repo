import React from 'react';
import './App.css'; // Importing your main CSS file
import Navbar from './components/Navbar';
import Home from './components/Home';
import Overview from './components/Overview';
import Data from './components/Data';
import Model from './components/Model';
import Results from './components/Results';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import react-router-dom

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Navbar will be fixed or persistent across all routes */}
        <div className="main-content"> {/* Container for main content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/data" element={<Data />} />
            <Route path="/model" element={<Model />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/results" element={<Results />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

