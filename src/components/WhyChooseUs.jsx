import React from 'react';

const WhyChooseUs = () => {
  return (
    <>
      <section className="why-choose-us">
        <div className="container">
          <div className="content-wrapper">
            <div className="text-content">
              <div className="section-header">
                <h2 className="section-title">Why Choose Us?</h2>
                <div className="divider"></div>
              </div>
              <div className="spacer"></div>
              <h2 className="tagline">
                यहां से <span className="highlight">बात</span> बनेगी
              </h2>
            </div>

            <div className="description">
              <p className="text">
                Everyone <span className="highlight">Loves the Likes</span> and{' '}
                <span className="highlight">We Love the Leads.</span> The reason is simple,
                we have a creative advertising and branding strategy. You choose us because
                we never compromise on creativity. Being original isn't a challenge for us;
                it's second nature of <span className="highlight">SP BRANDING.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .why-choose-us {
          padding: 6rem 5%;
          background-color: #0a0a14;
          color: #f8fafc;
          overflow: hidden;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .content-wrapper {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .section-header {
          margin-bottom: 1.5rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0 0 1rem;
          background: linear-gradient(90deg, #4F8FFF, #8A2BE2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .divider {
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #4F8FFF, #8A2BE2);
          margin-top: 1rem;
        }

        .tagline {
          font-size: 2rem;
          font-weight: 600;
          margin: 1.5rem 0;
          line-height: 1.3;
        }

        .highlight {
          background: linear-gradient(90deg, #4F8FFF, #8A2BE2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
        }

        .description {
          max-width: 600px;
        }

        .text {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #94a3b8;
          margin: 0;
        }

        .spacer {
          height: 2rem;
        }

        @media (min-width: 768px) {
          .content-wrapper {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }

          .text-content {
            flex: 1;
            padding-right: 3rem;
          }

          .description {
            flex: 1;
            padding-top: 4rem;
          }
        }

        @media (max-width: 767px) {
          .why-choose-us {
            padding: 4rem 5%;
          }

          .section-title {
            font-size: 2rem;
          }

          .tagline {
            font-size: 1.75rem;
          }

          .text {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.75rem;
          }

          .tagline {
            font-size: 1.5rem;
          }

          .divider {
            width: 50px;
            height: 3px;
          }
        }
      `}</style>
    </>
  );
};

export default WhyChooseUs;