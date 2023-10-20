import React, { useEffect, useState } from "react";
import { DashboardGeneratedProps } from "./Dashboard.props";
import {
  Wrapper,
  Middle,
  Top,
  Segment,
  Weather,
  Title,
  Bottom,
  Carousel,
} from "./Dashboard.style";
import WeatherCard from "../../components/base/WeatherCard";
import axios from "axios";
import Typography from "components/base/Typography";

import SegmentedControl from "../../components/base/SegmentedControl";
import { useNavigate } from "react-router-dom";
import HarvestCard from "../../components/module/HarvestCard";
import CarouselSwiper from "../../components/module/CarouselSwiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { useAppSelector } from "app/hooks";
import {
  selectBroken,
  selectCollapse,
  selectToggle,
} from "features/sidebar/sidebarSlice";
import { useMediaQuery } from "utils/hooks/useMediaQuery";

const DashboardView = (props: DashboardGeneratedProps) => {
  const MOCK_OPTIONS = ["Today", "15-day"];
  const [state, setState] = useState(MOCK_OPTIONS[0]);
  const navigate = useNavigate();

  const sl = [];

  for (let i = 0; i < 6; i++) {
    sl.push(
      <HarvestCard
        cropName="Carrot"
        maxValue={100}
        value={50}
        title="50"
        subtitle="days"
        size="desktop"
        id="1"
        datePlanted="Jan 1, 2023"
        estYield="xx lb/plant"
        height={137}
        width={137}
      />
    );
  }

  const broken = useAppSelector(selectBroken);
  const toggleState = useAppSelector(selectToggle);
  const collapse = useAppSelector(selectCollapse);

  const sm = useMediaQuery("(min-width: 360px) and (max-width:576px)");
  const md = useMediaQuery("(min-width: 577px) and (max-width:768px)");
  const lg = useMediaQuery("(min-width: 769px) and (max-width:1270px)");
  const xl = useMediaQuery("(min-width: 1271px)");

  console.log(collapse);
  const carouselWidth = "80vw";
  const collapseCalc = !collapse
    ? `calc(${carouselWidth} - 288px)`
    : carouselWidth;
  // TODO

  return (
    <Wrapper>
      {/* <Top>
        <Weather lg={6}>Weather Card</Weather>
        <Segment>
          <SegmentedControl
            options={MOCK_OPTIONS}
            selectedOption={state}
            onClickControl={(value: string) => {
              console.log(value);
              setState(value);
            }}
          />
        </Segment>
      </Top> */}
      <Middle>
        {/* <Title>
          <Typography variant="title3" weight="700">
            Your Planted Crops
          </Typography>
          <Typography
            variant="subtitle"
            weight="700"
            textColor="shade5"
            onClick={() => navigate("/your-crops")}
            style={{ cursor: "pointer" }}
          >
            see more
          </Typography>
        </Title> */}
        {/* <Carousel> */}
        <CarouselSwiper
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.5": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@0.75": {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            // "@1.00": {
            //   slidesPerView: 4,
            //   spaceBetween: 50,
            // },
          }}
          slides={sl}
        />
        {/* </Carousel> */}
      </Middle>
      {/* <Bottom>
        <Title>
          <Typography variant="title3" weight="700">
            Amazing crops to plant this season
          </Typography>
        </Title>
      </Bottom> */}
    </Wrapper>
  );
};

export default DashboardView;
