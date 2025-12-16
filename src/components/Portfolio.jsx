import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

const Portfolio = () => {
  // Dynamically import images from the assets folder
  const imageModules = import.meta.glob('../assets/slider_images/*.{jpg,jpeg,png,webp}', { eager: true });
  const hordingImages = Object.values(imageModules).map((mod) => mod.default);

  return (
    <>
      <section className="careers_perks py-16 lg:py-24 relative z-10">
        <div className="padding-global">
          <div className="container-max">
            <div className="careers_title mb-8">
              <div className="h_line_white_30"></div>
            </div>

            <h2 className="title-2 mb-6">
              Start Your Journey of <span className="colorful-gradient">Excellence</span> & <span className="colorful-gradient">Innovation</span>
            </h2>

            <p className="text-lg text-gray-300 max-w-2xl mb-12">
              Explore our curated collection of successful branding projects that have transformed businesses into market leaders.
            </p>
          </div>
        </div>
      </section>

      <section className="section_home-tags pb-20 lg:pb-32">
        <div className="padding-global mobilepadding0">
          <div className="container-wide">
            <div data-w-id="aea381fc-0b21-67cd-8a7d-0c0cb8273278" className="slides_big-wow">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1.2}
                centeredSlides={true}
                loop={true}
                speed={1000}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: '.swiper-btn.next.is-project',
                  prevEl: '.swiper-btn.prev.is-project',
                }}
                breakpoints={{
                  480: { slidesPerView: 1.5, spaceBetween: 20 },
                  640: { slidesPerView: 2, spaceBetween: 25 },
                  920: { slidesPerView: 2.5, spaceBetween: 30 },
                  1280: { slidesPerView: 3.5, spaceBetween: 35 },
                  1600: { slidesPerView: 4.5, spaceBetween: 40 },
                }}
                className="swiper is-project !overflow-visible"
              >
                {hordingImages.map((src, idx) => (
                  <SwiperSlide key={idx} className="herogrid_slide transition-opacity duration-300">
                    <div className="herogrid_media group overflow-hidden rounded-2xl shadow-2xl relative">
                      <img
                        src={src}
                        alt={`Sai Branding Portfolio ${idx + 1}`}
                        className="herogrid_img w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-white text-lg font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Project</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="swiper-button__wrap is-project mt-10 flex justify-center gap-4 relative z-20" aria-hidden="true">
                <button className="swiper-btn prev is-project p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all text-white border border-white/20 w-12 h-12 flex items-center justify-center" aria-label="Previous project slide">
                  <span className="text-xl">&larr;</span>
                </button>
                <button className="swiper-btn next is-project p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all text-white border border-white/20 w-12 h-12 flex items-center justify-center" aria-label="Next project slide">
                  <span className="text-xl">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;