import React, { useEffect, useState } from "react";
import { DashboardGeneratedProps } from "./Dashboard.props";
import {
  Wrapper,
  Middle,
  Top,
  Segment,
  Weather,
  Title,
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
import CurrentWeather from "components/module/CurrentWeather";

const DashboardView = (props: DashboardGeneratedProps) => {
  const MOCK_OPTIONS = ["Today", "15-day"];
  const [state, setState] = useState(MOCK_OPTIONS[0]);
  const navigate = useNavigate();

  const sl = [];

  for (let i = 0; i < 9; i++) {
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
        height={82}
        width={82}
      />
    );
  }

  const [gradientObject, setGradientObject] = useState({
    clear: ["#1DAEFF", "#8ECCEF"],
    partiallyCloudy: ["#6DDFFC", "#89B4E7"],
    overcast: ["#83D3EF", "#4A629B"],
    rain: ["#37528C", "#9BACD0"],
    thunderStorm: ["#7148D5", "#C9A6C7"],
    snow: ["#1DACF0", "#202C4C"],
    snowRain: ["#524E8B", "#2A3259"],
    thunderStormRain: ["#4D54D5", "#C29EC9"],
  });

  return (
    <Wrapper>
      <Top>
        <Weather md={6}>
          <CurrentWeather
            currentLocation="Vancouver"
            forecast="Clear"
            currentTemperature={24}
            lowTemperature={18}
            highTemperature={26}
            precipitation={0}
            humidity={65}
            wind={18}
            gradientColor1={gradientObject.clear[0]}
            gradientColor2={gradientObject.clear[1]}
            currentCondition="clear"
            page="dashboard"
          />
        </Weather>
        <Segment md={6}>
          <SegmentedControl
            options={MOCK_OPTIONS}
            selectedOption={state}
            onClickControl={(value: string) => {
              console.log(value);
              setState(value);
            }}
          />
        </Segment>
      </Top>
      <Middle>
        <Title>
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
        </Title>
        {/* <Carousel> */}
        <CarouselSwiper
          slidesPerView={1}
          breakpoints={{
            500: {
              width: 500,
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              width: 1024,
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          slides={sl}
        />
        {/* </Carousel> */}
      </Middle>
    </Wrapper>
  );
};

export default DashboardView;
