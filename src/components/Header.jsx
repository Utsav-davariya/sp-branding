import React from 'react';
import logoImage from '../assets/sp_branding_swbsite-02.png';

const Header = () => {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '1.2rem 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      // backgroundColor: 'rgba(10, 10, 20, 0.15)',
      // backdropFilter: 'blur(8px)',
      // borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      height: '110px',
      boxSizing: 'border-box',
    }}>
      <a href="/" style={{
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        transform: 'scale(1.2)',
        transformOrigin: 'left center',
        transition: 'transform 0.3s ease',
        ':hover': {
          transform: 'scale(1.22) translateX(5px)'
        },
        '@media (max-width: 768px)': {
          transform: 'scale(1.1)',
          ':hover': {
            transform: 'scale(1.12) translateX(5px)'
          }
        }
      }}>
        <img
          src={logoImage}
          alt="SP Branding Logo"
          style={{
            height: '230%',
            width: 'auto',
            maxWidth: '280px',
            objectFit: 'contain',
            '@media (max-width: 768px)': {
              height: '65px',
              maxWidth: '240px'
            },
            '@media (max-width: 480px)': {
              height: '55px',
              maxWidth: '200px'
            },
            '@media (max-width: 360px)': {
              height: '48px',
              maxWidth: '180px'
            }
          }}
        />
      </a>

      <a
        href="https://wa.me/+917778900614/?text=Hello%20SP%20Branding"
        target=""
        rel="noreferrer"
        aria-label="Chat with SP Branding on WhatsApp"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px 22px',
          borderRadius: '50px',
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          color: 'white',
          textDecoration: 'none',
          fontWeight: 500,
          fontSize: '16px',
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          ':hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)'
          },
          '@media (max-width: 768px)': {
            padding: '8px 16px',
            fontSize: '14px',
            gap: '8px'
          }
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{
          flexShrink: 0
        }}>
          <path d="M17.472 14.382c-.297-.15-1.758-.867-2.03-.966-.273-.1-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.18.194-.31.291-.51.1-.21.049-.375-.025-.524-.075-.15-.674-1.62-.922-2.206-.24-.585-.487-.505-.672-.51-.172-.015-.371-.01-.571-.01-.2 0-.523.074-.797.36-.274.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.63.714.226 1.365.195 1.88.12.574-.09 1.767-.72 2.016-1.425.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.572-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a11.186 11.186 0 01-1.705-5.98c0-6.21 5.32-11.28 11.846-11.28 3.14 0 6.044 1.095 8.316 3.135 2.27 2.01 3.58 4.8 3.58 7.725 0 6.21-5.31 11.28-11.835 11.28M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.55 4.14 1.595 5.945L0 24l6.335-1.652a12.055 12.055 0 005.68 1.448h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.18-1.258-6.165-3.53-8.41" />
        </svg>

      </a>
    </header>
  );
};

export default Header;