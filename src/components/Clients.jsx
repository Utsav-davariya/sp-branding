import React from 'react';
import './Clients.css';

// Import all logo images from the assets/logo_image directory
import img1 from '../assets/logo_image/1.jpg';
import img13 from '../assets/logo_image/13.jpg';
import img14 from '../assets/logo_image/14.jpg';
import img18 from '../assets/logo_image/18.jpg';
import img19 from '../assets/logo_image/19.jpg';
import img23 from '../assets/logo_image/23.jpg';
import img24 from '../assets/logo_image/24.jpg';
import img28 from '../assets/logo_image/28.jpg';
import img30 from '../assets/logo_image/30.jpg';
import img34 from '../assets/logo_image/34.jpg';
import img40 from '../assets/logo_image/40.jpg';
import img45 from '../assets/logo_image/45.jpg';
import img46 from '../assets/logo_image/46.jpg';
import img47 from '../assets/logo_image/47.jpg';
import img49 from '../assets/logo_image/49.jpg';
import img51 from '../assets/logo_image/51.jpg';
import img52 from '../assets/logo_image/52.jpg';
import img55 from '../assets/logo_image/55.jpg';
import img58 from '../assets/logo_image/58.jpg';
import img59 from '../assets/logo_image/59.jpg';
import img6 from '../assets/logo_image/6.jpg';
import img60 from '../assets/logo_image/60.jpg';
import img61 from '../assets/logo_image/61.jpg';
import img63 from '../assets/logo_image/63.jpg';
import img64 from '../assets/logo_image/64.jpg';
import img8 from '../assets/logo_image/8.jpg';

const logoImages = [
  img1, img13, img14, img18, img19, img23, img24, img28, img30, img34,
  img40, img45, img46, img47, img49, img51, img52, img55, img58, img59,
  img6, img60, img61, img63, img64, img8
];

const Clients = () => {
  return (
    <section className="clients-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Work Showcase</h2>
          <div className="divider"></div>
          <p className="subtitle">
            Explore Our <span className="highlight">Portfolio</span>
          </p>
          <p className="description">
            A collection of our finest work, showcasing our expertise and dedication to excellence. 
            Each project represents a unique challenge we've successfully tackled with innovative 
            solutions and creative thinking.
          </p>
        </div>
        
        <div className="clients-grid">
          {logoImages.map((logo, index) => (
            <div key={index} className="client-logo-container">
              <img 
                src={logo} 
                alt={`Client Logo ${index + 1}`} 
                className="client-logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;