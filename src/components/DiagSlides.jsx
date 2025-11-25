import React from 'react';

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
    offset: -8,
    duration: 68,
    images: buildSlideSet([1, 2, 3, 4, 5, 6, 7, 8, 9]),
  },
  {
    id: 'even-1',
    variant: 'even',
    offset: 6,
    duration: 74,
    images: buildSlideSet([25, 11, 12, 21, 14, 22, 16, 17, 18]),
  },
  {
    id: 'odd-2',
    variant: 'odd',
    offset: -3,
    duration: 70,
    images: buildSlideSet([9, 8, 7, 6, 5, 4, 3, 2, 1]),
  },
  {
    id: 'even-2',
    variant: 'even',
    offset: 10,
    duration: 78,
    images: buildSlideSet([18, 17, 16, 22, 14, 21, 12, 11, 25]),
  },
];

const DiagSlides = () => (
  <section className="section_home-intro diag_section" aria-labelledby="diagShowcaseTitle">
    <div className="diag_slides container-wide">
      <div className="diag_slides_header">
        <p className="diag_slides_badge">Campaign moodboard</p>
        <div className="diag_slides_intro">
          <h2 id="diagShowcaseTitle" className="title-2">
            Print that pulls attention
          </h2>
          <p className="diag_slides_description">
            Each tile is a live piece from our high-performing outdoor and print work. We obsess over
            layering, ink textures, and typography contrasts so every placement feels tactile even on a
            screen.
          </p>
        </div>
        <a href="#portfolio" className="button diag_slides_cta">
          View case studies
        </a>
      </div>

      <div className="diag_slides_lines" role="presentation">
        {slideRows.map((row, rowIdx) => (
          <div
            key={row.id}
            className={`diag_slides_line ${row.variant}`}
            style={{
              '--initial-offset': `${row.offset}%`,
              '--marquee-duration': `${row.duration}s`,
            }}
          >
            {[...row.images, ...row.images].map((image, imageIdx) => {
              const isDuplicate = imageIdx >= row.images.length;
              const shouldEagerLoad = rowIdx === 0 && imageIdx < 3;

              return (
                <div
                  key={`${row.id}-${imageIdx}`}
                  className="diag_slides_slide"
                  aria-hidden={isDuplicate ? true : undefined}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="img-cover"
                    loading={shouldEagerLoad ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="diag_slides_glow" aria-hidden="true" />
    </div>
  </section>
);

export default DiagSlides;