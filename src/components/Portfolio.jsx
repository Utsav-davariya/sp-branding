import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

const Portfolio = () => {
  // Hording images from original
  const hordingImages = Array.from({ length: 50 }, (_, i) => `https://ik.imagekit.io/realdo/saibranding/hording/${i + 1}.jpg`);

  return (
    <>
      <section className="careers_perks">
        <div className="spacer-xxhuge"></div>
        <div className="padding-global">
          <div className="container-max">
            <div className="careers_title">
              <h2 className="careers_title_heading">Portfolio</h2>
              <div className="h_line_white_30"></div>
            </div>
            <div className="spacer-xxlarge"></div>
            <h2 className="title-2"> जान लो हमारा <span className="colorful-gradient">अस्तित्व </span> और <span className="colorful-gradient">अहमियत </span> </h2>
            <div className="spacer-xxlarge"></div>
          </div>
        </div>
      </section>
      <section className="section_home-tags">
        <div className="padding-global mobilepadding0">
          <div className="container-wide">
            <div data-w-id="aea381fc-0b21-67cd-8a7d-0c0cb8273278" className="slides_big-wow">
              <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={1.1}
                centeredSlides={false}
                loop
                speed={900}
                navigation={{
                  nextEl: '.swiper-btn.next.is-project',
                  prevEl: '.swiper-btn.prev.is-project',
                }}
                breakpoints={{
                  480: { slidesPerView: 1.2 },
                  640: { slidesPerView: 1.6 },
                  920: { slidesPerView: 2.2 },
                  1280: { slidesPerView: 3.2 },
                  1600: { slidesPerView: 4 },
                }}
                className="swiper is-project"
              >
                {hordingImages.slice(0, 25).map((src, idx) => (
                  <SwiperSlide key={idx} className="herogrid_slide">
                    <div className="herogrid_media">
                      <img
                        src={src}
                        alt={`Sai Branding portfolio board ${idx + 1}`}
                        className="herogrid_img"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-button__wrap is-project" aria-hidden="true">
                <button className="swiper-btn prev is-project" aria-label="Previous project slide">
                  <span>&larr;</span>
                </button>
                <button className="swiper-btn next is-project" aria-label="Next project slide">
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="spacer-xxhuge"></div>
    </>
  );
};

export default Portfolio;