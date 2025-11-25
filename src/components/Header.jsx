import React from 'react';

const Header = () => (
  <header className="site-header" data-nosnippet>
    <div className="nav-wrap">
      <div className="header-inner">
        <a className="brand-mark" href="/" aria-label="SAI Branding home">
          <img
            src="https://ik.imagekit.io/realdo/saibranding/svgs/logo-svg.svg"
            alt="SAI Branding logo"
            className="brand-logo"
          />
          <span className="brand-tagline">Your Brand Personalized, World Connected</span>
        </a>
        <a
          className="header-whatsapp"
          href="https://wa.me/+919898919128/?text=Hello%20SAI%20Branding"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with SAI Branding on WhatsApp"
        >
          <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
            <circle cx="16" cy="16" r="15" />
            <path d="M20.7 17.8c-.3-.1-1.8-.9-2-.9s-.4 0-.6.3c-.2.3-.7.9-.8 1-.1.1-.3.1-.6-.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.7-1.7-2-.2-.3 0-.4.1-.6.3-.4.6-.7.7-.9.1-.2.1-.3.2-.5.1-.2 0-.4 0-.5s-.6-1.5-.8-2.1c-.2-.5-.5-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.8.7.8.2 1.5.2 2 .1.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.2.2-1.4-.1-.2-.3-.3-.6-.4z" />
          </svg>
        </a>
      </div>
    </div>
  </header>
);

export default Header;