import React from 'react';
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  // Split long SVG path to avoid parser issues
  const svgPathD = [
    'M 0 97.95 L 7.2 85.95 Q 12.6 90.45 19.35 93.3 A 35.023 35.023 0 0 0 27.406 95.565 ',
    'A 48.177 48.177 0 0 0 35.1 96.15 A 41.971 41.971 0 0 0 41.921 95.631 Q 45.555 95.031 48.497 93.74 ',
    'A 20.551 20.551 0 0 0 52.2 91.65 Q 58.272 87.313 58.492 80.049 A 18.174 18.174 0 0 0 58.5 79.5 ',
    'A 17.909 17.909 0 0 0 57.994 75.161 A 14.725 14.725 0 0 0 56.7 71.775 A 12.145 12.145 0 0 0 54.899 69.291 ',
    'Q 52.995 67.22 49.776 65.207 A 38.715 38.715 0 0 0 49.725 65.175 Q 44.55 61.95 34.5 58.2 ',
    'A 135.619 135.619 0 0 1 27.589 55.304 Q 21.483 52.531 17.25 49.725 Q 11.279 45.768 8.457 40.781 ',
    'A 19.954 19.954 0 0 1 8.025 39.975 A 25 25 0 0 1 5.744 32.968 A 34.392 34.392 0 0 1 5.25 27 ',
    'Q 5.25 19.5 9.375 13.425 A 25.767 25.767 0 0 1 16.055 6.769 A 35.078 35.078 0 0 1 21.525 3.675 ',
    'Q 28.796 0.345 38.838 0.033 A 67.842 67.842 0 0 1 40.95 0 A 79.343 79.343 0 0 1 49.781 0.469 ',
    'A 59.157 59.157 0 0 1 57.675 1.875 Q 65.1 3.75 72.15 7.2 L 66.9 19.35 A 47.243 47.243 0 0 0 60.711 16.322 ',
    'A 62.529 62.529 0 0 0 54.975 14.325 Q 48.15 12.3 40.65 12.3 A 40.78 40.78 0 0 0 34.605 12.72 ',
    'Q 31.407 13.2 28.8 14.23 A 18.925 18.925 0 0 0 25.05 16.2 A 14.852 14.852 0 0 0 21.805 19.147 ',
    'A 11.039 11.039 0 0 0 19.35 26.25 A 15.697 15.697 0 0 0 19.789 30.033 A 12.843 12.843 0 0 0 21 33.15 ',
    'Q 22.583 36.029 27.137 38.77 A 35.252 35.252 0 0 0 27.525 39 Q 31.597 41.381 39.069 44.284 ',
    'A 195.022 195.022 0 0 0 42.15 45.45 A 121.843 121.843 0 0 1 49.618 48.494 Q 56.196 51.45 60.675 54.6 ',
    'A 39.065 39.065 0 0 1 65.235 58.316 Q 67.605 60.587 69.19 63.02 A 21.345 21.345 0 0 1 70.35 65.025 ',
    'A 26.368 26.368 0 0 1 72.962 73.819 A 33.233 33.233 0 0 1 73.2 77.85 A 32.565 32.565 0 0 1 72.199 86.101 ',
    'A 25.657 25.657 0 0 1 68.325 94.5 A 29.427 29.427 0 0 1 57.928 103.534 A 36.535 36.535 0 0 1 54.825 105 ',
    'A 45.782 45.782 0 0 1 43.71 108.006 A 60.041 60.041 0 0 1 35.1 108.6 A 71.05 71.05 0 0 1 23.437 107.681 ',
    'A 57.073 57.073 0 0 1 15.15 105.675 Q 6.15 102.75 0 97.95 Z'
  ].join('');

  return (
    <footer className="footer" style={{
      backgroundColor: '#0a0a14',
      color: 'white',
      padding: '40px 5% 30px',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      '@media (min-width: 768px)': {
        padding: '60px 5% 40px'
      }
    }}>
      <div className="footer-content" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2.5rem',
        '@media (min-width: 768px)': {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '2rem'
        }
      }}>
        {/* Logo */}
        <div className="logo-container" style={{
          flex: '0 1 auto',
          width: '100%',
          maxWidth: '250px',
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto',
          '@media (min-width: 768px)': {
            margin: 0,
            maxWidth: '300px',
            flex: '1 1 300px'
          },
          '@media (min-width: 992px)': {
            justifyContent: 'flex-start',
            flex: '1 1 300px'
          }
        }}>
          <div className="logo" style={{
            width: '200px',
            height: 'auto'
          }}>
            <svg viewBox="0 0 208.65 108.601" style={{
              width: '100%',
              height: 'auto',
              fill: 'white'
            }}>
              <path d={svgPathD} id="0" vectorEffect="non-scaling-stroke" />
              <path 
                d="M 179.4 103.05 L 166.35 108.3 L 154.65 78.3 L 106.05 78.3 L 94.35 108 L 82.2 103.05 L 123.3 1.8 L 138.9 1.8 L 179.4 103.05 Z M 130.35 15.9 L 110.55 66.3 L 150 66.3 L 130.35 15.9 Z" 
                id="1" 
                vectorEffect="non-scaling-stroke" 
              />
              <path 
                d="M 208.65 106.8 L 194.4 106.8 L 194.4 1.8 L 208.65 1.8 L 208.65 106.8 Z" 
                id="2" 
                vectorEffect="non-scaling-stroke" 
              />
            </svg>
          </div>
        </div>

        {/* Contact Info */}
        <div className="contact-info" style={{
          flex: '1 1 auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          textAlign: 'center',
          padding: '0 10px',
          '@media (min-width: 768px)': {
            maxWidth: '300px',
            flex: '1 1 300px',
            padding: 0
          },
          '@media (min-width: 992px)': {
            alignItems: 'center'
          }
        }}>
          <a href="tel:+919898919128" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.2rem',
            fontWeight: 500,
            transition: 'color 0.3s ease',
            ':hover': {
              color: '#4f8fff',
              '& svg': {
                transform: 'scale(1.1)'
              }
            }
          }}>
            <FaPhoneAlt style={{
              fontSize: '1rem',
              color: '#4f8fff',
              transition: 'transform 0.3s ease'
            }} />
            +91 77789 00614
          </a>
          
          {/* <a 
            href="https://www.google.com/maps/place/SP+Branding/@23.185019,72.6202057,17z/data=!3m1!4b1!4m6!3m5!1s0x395e8148ddea00e7:0x5e9baedd32417d9e!8m2!3d23.185019!4d72.6202057!16s%2Fg%2F11rjv0mcbg?entry=ttu" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: 'rgba(255, 255, 255, 0.8)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease',
              textAlign: 'center',
              ':hover': {
                color: '#4f8fff',
                '& svg': {
                  transform: 'scale(1.1)'
                }
              }
            }}
          >
            <FaMapMarkerAlt style={{
              fontSize: '1rem',
              color: '#4f8fff',
              flexShrink: 0,
              transition: 'transform 0.3s ease'
            }} />
            SP Branding, Gandhinagar, Gujarat, India
          </a> */}
        </div>

        {/* Social Media */}
        <div className="social-links" style={{
          flex: '1 1 auto',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          marginTop: '1rem',
          padding: '20px 0',
          '@media (min-width: 768px)': {
            maxWidth: '300px',
            flex: '1 1 300px',
            padding: 0,
            marginTop: 0
          },
          '@media (min-width: 992px)': {
            justifyContent: 'flex-end',
            padding: 0
          }
        }}>
          <a 
            href="https://www.facebook.com/saibrandingofficial" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: '#4f8fff',
                transform: 'translateY(-3px)',
                boxShadow: '0 5px 15px rgba(79, 143, 255, 0.3)'
              }
            }}
          >
            <FaFacebookF />
          </a>
          
          <a 
            href="https://www.instagram.com/thehouseofsai/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              ':hover': {
                background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                transform: 'translateY(-3px)',
                boxShadow: '0 5px 15px rgba(188, 24, 136, 0.3)'
              }
            }}
          >
            <FaInstagram />
          </a>
          
          {/* <a 
            href="https://www.google.com/maps/place/SAI+Branding/@23.185019,72.6202057,17z/data=!3m1!4b1!4m6!3m5!1s0x395e8148ddea00e7:0x5e9baedd32417d9e!8m2!3d23.185019!4d72.6202057!16s%2Fg%2F11rjv0mcbg?entry=ttu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1rem',
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: '#34a853',
                transform: 'translateY(-3px)',
                boxShadow: '0 5px 15px rgba(52, 168, 83, 0.3)'
              }
            }}
          >
            <FaMapMarkerAlt />
          </a> */}
        </div>
      </div>
      
      {/* Copyright */}
      <div className="copyright" style={{
        textAlign: 'center',
        marginTop: '40px',
        paddingTop: '20px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '0.85rem',
        width: '100%',
        '@media (min-width: 768px)': {
          marginTop: '60px'
        }
      }}>
        &copy; {new Date().getFullYear()} SP Branding. All rights reserved.
      </div>
      
      {/* Global Styles */}
      <style jsx global>{`
        @media (max-width: 767px) {
          .footer-content {
            text-align: center;
          }
          
          .logo-container {
            margin-bottom: 1rem;
          }
          
          .social-links {
            margin: 1rem 0;
          }
        }
        
        /* Better touch targets for mobile */
        @media (max-width: 480px) {
          .social-icon {
            width: 44px !important;
            height: 44px !important;
            font-size: 1.1rem !important;
          }
          
          .contact-info a {
            font-size: 1rem !important;
            padding: 8px 0;
          }
        }
        
        /* Smooth transitions */
        .social-icon, .contact-info a {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;