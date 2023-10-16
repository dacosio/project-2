import React, { useEffect } from "react";
import { register } from "swiper/element/bundle";
import { CarouselSwiperProps } from "./CarouselSwiper.props";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const CarouselSwiper = (props: CarouselSwiperProps): JSX.Element => {
  useEffect(() => {
    // Register Swiper web component
    register();
  }, []);

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={props.spaceBetween}
      slidesPerView={props.slidesPerView}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 2500 }}
      loop
    >
      {props.slides.map((c, idx) => {
        return (
          <>
            <SwiperSlide key={idx}>{c}</SwiperSlide>
          </>
        );
      })}
    </Swiper>
  );
};

export default React.memo(CarouselSwiper);
