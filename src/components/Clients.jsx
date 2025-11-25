import React from 'react';

const Clients = () => {
  // All logo URLs from original - group into holders (3 per holder, 4 holders per line, 3 lines)
  const logos = [
    // Line 1 Holder 1
    'https://ik.imagekit.io/realdo/saibranding/logos/Samarth_Logo.webp',
    'https://ik.imagekit.io/realdo/saibranding/logos/polaris_2.webp',
    'https://ik.imagekit.io/realdo/saibranding/logos/psy_logo.webp',
    // ... Add ALL 50+ logos here, e.g.,
    'https://ik.imagekit.io/realdo/saibranding/logos/Bhagwat_Serenity.webp',
    // Continue for all
  ];

  // For demo, slice and repeat structure
  const holders = Array.from({ length: 12 }, (_, h) => (
    <div key={h} className="clients-list_holder">
      <div className="client-list_shape one"></div>
      <div className="client-list_overlay"></div>
      {logos.slice(h*3, (h+1)*3).map((src, l) => (
        <img key={l} src={src} alt="" className={`client-list_logo_img ${l === 0 ? 'width-large' : l === 1 ? 'height-large' : ''}`} loading="eager" />
      ))}
    </div>
  ));

  return (
    <section className="section_clients">
      <div className="padding-global">
        <div className="title-header">
          <div className="container-wide">
            <div className="header">
              <div className="max-width-medium">
                <div className="careers_title">
                  <h2 className="careers_title_heading">Clients</h2>
                  <div className="h_line_white_30"></div>
                </div>
                <div className="spacer-xxlarge"></div>
                <h2 className="title-2"> इनसे है हमारा <span className="colorful-gradient">गठबंधन </span> </h2>
                <div className="spacer-xxlarge mobilehidden"></div>
              </div>
              <div className="max-width-40">
                <div className="header_content">
                  <p className="text-size-20 opacity-100">
                    Trust, dedication, and excellence are the cornerstones of every relationship we build. It’s not just about delivering results—it’s about creating partnerships that thrive on mutual respect and shared success.
                  </p>
                  <div className="spacer-xxlarge"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-wide">
        <div className="clients-list_wrap">
          <div className="clients-list_line">
            {holders.slice(0,4)}
          </div>
          <div className="clients-list_line">
            {holders.slice(4,8)}
          </div>
          <div className="clients-list_line">
            {holders.slice(8,12)}
          </div>
        </div>
      </div>
      <div className="spacer-large"></div>
    </section>
  );
};

export default Clients;