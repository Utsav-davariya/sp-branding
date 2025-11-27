import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '1rem 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'rgba(10, 10, 20, 0.15)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      '@media (max-width: 768px)': {
        padding: '0.8rem 5%'
      }
    }}>
      <a href="/" style={{
        textDecoration: 'none',
        display: 'inline-block',
        lineHeight: 1,
        '@media (max-width: 480px)': {
          transform: 'scale(0.9)'
        },
        '@media (max-width: 360px)': {
          transform: 'scale(0.8)'
        }
      }}>
        <Logo size={36} withTagline={false} />
      </a>
      
      <a
        href="https://wa.me/+917778900614/?text=Hello%20SAI%20Branding"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with SAI Branding on WhatsApp"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          color: 'white',
          transition: 'all 0.3s ease',
          '@media (max-width: 480px)': {
            width: '40px',
            height: '40px'
          },
          ':hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)'
          }
        }}
      >
        <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor" style={{
          '@media (max-width: 480px)': {
            width: '20px',
            height: '20px'
          }
        }}>
          <path d="M16 2.667c-7.364 0-13.333 5.969-13.333 13.333 0 2.348.613 4.62 1.78 6.64L2.4 29.333l6.918-2c1.962.98 4.15 1.5 6.682 1.5 7.364 0 13.333-5.969 13.333-13.333S23.364 2.667 16 2.667zm0 23.466c-2.173 0-4.188-.58-5.934-1.7l-.425-.266-4.107 1.188 1.189-4.006-.28-.42a10.447 10.447 0 0 1-1.685-5.791c0-5.78 4.963-10.467 11.242-10.467 5.92 0 10.733 4.654 10.733 10.467 0 5.78-4.964 10.467-10.733 10.467z" />
        </svg>
      </a>
    </header>
  );
};

export default Header;