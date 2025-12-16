import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import VideoPlayer from './components/VideoPlayer.jsx';
import ServicesHero from './components/ServicesHero.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import DiagSlides from './components/DiagSlides.jsx';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio.jsx';
import Clients from './components/Clients.jsx';
import Footer from './components/Footer.jsx';
import useScrollReveal from './hooks/useScrollReveal.js';


function App() {
  const [loading, setLoading] = useState(true);
  useScrollReveal(!loading);

  useEffect(() => {
    // Hide loader after 2s (mimic original)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader centered--vertical">
        <div className="logo-wrap">
          <div className="text" style={{ display: 'none' }}>SP Branding</div>
        </div>
      </div>
    );
  }

  return (
    <div className="App home" id="body" data-barba="wrapper">
      <div id="page">
        <Header />
        <div id="smooth-wrap">
          <div id="smooth-content">
            <main>
              <div data-reveal="fade-up"><Hero /></div>
              <div data-reveal="fade-up" data-delay="150"><About /></div>
              {/* <div data-reveal="fade-up" data-delay="200"><VideoPlayer /></div> */}
              <div data-reveal="fade-up" data-delay="250"><ServicesHero /></div>
              <div data-reveal="fade-up" data-delay="200"><WhyChooseUs /></div>
              <div data-reveal="fade-up" data-delay="350"><DiagSlides /></div>
              <div data-reveal="fade-up" data-delay="400"><Services /></div>
              <div data-reveal="fade-up" data-delay="450"><Portfolio /></div>
              <div data-reveal="fade-up" data-delay="500"><Clients /></div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;