import React from 'react';
import './Clients.css';

const Clients = () => {
  // Array of professional business logos (using placeholder images from a CDN)
  const clientLogos = [
    // Business & Consulting
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopware/shopware-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sap/sap-original.svg',
    
    // Technology & Software
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/atlassian/atlassian-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg',
    
    // Creative & Design
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adobe/adobe-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg',
    
    // Enterprise Solutions
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg',
    
    // E-commerce & Services
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg'
  ];

  return (
    <section className="clients-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Valued Clients</h2>
          <div className="divider"></div>
          <p className="subtitle">
            इनसे है हमारा <span className="highlight">गठबंधन</span>
          </p>
          <p className="description">
            Trust, dedication, and excellence are the cornerstones of every relationship we build. 
            It's not just about delivering results—it's about creating partnerships that thrive on 
            mutual respect and shared success.
          </p>
        </div>
        
        <div className="clients-grid">
          {clientLogos.map((logo, index) => (
            <div key={index} className="client-logo-container">
              <img 
                src={logo} 
                alt={`Client ${index + 1}`} 
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