import React, { useEffect } from "react";
import { register } from "swiper/element/bundle";
import { CarouselSwiperProps } from "./CarouselSwiper.props";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useAppSelector } from "../../../app/hooks";
import {
  selectBroken,
  selectCollapse,
  selectToggle,
} from "../../../features/sidebar/sidebarSlice";
import { useMediaQuery } from "../../../utils/hooks/useMediaQuery";

const CarouselSwiper = (props: CarouselSwiperProps): JSX.Element => {
  useEffect(() => {
    register();
  }, []);

  const broken = useAppSelector(selectBroken);
  const toggleState = useAppSelector(selectToggle);
  const collapse = useAppSelector(selectCollapse);

  const sm = useMediaQuery("(min-width: 360px) and (max-width:576px)");
  const md = useMediaQuery("(min-width: 320) and (max-width:768px)");
  const lg = useMediaQuery("(min-width: 769px) and (max-width:1270px)");
  const xl = useMediaQuery("(min-width: 1271px)");

  const carouselWidth = "80vw";
  const collapseCalc =
    !collapse && !md && !broken
      ? `calc(${carouselWidth} - 288px)`
      : carouselWidth;

  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={props.spaceBetween}
      slidesPerView={props.slidesPerView}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 2500 }}
      loop
      breakpoints={props.breakpoints}
      style={{
        width: collapseCalc,
        transition: "width 0.3s ease-in-out",
        margin: "auto",
      }}
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
