import { DashboardGeneratedProps } from "./Dashboard.props";
import {
  Wrapper,
  Middle,
  Top,
  Segment,
  Weather,
  Title,
  Crops,
} from "./Dashboard.style";
import Typography from "components/base/Typography";

import SegmentedControl from "../../components/base/SegmentedControl";
import { useNavigate } from "react-router-dom";
import HarvestCard from "../../components/module/HarvestCard";
import CurrentWeather from "components/module/CurrentWeather";
import { calculateDaysPassed, formatDate } from "utils/Date";
import Loading from "../../components/base/Loading";
import HourlyDaily from "components/module/HourlyDaily";
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
    onSelectedSearchLocationWeather,
    MOCK_OPTIONS,
    state,
    onSetState,
    weatherData,
    onSelectedWeatherIndexWeather,
    selectedIndex,
  } = props;
  const navigate = useNavigate();

  const handleSelectedSearchLocation = (address: string) => {
    console.log("Weather address " + address);
    onSelectedSearchLocationWeather(address);
  };

  const handleSelectedWeatherIndex = (value: number) => {
    console.log("Weather " + value);
    onSelectedWeatherIndexWeather(value);
  };
  const [squareRef, { width, height }] = useElementSize();

  return (
    <Wrapper>
      {currentLocation &&
        weatherData &&
        weatherData.days &&
        weatherData.days.length && (
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
        )}
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
