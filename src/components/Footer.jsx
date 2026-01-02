import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logoImage from '../assets/sp_branding_svg-02.svg';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.footer
      className="footer"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      style={{
        backgroundColor: 'transparent',
        color: 'white',
        padding: '40px 5% 20px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, transparent, #0a0a14 10%)',
      }}
    >

      <div className="footer-content" style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '20px',
        position: 'relative',
        zIndex: 1,
        '@media (min-width: 768px)': {
          gridTemplateColumns: '1fr 1fr',
        },
        '@media (min-width: 1024px)': {
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '40px'
        }
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          marginBottom: '10px'
        }}>
          <img
            src={logoImage}
            alt="SP Branding Logo"
            style={{
              height: '320px',
              width: '328px',
              objectFit: 'contain',
              margin: '0 auto 15px',
            }}
          />
          <p style={{
            color: 'rgba(255,255,255,0.7)',
            lineHeight: '1.6',
            fontSize: '1rem',
            textAlign: 'center',
            maxWidth: '500px',
            margin: '0 auto 20px',
            padding: '0 20px'
          }}>
            Creating impactful brand experiences that drive results.
          </p>
        </div>

        <motion.div
          className="contact-info"
          variants={itemVariants}
          style={{
            textAlign: 'center',
            '@media (min-width: 768px)': {
              textAlign: 'left',
            }
          }}
        >
          <h3 style={{
            color: 'white',
            fontSize: '1.1rem',
            fontWeight: '600',
            marginBottom: '20px',
            position: 'relative',
            display: 'inline-block',
            '::after': {
              content: '""',
              position: 'absolute',
              bottom: '-8px',
              left: '0',
              width: '30px',
              height: '2px',
              background: '#4f8fff',
              '@media (min-width: 768px)': {
                left: '50%',
                transform: 'translateX(-50%)',
              },
              '@media (min-width: 1024px)': {
                left: '0',
                transform: 'none'
              }
            }
          }}>Contact Us</h3>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '15px',
            justifyContent: 'center',
            marginTop: '15px',
            '@media (min-width: 768px)': {
              justifyContent: 'center',
              gap: '20px'
            }
          }}>
            {/* Phone */}
            <motion.a
              href="tel:+917778900614"
              whileHover={{ scale: 1.05 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'rgba(255,255,255,0.9)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                backgroundColor: 'rgba(255,255,255,0.05)',
                padding: '8px 15px',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                ':hover': {
                  backgroundColor: 'rgba(79, 143, 255, 0.2)'
                }
              }}
            >
              <FaPhoneAlt style={{ color: '#4f8fff' }} />
              <span>+91 77789 00614</span>
            </motion.a>

            {/* Facebook */}
            {/* <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'rgba(255,255,255,0.9)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                backgroundColor: 'rgba(255,255,255,0.05)',
                padding: '8px 15px',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                ':hover': {
                  backgroundColor: 'rgba(24, 119, 242, 0.2)'
                }
              }}
            >
              <FaFacebookF style={{ color: '#1877f2' }} />
              <span>Facebook</span>
            </motion.a> */}

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/sp_branding.india_/?igsh=MTJuZ2wzbGdubGVxeQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'rgba(255,255,255,0.9)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                backgroundColor: 'rgba(255,255,255,0.05)',
                padding: '8px 15px',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                ':hover': {
                  background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)'
                }
              }}
            >
              <FaInstagram style={{ color: '#e4405f' }} />
              <span>Instagram</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="company-info"
          variants={itemVariants}
          style={{
            textAlign: 'center',
            '@media (min-width: 768px)': {
              textAlign: 'left',
              gridColumn: '1 / -1',
            },
            '@media (min-width: 1024px)': {
              gridColumn: 'auto',
            }
          }}
        >
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '15px',
            justifyContent: 'center',
            marginTop: '15px',
            '@media (min-width: 768px)': {
              justifyContent: 'center',
              gap: '20px'
            }
          }}>
            {[/* Add other social media links here */]}
          </div>
        </motion.div>
      </div>

      <div style={{
        paddingTop: '15px',
        textAlign: 'center',
        marginTop: '20px',
        position: 'relative'
      }}>
        <div style={{
          content: '',
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          maxWidth: '200px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)'
        }} />
        <p style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.85rem',
          margin: '20px 0 0',
          padding: '0 20px'
        }}>
          &copy; {new Date().getFullYear()} SP Branding. All Rights Reserved.
        </p>
      </div>

      <style jsx global>{`
        /* Smooth scrolling for anchor links */
        html {
          scroll-behavior: smooth;
        }

        /* Better focus styles for accessibility */
        a:focus-visible, 
        button:focus-visible {
          outline: 2px solid #4f8fff;
          outline-offset: 2px;
          border-radius: 4px;
        }
      `}</style>
    </motion.footer>
  );
};

export default Footer;