import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper's CSS

// Import Swiper modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const SliderComponent: React.FC = () => {
  return (
    <div id='owl1'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Register modules here
        spaceBetween={20} // Space between slides
        slidesPerView={4} // Default number of slides visible
        navigation={false} // Enable navigation arrows
        pagination={false} // Enable pagination dots
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Enable autoplay
        loop={true} // Enable infinite looping
        breakpoints={{
          320: {
            slidesPerView: 2, // 2 slide for mobile screens (<= 320px)
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3, // 3 slides for tablets (<= 768px)
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5, // 5 slides for desktops (>= 1024px)
            spaceBetween: 20,
          },
        }}
      >
        {/* Swiper Slides */}
        <SwiperSlide>
          <div className='item'>
            <img src="/images/jupiter.png" className="img1" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='item'>
          <img src="/images/solana.png" className="img2" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='item'>
          <img src="/images/phantom.png" className="img3" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='item'>
          <img src="/images/solana.png" className="img2" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='item'>
          <img src="/images/phantom.png" className="img3" />
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default SliderComponent;
