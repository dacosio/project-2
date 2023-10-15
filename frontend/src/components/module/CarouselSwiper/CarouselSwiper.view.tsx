import React, { useState } from "react";
import { CarouselSwiperProps } from "./CarouselSwiper.props";
/* eslint-disable jsx-a11y/alt-text */

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

const CarouselSwiper = (props: CarouselSwiperProps): JSX.Element => {
  return (
    <Swiper
      modules={[Pagination]}
      // spaceBetween={50}
      slidesPerView={props.slidesPerView}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {props.component.map((c, idx) => {
        return (
          <>
            <SwiperSlide key={idx} virtualIndex={idx}>
              {c}
            </SwiperSlide>
          </>
        );
      })}
    </Swiper>
  );
};

export default React.memo(CarouselSwiper);
