import React from 'react';
import AboutAnimation from './AboutAnimation';

const About = () => {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      backgroundColor: '#0a0a14',
      padding: '80px 5%',
      color: 'white'
    }}>
      {/* Background Animation */}
      <AboutAnimation />
      
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '4rem'
      }}>
        {/* Left Column - Text Content */}
        <div style={{
          flex: '1 1 45%',
          minWidth: '300px',
          opacity: 0,
          animation: 'fadeInUp 1s ease-out 0.3s forwards'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 700,
            marginBottom: '1.5rem',
            color: 'white',
            position: 'relative',
            display: 'inline-block'
          }}>
            About Us
            <span style={{
              position: 'absolute',
              bottom: '-10px',
              left: 0,
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #4f8fff, #8a2be2)',
              borderRadius: '3px'
            }}></span>
          </h2>
          
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 800,
            margin: '1.5rem 0',
            lineHeight: 1.3,
            opacity: 0,
            animation: 'fadeInUp 1s ease-out 0.4s forwards'
          }}>
            चलो <span style={{
              background: 'linear-gradient(90deg, #4f8fff, #8a2be2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
              whiteSpace: 'nowrap'
            }}>शुरू</span> से समझाते हैं
          </h2>
          
          <p style={{
            fontSize: 'clamp(1rem, 1.4vw, 1.1rem)',
            lineHeight: 1.8,
            color: 'rgba(255, 255, 255, 0.9)',
            margin: '2rem 0',
            opacity: 0,
            animation: 'fadeInUp 1s ease-out 0.5s forwards'
          }}>
            We are a dynamic advertising & marketing agency started in 2012 by Mr. Nishant Darji based in Gandhinagar and Ahmedabad, renowned for crafting innovative branding solutions. Recognized as the No.1 real estate branding company, we specialize in groundbreaking outdoor campaigns and advanced digital marketing strategies.
          </p>
        </div>
        
        {/* Right Column - Cards */}
        <div style={{
          flex: '1 1 45%',
          minWidth: '300px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          opacity: 0,
          animation: 'fadeInUp 1s ease-out 0.6s forwards'
        }}>
          {[
            { 
              title: 'Our Mission', 
              desc: 'Deliver exceptional branding solutions that drive real business growth through creativity and innovation.',
              icon: '🎯' 
            },
            { 
              title: 'Our Vision', 
              desc: 'To be the most trusted partner for businesses seeking transformative branding and marketing solutions.',
              icon: '✨' 
            },
            { 
              title: 'Our Values', 
              desc: 'Creativity, Innovation, Integrity, and Excellence are at the core of everything we do.',
              icon: '💎' 
            }
          ].map((item, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '16px',
              padding: '2rem',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.07)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: 'translateY(20px)',
              opacity: 0,
              animation: `fadeInUp 0.6s ease-out ${0.7 + (index * 0.1)}s forwards`,
              ':hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 15px 40px rgba(79, 143, 255, 0.15)',
                background: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(79, 143, 255, 0.3)'
              },
              '@media (max-width: 768px)': {
                padding: '1.5rem',
                marginBottom: '1rem'
              }
            }}>
              <div style={{
                fontSize: '2.2rem',
                marginBottom: '1.2rem',
                display: 'inline-block',
                background: 'linear-gradient(135deg, #4f8fff, #8a2be2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontSize: '1.4rem',
                margin: '0.5rem 0 1rem',
                color: 'white',
                fontWeight: 700,
                lineHeight: 1.3
              }}>
                {item.title}
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.75)',
                lineHeight: 1.7,
                margin: 0,
                fontSize: '0.95rem'
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 1024px) {
          section {
            padding: 60px 5% !important;
          }
          
          div[style*="flex: 1 1 45%"] {
            flex: 1 1 100% !important;
            margin-bottom: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          section {
            padding: 40px 5% !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }
          
          p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;