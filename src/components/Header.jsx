import React, { useState, useEffect } from 'react';
import logoImage from '../assets/sp_branding_svg-02.svg';

const scrollToSection = (e, id, closeMenu) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth'
  });
  if (closeMenu) closeMenu();
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <>
      <header 
        className={`header ${scrolled ? 'scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0.5rem 5%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backdropFilter: 'blur(8px)',
          height: '80px',
          boxSizing: 'border-box',
          transition: 'all 0.3s ease',
          backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.7)' : 'transparent',
        }}
      >
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, 'home')}
          className="logo-link"
        >
          <img
            src={logoImage}
            alt="SP Branding Logo"
            className="logo"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+917778900614/?text=Hello%20SP%20Branding"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with SP Branding on WhatsApp"
          className="whatsapp-button"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.15-1.758-.867-2.03-.966-.273-.1-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.18.194-.31.291-.51.1-.21.049-.375-.025-.524-.075-.15-.674-1.62-.922-2.206-.24-.585-.487-.505-.672-.51-.172-.015-.371-.01-.571-.01-.2 0-.523.074-.797.36-.274.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.63.714.226 1.365.195 1.88.12.574-.09 1.767-.72 2.016-1.425.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.572-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a11.186 11.186 0 01-1.705-5.98c0-6.21 5.32-11.28 11.846-11.28 3.14 0 6.044 1.095 8.316 3.135 2.27 2.01 3.58 4.8 3.58 7.725 0 6.21-5.31 11.28-11.835 11.28M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.55 4.14 1.595 5.945L0 24l6.335-1.652a12.055 12.055 0 005.68 1.448h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.18-1.258-6.165-3.53-8.41" />
          </svg>
          <span className="whatsapp-text">Chat on WhatsApp</span>
        </a>
      </header>

      {/* Mobile Navigation */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}></div>
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <button 
            className="close-menu"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="mobile-menu-content">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id, closeMenu)}
              className="mobile-nav-link"
            >
              <span>{item.label}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .logo-link {
          text-decoration: none;
          display: flex;
          align-items: center;
          height: 100%;
          transition: transform 0.3s ease;
          z-index: 1001;
        }

        .logo-link:hover {
          transform: scale(1.05);
        }

        .logo {
          height: 250px;
          width: auto;
          max-width: 250px;
          object-fit: contain;
          transition: all 0.3s ease;
        }

         .desktop-nav {
          display: flex;
          gap: 2rem;
          margin-left: auto;
          margin-right: 2rem;
          align-items: center;
        }


        .nav-link {
          color: white;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          padding: 0.5rem 0;
          position: relative;
          white-space: nowrap;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: linear-gradient(90deg, #4F8FFF, #8A2BE2);
          background: linear-gradient(90deg, #4F8FFF, #8A2BE2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        // .nav-link::after {
        //   content: '';
        //   position: absolute;
        //   width: 0;
        //   height: 2px;
        //   bottom: 0;
        //   left: 0;
        //   background-color: #25D366;
        //   transition: width 0.3s ease;
        // }

        .nav-link:hover::after {
          width: 100%;
        }

        .whatsapp-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 50px;
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: white;
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          white-space: nowrap;
          z-index: 1001;
        }

        .whatsapp-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 21px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1001;
        }

        .hamburger span {
          width: 100%;
          height: 3px;
          background-color: white;
          border-radius: 3px;
          transition: all 0.3s ease;
          display: block;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }

        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .mobile-menu-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 85%;
          max-width: 350px;
          height: 100vh;
          background: rgba(15, 15, 15, 0.98);
          z-index: 1000;
          transition: right 0.4s cubic-bezier(0.77, 0, 0.175, 1);
          padding: 80px 1.5rem 2rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          box-shadow: -5px 0 30px rgba(0, 0, 0, 0.2);
        }

        .mobile-menu.open {
          right: 0;
        }

        .mobile-menu-header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          padding: 1.5rem;
          display: flex;
          justify-content: flex-end;
        }

        .close-menu {
          background: none;
          border: none;
          color: #fff;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .close-menu:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: rotate(90deg);
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1rem;
          overflow-y: auto;
          height: 100%;
          padding-right: 0.5rem;
        }

        .mobile-menu-content::-webkit-scrollbar {
          width: 4px;
        }

        .mobile-menu-content::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2px;
        }

        .mobile-menu-content::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
        }

        .mobile-nav-link {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          padding: 1rem 1.25rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mobile-nav-link:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #25D366;
          transform: translateX(5px);
        }

        .mobile-nav-link svg {
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .mobile-nav-link:hover svg {
          opacity: 1;
          transform: translateX(3px);
        }

        @media (max-width: 1024px) {
          .desktop-nav {
            gap: 1.5rem;
            margin-left: 1rem;
          }
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }

          .hamburger {
            display: flex;
            margin-left: auto;
            margin-right: 1rem;
          }

          .whatsapp-button {
            padding: 8px 12px;
            font-size: 14px;
          }

          .whatsapp-text {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .logo {
            height: 200px;
            max-width: 180px;
          }

          .header {
            padding: 0.5rem 1rem;
            height: 70px;
          }

          .mobile-menu {
            width: 85%;
            padding: 70px 1rem 2rem;
          }
          
          .mobile-nav-link {
            padding: 0.9rem 1rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 360px) {
          .logo {
            height: 250px;
            max-width: 160px;
          }
          
          .mobile-menu {
            width: 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Header;