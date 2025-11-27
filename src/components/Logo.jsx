import React, { useEffect } from 'react';

// Load Google Fonts
const loadFonts = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@700;800&family=Montserrat:wght@600;700&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

const Logo = ({ size = 44, withTagline = true }) => {
  useEffect(() => {
    loadFonts();
  }, []);
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      lineHeight: 1,
      cursor: 'default',
      position: 'relative',
      zIndex: 1,
      padding: '4px',
      borderRadius: '16px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: withTagline ? '6px' : '0',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Animated Logo Symbol */}
        <div style={{
          position: 'relative',
          width: `${size}px`,
          height: `${size}px`,
          background: 'linear-gradient(135deg, #4f8fff 0%, #8a2be2 100%)',
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(79, 143, 255, 0.3)',
          overflow: 'hidden',
          transform: 'translateZ(0)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          {/* Animated Background */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
            animation: 'shine 4s infinite',
            zIndex: 1
          }} />
          
          {/* Main Icon */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            transform: 'translateZ(0)',
            transition: 'transform 0.3s ease'
          }}>
            <svg 
              width={size * 0.52} 
              height={size * 0.52} 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))',
                transform: 'rotate(5deg)'
              }}
            >
              <path 
                d="M12 2L3 7V17L12 22L21 17V7L12 2Z" 
                fill="url(#logo-gradient)" 
                stroke="url(#logo-gradient-stroke)" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M12 22V12" 
                stroke="white" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M12 12L21 7" 
                stroke="white" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M12 12L3 7" 
                stroke="white" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="logo-gradient" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4f8fff" />
                  <stop offset="1" stopColor="#8a2be2" />
                </linearGradient>
                <linearGradient id="logo-gradient-stroke" x1="3" y1="4.5" x2="21" y2="19.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" stopOpacity="0.9" />
                  <stop offset="1" stopColor="white" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Reflection */}
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '45%',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.35) 0%, transparent 100%)',
            borderRadius: '14px 14px 0 0',
            pointerEvents: 'none',
            zIndex: 3
          }} />
        </div>
        
        {/* Logo Text */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: `${size * 0.2}px`,
          textShadow: '0 2px 10px rgba(0,0,0,0.3)',
          transform: 'translateZ(0)'
        }}>
          <div style={{
            position: 'relative',
            display: 'inline-block'
          }}>
            <span style={{
              fontSize: `${size * 0.7}px`,
              fontWeight: 800,
              background: 'linear-gradient(90deg, #fff 0%, #a5b4fc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
              letterSpacing: '0.5px',
              fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              position: 'relative',
              display: 'inline-block',
              textTransform: 'uppercase',
              fontWeight: '800',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}>
              SP 
              <span style={{ 
                background: 'linear-gradient(90deg, #a5b4fc 0%, #4f8fff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '800',
                letterSpacing: '1px',
                position: 'relative',
                display: 'inline-block',
                marginLeft: '2px'
              }}>Branding</span>
            </span>
            
            {/* Text underline effect */}
            <span style={{
              position: 'absolute',
              bottom: '-2px',
              left: '0',
              width: '100%',
              height: '2px',
              background: 'linear-gradient(90deg, #4f8fff, #8a2be2)',
              borderRadius: '2px',
              transform: 'scaleX(0.9)',
              opacity: 0.8,
              transition: 'all 0.3s ease',
              ':hover': {
                transform: 'scaleX(1)',
                opacity: 1
              }
            }} />
          </div>
          
          {withTagline && (
            <span style={{
              fontSize: `${size * 0.22}px`,
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 500,
              letterSpacing: '1.2px',
              marginTop: '4px',
              textTransform: 'uppercase',
              fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              background: 'linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(210,220,255,0.9) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              display: 'inline-block',
              padding: '2px 8px',
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              <span style={{
                position: 'relative',
                zIndex: 1,
                textShadow: '0 1px 2px rgba(0,0,0,0.2)'
              }}>Your Brand, Our Vision</span>
              <span style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(90deg, rgba(79,143,255,0.08) 0%, rgba(138,43,226,0.08) 100%)',
                borderRadius: '4px',
                zIndex: 0,
                backdropFilter: 'blur(2px)'
              }} />
            </span>
          )}
        </div>
      </div>
      
      {/* Glow Effect */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, rgba(79,143,255,0.15) 0%, transparent 70%)',
        filter: 'blur(12px)',
        opacity: 0.6,
        zIndex: -1,
        transition: 'all 0.4s ease',
        pointerEvents: 'none'
      }} />
      
      {/* Global styles for this component */}
      <style jsx global>{`
        @keyframes shine {
          0% { transform: translateX(-100%) rotate(15deg); }
          20% { transform: translateX(100%) rotate(15deg); }
          100% { transform: translateX(100%) rotate(15deg); }
        }
      `}</style>
    </div>
  );
};

export default Logo;
