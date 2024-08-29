import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <header id="home" className="home-section">
      <div className="hero">
        <h1 className="hero-title">Smart Resource Conservation</h1>
        <p className="hero-subtitle">AI-Powered Solutions for Optimizing Energy and Water Usage in Home Appliances</p>
        <button className="cta-button">Learn More</button>
      </div>
      <div className="overview-intro">
        <h2>About the Project</h2>
        <p>This project leverages machine learning to monitor, analyze, and optimize the usage of resources in various home appliances. Our aim is to create a smarter, more sustainable future by reducing waste and improving efficiency.</p>
      </div>
    </header>
  );
};

export default Home;

