import React from 'react';

const serviceShots = [
  {
    id: 'dream-viana',
    src: 'https://ik.imagekit.io/realdo/saibranding/sites/dream_viana.png',
    alt: 'Dream Viana brochure mockup',
    label: 'Dream Viana',
    position: 'pos-topleft',
  },
  {
    id: 'saamarth',
    src: 'https://ik.imagekit.io/realdo/saibranding/sites/saamarth.png',
    alt: 'Saamarth identity board',
    label: 'Saamarth Group',
    position: 'pos-topcenter',
  },
  {
    id: 'avante',
    src: 'https://ik.imagekit.io/realdo/saibranding/sites/the_avante.png',
    alt: 'The Avante experience center visuals',
    label: 'The Avante',
    position: 'pos-topright',
  },
  {
    id: 'palace',
    src: 'https://ik.imagekit.io/realdo/saibranding/sites/the_palace.png',
    alt: 'The Palace launch collateral',
    label: 'The Palace',
    position: 'pos-bottomleft',
  },
  {
    id: 'privilon',
    src: 'https://ik.imagekit.io/realdo/saibranding/sites/the_privilon.png',
    alt: 'The Privilon outdoor creatives',
    label: 'The Privilon',
    position: 'pos-bottomright',
  },
];

const statHighlights = [
  { value: '13+', label: 'Years shaping spaces' },
  { value: '150+', label: 'Developer partners' },
  { value: '350+', label: 'Campaigns launched' },
];

const capabilities = ['Brand strategy sprints', 'Sales experience design', 'Launch films & AVs'];

const ServicesHero = () => (
  <section className="section_services_hero bg-inter" aria-labelledby="servicesHeroTitle">
    <div className="services_hero-wrap">
      <div className="padding-global">
        <div className="service_hero-subwrap services_hero-grid">
          <div className="services_hero-content">
            <p className="services_hero-eyebrow">Integrated real estate services</p>
            <h2 id="servicesHeroTitle" className="title-2 services_hero-title">
              Where architecture meets attention
            </h2>
            <p className="services_hero-description text-size-20">
              We choreograph every touchpoint—from the first teaser hoarding to the final site walkthrough—so your
              projects feel premium, immersive, and irresistibly sellable.
            </p>

            <ul className="services_hero-pillset" role="list">
              {capabilities.map((capability) => (
                <li key={capability} className="services_hero-pill">
                  {capability}
                </li>
              ))}
            </ul>
              
            {/* <div className="services_hero-cta">
              <a href="#contact" className="button">
                Book a discovery call
              </a>
              <button type="button" className="button button-ghost">
                Download service deck
              </button>
            </div> */}

            <dl className="services_hero-stats">
              {statHighlights.map((stat) => (
                <div key={stat.label} className="services_hero-stat">
                  <dt>{stat.value}</dt>
                  <dd>{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="service_hero-slides" aria-hidden="true">
            <div className="service_hero-sculpt">
              {serviceShots.map((shot, index) => (
                <figure key={shot.id} className={`service_hero-card ${shot.position}`} style={{ animationDelay: `${index * 1.2}s` }}>
                  <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
                  <figcaption>{shot.label}</figcaption>
                </figure>
              ))}
              <div className="service_hero-glow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesHero;