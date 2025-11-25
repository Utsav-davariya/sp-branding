import React from 'react';

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
  ].join('');  // Join into single string

  return (
    <footer data-nosnippet>
      <div className="footer-wrap mt-xl-4 mt-sm-0 pt-xl-1">
        <section className="sec-wrap set_footer_font_size">
          <div className="sec-wrap__inner footer__main">
            <div className="grid-wrap gap-xl-2 gap-md-1 mobileflex">
              <div className="box-md-12 box-xl-4 bottom--vertical mobilebottom--vertical">
                <div className="svg-holder">
                  <svg className="set_footer_svg" viewBox="0 0 208.65 108.601" xmlns="http://www.w3.org/2000/svg">
                    <g 
                      id="svgGroup" 
                      strokeLinecap="round" 
                      fillRule="evenodd" 
                      fontSize="9pt" 
                      stroke="#000" 
                      strokeWidth="0.25mm" 
                      fill="none" 
                      style={{ stroke: '#000', strokeWidth: '0.25mm', fill: 'none' }}
                    >
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
                    </g>
                  </svg>
                </div>
              </div>
              <div className="box-md-12 box-xl-4 title-2 set_footer_contact">
                <a href="tel:+917778900614">+91 9898 9191 28</a>
              </div>
              <div className="box-md-12 box-xl-4 right-text">
                <div className="mt-xl-4 mt-sm-1">
                  <a href="https://www.facebook.com/saibrandingofficial">
                    <img className="set_social_icon" src="https://ik.imagekit.io/realdo/saibranding/facebook.png" alt="Facebook" />
                  </a>
                  <a href="https://www.google.com/maps/place/SAI+Branding/@23.185019,72.6202057,4031m/data=!3m1!1e3!4m6!3m5!1s0x395e8148ddea00e7:0x5e9baedd32417d9e!8m2!3d23.185019!4d72.6202057!16s%2Fg%2F11rjv0mcbg?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                    <img className="set_social_icon" src="https://ik.imagekit.io/realdo/saibranding/social.png" alt="Google" />
                  </a>
                  <a href="https://www.instagram.com/thehouseofsai/">
                    <img className="set_social_icon" src="https://ik.imagekit.io/realdo/saibranding/instagram.png" alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;