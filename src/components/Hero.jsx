import React, { useEffect, useRef } from 'react';
import useHeroScene from '../hooks/useHeroScene.js';

const Hero = () => {
  const titleRef = useRef(null);
  const scrollRef = useRef(null);
  const canvasRef = useRef(null);
  const heroWrapRef = useRef(null);

  useHeroScene(canvasRef);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.visibility = 'visible';
      titleRef.current.style.opacity = '1';
      titleRef.current.classList.add('is-revealed');
    }
    if (scrollRef.current) {
      const timeout = setTimeout(() => {
        scrollRef.current.style.opacity = '1';
        scrollRef.current.classList.add('is-revealed');
      }, 350);
      return () => clearTimeout(timeout);
    }
    return undefined;
  }, []);

  useEffect(() => {
    const node = heroWrapRef.current;
    if (!node) return undefined;

    const handleScroll = () => {
      const progress = Math.min(window.scrollY / (window.innerHeight * 0.9), 1.25);
      const scale = 0.95 + progress * 0.45;
      const opacity = Math.max(0.35, 1 - progress * 0.55);
      node.style.setProperty('--hero-scale', scale.toFixed(3));
      node.style.opacity = opacity.toFixed(3);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div ref={heroWrapRef} className="hero-wrap" aria-hidden="true">
        <div ref={canvasRef} className="hero-canvas"></div>
      </div>
      <section className="sec-wrap heroScene">
        <div className="sec-wrap__inner centered--vertical">
          <div className="centered-text title-wrap">
            <span ref={titleRef} id="main-title" className="main-title h1 fsize--h1__large" style={{ visibility: 'hidden' }}>
              WE ARE NOT COMMON <br />WE ARE CREATIVE
            </span>
            <div ref={scrollRef} className="scroll-down" style={{ opacity: 0 }}>
              <div className="dot"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;