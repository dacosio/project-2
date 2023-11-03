import React, { useEffect, useState } from "react";
import { DashboardGeneratedProps } from "./Dashboard.props";
import {
  Wrapper,
  Middle,
  Top,
  Segment,
  Weather,
  Title,
  Crops,
  // Carousel,
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
import { calculateDaysPassed, formatDate } from "utils/Date";
import Loading from "../../components/base/Loading";
import HourlyDaily from "components/module/HourlyDaily";
import { Container, Row, Col, Hidden, Visible } from "react-grid-system";
import { useElementSize } from "utils/hooks/useElementSize";
const DashboardView = (props: DashboardGeneratedProps) => {
  const {
    crops,
    isLoading,
    currentLocation,
    forecast,
    currentTemperature,
    lowTemperature,
    highTemperature,
    precipitation = 0,
    humidity = 0,
    wind = 0,
    gradientColor1,
    gradientColor2,
    currentCondition,
    page,
    onSelectedSearchLocationWeather,
    MOCK_OPTIONS,
    state,
    onSetState,
    weatherData,
    onSelectedWeatherIndexWeather,
    selectedIndex,
  } = props;
  const navigate = useNavigate();

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

  const handleSelectedSearchLocation = (address: string) => {
    console.log("Weather address " + address);
    onSelectedSearchLocationWeather(address);
  };

  const handleSelectedWeatherIndex = (value: number) => {
    console.log("Weather " + value);
    onSelectedWeatherIndexWeather(value);
  };
  const [squareRef, { width, height }] = useElementSize();
  console.log(width);

  return (
    <Wrapper>
      <Top>
        <Weather md={6}>
          <CurrentWeather
            currentLocation={currentLocation}
            forecast={forecast}
            currentTemperature={currentTemperature}
            lowTemperature={lowTemperature}
            highTemperature={highTemperature}
            precipitation={precipitation}
            humidity={humidity}
            wind={wind}
            gradientColor1={gradientColor1}
            gradientColor2={gradientColor2}
            currentCondition={currentCondition}
            page="dashboard"
            onSelectedSearchLocation={handleSelectedSearchLocation}
          />
        </Weather>
        <Segment md={6}>
          <SegmentedControl
            options={MOCK_OPTIONS}
            selectedOption={state}
            onClickControl={(value: string) => {
              console.log(value);
              onSetState(value);
            }}
          />
          <HourlyDaily
            weatherDataArray={
              state === MOCK_OPTIONS[0] ? weatherData.days[0] : weatherData
            }
            state={state}
            onSelectedWeatherIndex={handleSelectedWeatherIndex}
            index={selectedIndex}></HourlyDaily>
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
            style={{ cursor: "pointer" }}>
            see more
          </Typography>
        </Title>
        {isLoading ? (
          <Loading />
        ) : (
          <Crops ref={squareRef}>
            {crops?.slice(0, 4).map((crop, idx) => {
              let maxValue =
                (crop.growthDuration.max + crop.growthDuration.min) / 2;

              const targetDate = new Date(crop.datePlanted);
              const daysPassed = calculateDaysPassed(targetDate);
              const remainingDays = maxValue - daysPassed;
              const formattedDate = formatDate(new Date(crop.datePlanted));
              return (
                <HarvestCard
                  key={idx}
                  cropName={crop.cropName}
                  maxValue={maxValue}
                  value={daysPassed}
                  title={remainingDays.toString()}
                  subtitle="days"
                  size={width < 800 ? "mobile" : "desktop"}
                  id={idx.toString()}
                  datePlanted={formattedDate}
                  estYield="10"
                  height={width < 800 ? 85 : 120}
                  width={width < 800 ? 85 : 120}
                  mobile={width < 800 ? true : false}
                />
              );
            })}
          </Crops>
        )}
      </Middle>
    </Wrapper>
  );
};

export default DashboardView;
