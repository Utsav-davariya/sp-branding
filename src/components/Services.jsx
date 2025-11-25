import React, { useState, useEffect } from 'react';

const Services = () => {
  const texts = ["Advertising", "Branding", "Marketing"];
  const emojis = ["🎯", "✨", "🚀"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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

  return (
    <section className="careers_perks">
      <div className="spacer-xxhuge"></div>
      <div className="padding-global">
        <div className="container-max">
          <div className="careers_title">
            <h2 className="careers_title_heading">Services</h2>
            <div className="h_line_white_30"></div>
          </div>
          <div className="spacer-xxlarge"></div>
          <h2 className="title-2"> हमारी <span className="colorful-gradient">3 PhD</span> </h2>
          <div className="spacer-xxlarge"></div>
          <div className="dynamic-text-wrapper">
            <h2
              id="dynamicContent"
              className={`dynamic-text ${isAnimating ? 'is-animating' : ''}`}
              style={{ opacity: isAnimating ? 0 : 1, transform: isAnimating ? 'translateY(100%)' : 'translateY(0)' }}
            >
              {texts[currentIndex]} <span className="emoji" aria-hidden="true">{emojis[currentIndex]}</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;