// DiagSlides.jsx
import React, { useEffect, useRef } from 'react';
import './DiagSlides.css';

const IMAGE_BASE = 'https://ik.imagekit.io/realdo/saibranding/paper_add';

const buildSlideSet = (numbers) =>
  numbers.map((n) => ({
    src: `${IMAGE_BASE}/${n}.jpg`,
    alt: `Sai Branding campaign visual ${String(n).padStart(2, '0')}`,
  }));

const slideRows = [
  {
    id: 'odd-1',
    variant: 'odd',
    images: buildSlideSet([1, 2, 3, 4, 5, 6]),
  },
  {
    id: 'even-1',
    variant: 'even',
    images: buildSlideSet([7, 8, 9, 10, 11, 12]),
  },
  {
    id: 'odd-2',
    variant: 'odd',
    images: buildSlideSet([13, 14, 15, 16, 17, 18]),
  },
  {
    id: 'even-2',
    variant: 'even',
    images: buildSlideSet([19, 20, 21, 22, 23, 24]),
  },
];

const DiagSlides = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const pauseAnimation = () => {
      container.style.setProperty('--play-state', 'paused');
    };

    const resumeAnimation = () => {
      container.style.setProperty('--play-state', 'running');
    };

    container.addEventListener('mouseenter', pauseAnimation);
    container.addEventListener('mouseleave', resumeAnimation);

    return () => {
      container.removeEventListener('mouseenter', pauseAnimation);
      container.removeEventListener('mouseleave', resumeAnimation);
    };
  }, []);

  return (
    <section className="diag-section" aria-labelledby="diagShowcaseTitle" ref={containerRef}>
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <div className="container-wide">
        <div className="diag-header">
          <span className="badge">Our Portfolio</span>
          <h2 className="title" id="diagShowcaseTitle">
            Creative Excellence in Every Pixel
          </h2>
          <p className="description">
            Discover our collection of high-impact designs that blend innovation with strategic thinking.
            Each piece is crafted to captivate and convert, reflecting our commitment to excellence.
          </p>
        </div>

        <div className="gallery-container" role="region" aria-label="Image Gallery">
          {slideRows.map((row, rowIdx) => (
            <div
              key={row.id}
              className={`gallery-row ${row.variant}`}
            >
              <div className="gallery-track">
                {/* Quadruple the set to ensure smooth infinite loop for smaller sets on large screens */}
                {[...row.images, ...row.images, ...row.images, ...row.images].map((image, imageIdx) => {
                  const isDuplicate = imageIdx >= row.images.length;
                  const shouldEagerLoad = rowIdx === 0 && imageIdx < 3;

                  return (
                    <div
                      key={`${row.id}-${imageIdx}`}
                      className={`gallery-slide ${isDuplicate ? 'duplicate' : ''}`}
                      aria-hidden={isDuplicate ? 'true' : undefined}
                    >
                      <div className="slide-inner">
                        <img
                          src={image.src}
                          alt={isDuplicate ? '' : image.alt}
                          className="slide-image"
                          loading={shouldEagerLoad ? 'eager' : 'lazy'}
                          decoding="async"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-glow" aria-hidden="true" />
      </div>
    </section>
  );
};

export default DiagSlides;