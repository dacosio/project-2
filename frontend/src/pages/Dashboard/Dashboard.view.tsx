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
import CarouselSwiper from "components/module/CarouselSwiper";

import { Swiper, SwiperSlide } from "swiper/react";

const DashboardView = (props: DashboardGeneratedProps) => {
  const [weatherData, setWeatherData] = useState<{ [key: string]: any }>({});
  const MOCK_OPTIONS = ["Today", "15-day"];
  const [state, setState] = useState(MOCK_OPTIONS[0]);
  const navigate = useNavigate();
  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/vancouver?unitGroup=metric&key=${process.env.REACT_APP_WEATHER_API_KEY}&contentType=json`;
  useEffect(() => {
    // get data from weather API and use the data on setWeatherData
    const onFetchWeather = () =>
      axios
        .get(apiUrl)
        .then((response) => {
          // Set the response data in the component's state
          setWeatherData(response.data);
          console.log(weatherData);
        })
        .catch((error) => {
          // Handle any errors and set the error in the component's state
          setWeatherData({});
          console.log(error);
        });

    onFetchWeather();
  }, []);
  return (
    <Wrapper>
      <Typography variant="title2" weight="700">
        Hello Wade, let's farm!
      </Typography>
      <Top>
        <Weather>{weatherData && weatherData.days && weatherData.days.length > 0 ? (
        <WeatherCard weatherData={weatherData} />
      ) : (
        <Typography>Loading weather data.</Typography>
      )}</Weather>
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
        <Carousel>
          <CarouselSwiper
            slidesPerView={4}
            spaceBetween={16}
            slides={[
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
              />,
              <HarvestCard
                cropName="Carrot"
                maxValue={100}
                value={25}
                title="25"
                subtitle="days"
                size="desktop"
                id="2"
                datePlanted="Jan 1, 2023"
                estYield="xx lb/plant"
                height={137}
                width={137}
              />,
              <HarvestCard
                cropName="Carrot"
                maxValue={100}
                value={100}
                title="100"
                subtitle="days"
                size="desktop"
                id="3"
                datePlanted="Jan 1, 2023"
                estYield="xx lb/plant"
                height={137}
                width={137}
              />,
              <HarvestCard
                cropName="Carrot"
                maxValue={100}
                value={65}
                title="65"
                subtitle="days"
                size="desktop"
                id="4"
                datePlanted="Jan 1, 2023"
                estYield="xx lb/plant"
                height={137}
                width={137}
              />,
              <HarvestCard
                cropName="Carrot"
                maxValue={100}
                value={25}
                title="25"
                subtitle="days"
                size="desktop"
                id="5"
                datePlanted="Jan 1, 2023"
                estYield="xx lb/plant"
                height={137}
                width={137}
              />,
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
              />,
              <HarvestCard
                cropName="Carrot"
                maxValue={100}
                value={25}
                title="25"
                subtitle="days"
                size="desktop"
                id="2"
                datePlanted="Jan 1, 2023"
                estYield="xx lb/plant"
                height={137}
                width={137}
              />,
              <HarvestCard
                cropName="Carrot"
                maxValue={100}
                value={100}
                title="100"
                subtitle="days"
                size="desktop"
                id="3"
                datePlanted="Jan 1, 2023"
                estYield="xx lb/plant"
                height={137}
                width={137}
              />,
              <HarvestCard
                cropName="Carrot"
                maxValue={100}
                value={65}
                title="65"
                subtitle="days"
                size="desktop"
                id="4"
                datePlanted="Jan 1, 2023"
                estYield="xx lb/plant"
                height={137}
                width={137}
              />,
              <HarvestCard
                cropName="Carrot"
                maxValue={100}
                value={25}
                title="25"
                subtitle="days"
                size="desktop"
                id="5"
                datePlanted="Jan 1, 2023"
                estYield="xx lb/plant"
                height={137}
                width={137}
              />,
            ]}
          />
        </Carousel>
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
