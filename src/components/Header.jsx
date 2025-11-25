import React from 'react';

const Header = () => (
  <header className="site-header" data-nosnippet>
    <div className="nav-wrap">
      <div className="header-inner">
        <a className="brand-mark" href="/" aria-label="SAI Branding home">
          <div className="brand-logo-text" aria-hidden="true">
            <span className="brand-logo-initial">SP</span>
            <span className="brand-logo-divider" />
            <span className="brand-logo-name">Branding</span>
          </div>
          <span className="brand-tagline">Your Brand Personalized, World Connected</span>
        </a>
        <a
          className="header-whatsapp"
          href="https://wa.me/+919898919128/?text=Hello%20SAI%20Branding"
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with SAI Branding on WhatsApp"
        >
          <span className="whatsapp-icon" aria-hidden="true">
            <svg viewBox="0 0 32 32" role="img">
              <path d="M16 2.667c-7.364 0-13.333 5.969-13.333 13.333 0 2.348.613 4.62 1.78 6.64L2.4 29.333l6.918-2c1.962.98 4.15 1.5 6.682 1.5 7.364 0 13.333-5.969 13.333-13.333S23.364 2.667 16 2.667zm0 23.466c-2.173 0-4.188-.58-5.934-1.7l-.425-.266-4.107 1.188 1.189-4.006-.28-.42a10.447 10.447 0 0 1-1.685-5.791c0-5.78 4.963-10.467 11.242-10.467 5.92 0 10.733 4.654 10.733 10.467 0 5.78-4.964 10.467-10.733 10.467zm6.17-7.818c-.337-.169-1.994-.98-2.304-1.092-.309-.112-.534-.169-.758.169-.225.337-.869 1.092-1.065 1.32-.197.225-.393.253-.73.084-.337-.168-1.425-.523-2.716-1.669-1.004-.89-1.68-1.99-1.878-2.328-.196-.338-.02-.52.149-.688.153-.153.337-.394.505-.59.169-.197.225-.337.337-.561.112-.225.056-.42-.028-.589-.084-.169-.758-1.828-1.038-2.505-.274-.658-.553-.57-.758-.58l-.645-.011c-.225 0-.589.084-.897.42-.309.337-1.18 1.153-1.18 2.81 0 1.658 1.209 3.261 1.378 3.488.168.225 2.385 3.637 5.783 5.095.809.35 1.439.56 1.929.717.81.258 1.548.222 2.132.135.65-.097 1.994-.814 2.276-1.6.281-.785.281-1.458.197-1.6-.084-.141-.309-.225-.645-.394z" />
            </svg>
          </span>
          <span className="whatsapp-label">WhatsApp</span>
        </a>
      </div>
    </div>
  </header>
);

export default Header;