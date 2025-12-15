import React, { useState, useEffect } from 'react';
import './Services.css';

const Services = () => {
  const texts = ["Advertising", "Branding", "Marketing"];
  const emojis = ["🎯", "✨", "🚀"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 600);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  useEffect(() => {
    // Trigger animation when component mounts
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Advertising",
      icon: "🎯",
      description: "Transform your brand's visibility with our cutting-edge advertising solutions that drive engagement and conversions.",
      features: [
        "Digital & Social Media Campaigns",
        "Search Engine Marketing (SEM)",
        "Display & Video Advertising",
        "Influencer Marketing",
        "Performance Analytics & Optimization"
      ]
    },
    {
      title: "Branding",
      icon: "✨",
      description: "Craft a powerful brand identity that resonates with your audience and stands out in the market.",
      features: [
        "Logo & Visual Identity",
        "Brand Strategy & Positioning",
        "Brand Guidelines",
        "Brand Voice & Messaging",
        "Brand Experience Design"
      ]
    },
    {
      title: "Marketing",
      icon: "🚀",
      description: "Data-driven marketing strategies that deliver measurable results and accelerate business growth.",
      features: [
        "Content Marketing",
        "Social Media Strategy",
        "Email Marketing",
        "Marketing Automation",
        "ROI Tracking & Analysis"
      ]
    }
  ];

  return (
    <section className={`services-section ${isVisible ? 'visible' : ''}`}>
      <div className="container-max">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <div className="divider"></div>
          <div className="dynamic-text-wrapper">
            <h2
              className={`dynamic-text ${isAnimating ? 'is-animating' : ''}`}
              style={{ opacity: isAnimating ? 0 : 1 }}
            >
              {texts[currentIndex]} <span className="emoji">{emojis[currentIndex]}</span>
            </h2>
          </div>
          <p className="section-subtitle">Professional, Premium & Performance Driven Solutions</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: isVisible ? 1 : 0
              }}
            >
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <span className="feature-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              {/* <div className="service-cta">
                <button className="learn-more-btn">Learn More</button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;