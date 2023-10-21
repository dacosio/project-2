import { ReactNode } from "react";
import { SwiperOptions } from "swiper/types/swiper-options";

export interface CarouselSwiperProps {
  slides: any[];
  slidesPerView?: number;
  spaceBetween?: number;
  breakpoints?: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
}
