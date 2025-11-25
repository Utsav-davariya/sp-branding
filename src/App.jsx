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
          <div className="text" style={{ display: 'none' }}>SAI Branding</div>
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
              <section data-reveal="fade-up"><Hero /></section>
              <section data-reveal="fade-up" data-delay="150"><About /></section>
              <section data-reveal="fade-up" data-delay="200"><VideoPlayer /></section>
              <section data-reveal="fade-up" data-delay="250"><ServicesHero /></section>
              <section data-reveal="fade-up" data-delay="300"><WhyChooseUs /></section>
              <section data-reveal="fade-up" data-delay="200"><DiagSlides /></section>
              <section data-reveal="fade-up" data-delay="250"><Services /></section>
              <section data-reveal="fade-up" data-delay="300"><Portfolio /></section>
              <section data-reveal="fade-up" data-delay="350"><Clients /></section>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;