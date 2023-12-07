import { WeatherGeneratedProps } from "./Weather.props";
import { BottomContainer, Container } from "./Weather.style";
import CurrentWeather from "components/module/CurrentWeather";
import HourlyDaily from "components/module/HourlyDaily";
import SegmentedControl from "components/base/SegmentedControl";
import Wind from "components/base/Wind";
import Precipitation from "components/base/Precipitation";
import Humidity from "../../components/base/Humidity";
import WeatherAlert from "components/base/WeatherAlert";
import WeatherTip from "components/base/WeatherTip";
import Loading from "components/base/Loading";

const WeatherView = (props: WeatherGeneratedProps) => {
  const {
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
    collapseState,
    ...weatherGeneratedProps
  } = props;

  /**
   * Handles Selected Search Location
   * @param address
   */
  const handleSelectedSearchLocation = (address: string) => {
    onSelectedSearchLocationWeather(address);
  };

  /**
   * Handles Selected Weather Index
   * @param value
   */
  const handleSelectedWeatherIndex = (value: number) => {
    onSelectedWeatherIndexWeather(value);
  };

  const getCurrentHour24Format = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      hour12: false,
    };
    const hour24 = new Intl.DateTimeFormat("en-GB", options).format(now);
    return hour24; // This will return the hour part only, like "03" or "15"
  };

  const getIndex = (value: string) => {
    if (value === MOCK_OPTIONS[0]) {
      const currentTimeIndex = parseInt(getCurrentHour24Format());
      return currentTimeIndex;
    } else {
      return 1;
    }
  };

  /**
   * function to get the day name of the input date time
   * @param datetime
   * @param state
   * @returns
   */
  const getDayName = (datetime: string) => {
    // Assuming 'dateString' is in 'YYYY-MM-DD' format
    const date = new Date(datetime);

    // Options to return the weekday
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long", // 'long' represents the full name of the day
    };

    // 'en-US' locale. You can change this to another locale if you want the day in another language.
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const getNextExpectedRainfall = () => {
    let rainfallFlag = false;
    let rainfallIndex = 0;
    let nextExpectedRainfallDay = "sssss";
    for (let i = 2; i < weatherData.days.length; i++) {
      if (weatherData.days[i].precip > 0) {
        rainfallFlag = true;
        rainfallIndex = i;
        break;
      }
    }

    if (rainfallFlag) {
      nextExpectedRainfallDay = getDayName(
        weatherData.days[rainfallIndex].datetime
      );
      return `Next expected rain is on ${nextExpectedRainfallDay}`;
    } else {
      return `No rainfall for next 15 days`;
    }
  };

  return (
    <Container collapseState={collapseState}>
      {currentLocation &&
      weatherData &&
      weatherData.days &&
      weatherData.days.length > 0 ? (
        <>
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
            page="weather"
            onSelectedSearchLocation={handleSelectedSearchLocation}
            collapseState={collapseState}
          />
          <SegmentedControl
            options={MOCK_OPTIONS}
            selectedOption={state}
            onClickControl={(value: string) => {
              onSetState(value);
              onSelectedWeatherIndexWeather(getIndex(value));
            }}
          />
          <HourlyDaily
            weatherDataArray={
              state === MOCK_OPTIONS[0] ? weatherData.days[0] : weatherData
            }
            state={state}
            onSelectedWeatherIndex={handleSelectedWeatherIndex}
            index={selectedIndex}
            page="weather"
          ></HourlyDaily>

          <BottomContainer collapseState={collapseState}>
            <Wind
              windSpeed={
                state === MOCK_OPTIONS[0]
                  ? weatherData.days[0].hours[selectedIndex].windspeed
                  : weatherData.days[selectedIndex].windspeed
              }
              gustSpeed={
                state === MOCK_OPTIONS[0]
                  ? weatherData.days[0].hours[selectedIndex].windgust
                  : weatherData.days[selectedIndex].windgust
              }
              windDirection={
                state === MOCK_OPTIONS[0]
                  ? weatherData.days[0].hours[selectedIndex].winddir
                  : weatherData.days[selectedIndex].winddir
              }
              collapseState={collapseState}
            ></Wind>

            <Precipitation
              precip={
                state === MOCK_OPTIONS[0]
                  ? weatherData.days[0].hours[selectedIndex].precip
                  : weatherData.days[selectedIndex].precip
              }
              nextExpectedRainfall={getNextExpectedRainfall()}
              collapseState={collapseState}
            ></Precipitation>

            <Humidity
              humidity={
                state === MOCK_OPTIONS[0]
                  ? weatherData.days[0].hours[selectedIndex].humidity
                  : weatherData.days[selectedIndex].humidity
              }
              dew={
                state === MOCK_OPTIONS[0]
                  ? weatherData.days[0].hours[selectedIndex].dew
                  : weatherData.days[selectedIndex].dew
              }
              collapseState={collapseState}
            ></Humidity>

            {weatherData.alerts.length > 0 ? (
              <WeatherAlert
                alert={weatherData.alerts[0].headline}
                collapseState={collapseState}
              ></WeatherAlert>
            ) : (
              <WeatherTip
                condition={
                  state === MOCK_OPTIONS[0]
                    ? weatherData.days[0].hours[selectedIndex].conditions
                    : weatherData.days[selectedIndex].conditions
                }
                collapseState={collapseState}
              ></WeatherTip>
            )}
          </BottomContainer>
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default WeatherView;
