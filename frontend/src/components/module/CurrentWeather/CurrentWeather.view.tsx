import React, { useEffect, useState } from "react";
import { CurrentWeatherProps } from "./CurrentWeather.props";
import {
  Container,
  AddressDateForecastContainer,
  AddressDateForecastSVGContainer,
  AddressContainer,
  DateForecastContainer,
  DateContainer,
  ForecastContainer,
  SVGContainer,
  SearchTemperatureLowHighContainer,
  TemperatureLowHighContainer,
  TemperatureLowHighMTContainer,
  TemperatureContainer,
  LowHighContainer,
  LowContainer,
  HighContainer,
  SearchContainer,
  DashboardContainer,
  LowHighMTContainer,
  DashboardTemperatureLowHighContainer,
  DashboardSearchContainer,
  DashboardHumidityContainer,
  DashboardPrecipitationContainer,
  DashboardWindContainer,
  DashboardPrecipitationHumidityWindContainer,
  DashboardSVGContainer,
  DashboardLowHighMTContainer,
  DashboardDateForecastContainer,
  DashboardForecastContainer,
  DashboardAddressDateForecastContainer,
  DashSearchContainer,
} from "./CurrentWeather.style";
import {
  Clear,
  LocationSvg,
  Overcast,
  PartiallyCloudy,
  Rain,
  Snow,
  SnowRain,
  ThunderStorm,
  ThunderStormRain,
} from "../../base/SVG";
import LocationSearch from "../LocationSearch";
import Typography from "../../base/Typography";

const CurrentWeather = (props: CurrentWeatherProps): JSX.Element => {
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
    onSelectedSearchLocation,
    collapseState,
    ...currentWeatherProps
  } = props;
  const [size, setSize] = useState(
    page === "weather"
      ? window.innerWidth > 1200
        ? 182
        : window.innerWidth > 768
        ? 154
        : window.innerWidth > 550
        ? 120
        : window.innerWidth > 370
        ? 80
        : 60
      : window.innerWidth > 1200 && collapseState
      ? 160
      : window.innerWidth > 1200
      ? 110
      : window.innerWidth > 992 && collapseState
      ? 122
      : window.innerWidth > 992
      ? 96
      : window.innerWidth > 767
      ? 98
      : window.innerWidth < 432
      ? 60
      : 80
  );

  useEffect(() => {
    const handleResize = () => {
      setSize(
        page === "weather"
          ? window.innerWidth > 1200
            ? 182
            : window.innerWidth > 768
            ? 154
            : window.innerWidth > 550
            ? 120
            : window.innerWidth > 370
            ? 80
            : 60
          : window.innerWidth > 1200 && collapseState
          ? 160
          : window.innerWidth > 1200
          ? 110
          : window.innerWidth > 992 && collapseState
          ? 122
          : window.innerWidth > 992
          ? 96
          : window.innerWidth > 767
          ? 98
          : window.innerWidth < 432
          ? 60
          : 80
      );
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });
  let forecastTrimmed = forecast.split(",").map((part) => part.trim());

  const getCurrentDateFormatted = () => {
    // Create a new Date object for the current date and time
    const today = new Date();

    // Options to format the date as "Day, Month Date, Year" (e.g., "Sat, Nov 18, 2023")
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short", // 'short' gives the weekday in abbreviated form (e.g., "Sat")
      year: "numeric",
      month: "short", // 'short' gives the month in abbreviated form (e.g., "Nov")
      day: "numeric",
    };

    console.log(
      `today : ${new Intl.DateTimeFormat("en-US", options).format(today)}`
    );
    // Format the current date using the specified options and 'en-US' locale
    return new Intl.DateTimeFormat("en-US", options).format(today);
  };

  const [currentDateFormatted, setCurrentDateFormatted] = useState(
    getCurrentDateFormatted
  );
  return (
    <>
      {page === "dashboard" ? (
        <DashboardContainer
          gradientColor1={gradientColor1}
          gradientColor2={gradientColor2}
        >
          <AddressDateForecastSVGContainer>
            <DashboardAddressDateForecastContainer>
              <AddressContainer>
                <LocationSvg width={22} height={22} fill="#FFFFFF" />
                <Typography
                  variant={size === 60 ? "title4" : "title3"}
                  textColor="white"
                >
                  {currentLocation}{" "}
                </Typography>
              </AddressContainer>
              <DashboardDateForecastContainer>
                <DateContainer>
                  {" "}
                  <Typography variant="body" textColor="white">
                    {currentDateFormatted}
                  </Typography>
                </DateContainer>
                <DashboardForecastContainer>
                  <Typography variant="body" textColor="white">
                    {forecastTrimmed[0]}
                  </Typography>
                </DashboardForecastContainer>
              </DashboardDateForecastContainer>
              <DashboardTemperatureLowHighContainer>
                <TemperatureContainer>
                  <Typography
                    variant="body"
                    style={
                      size === 110
                        ? {
                            fontSize: "54px",
                            fontStyle: "normal",
                            fontWeight: 700,
                            lineHeight: "76px",
                            letterSpacing: "-1.4px",
                          }
                        : size === 96
                        ? {
                            fontSize: "54px",
                            fontStyle: "normal",
                            fontWeight: 700,
                            lineHeight: "76px",
                            letterSpacing: "-1.4px",
                          }
                        : size === 98
                        ? {
                            fontSize: "54px",
                            fontStyle: "normal",
                            fontWeight: 700,
                            lineHeight: "76px",
                            letterSpacing: "-1.4px",
                          }
                        : size === 60
                        ? {
                            fontSize: "40px",
                            fontStyle: "normal",
                            fontWeight: 700,
                            lineHeight: "76px",
                            letterSpacing: "-1.4px",
                          }
                        : {
                            fontSize: "70px",
                            fontStyle: "normal",
                            fontWeight: 700,
                            lineHeight: "76px",
                            letterSpacing: "-1.4px",
                          }
                    }
                    textColor="white"
                  >
                    {currentTemperature}°C
                  </Typography>{" "}
                </TemperatureContainer>
                <DashboardLowHighMTContainer>
                  <LowContainer>
                    <Typography variant="small" textColor="white">
                      Low
                    </Typography>{" "}
                    <Typography variant="title5" textColor="white">
                      {lowTemperature}°C
                    </Typography>{" "}
                  </LowContainer>
                  <HighContainer>
                    <Typography variant="small" textColor="white">
                      High
                    </Typography>{" "}
                    <Typography variant="title5" textColor="white">
                      {highTemperature}°C
                    </Typography>{" "}
                  </HighContainer>
                </DashboardLowHighMTContainer>
              </DashboardTemperatureLowHighContainer>

              <DashboardPrecipitationHumidityWindContainer>
                <DashboardPrecipitationContainer>
                  <Typography variant="small" textColor="white">
                    Precipitation
                  </Typography>{" "}
                  <Typography variant="body" textColor="white">
                    {precipitation}mm
                  </Typography>{" "}
                </DashboardPrecipitationContainer>
                <DashboardHumidityContainer>
                  <Typography variant="small" textColor="white">
                    Humidity
                  </Typography>{" "}
                  <Typography variant="body" textColor="white">
                    {humidity}%
                  </Typography>{" "}
                </DashboardHumidityContainer>
                <DashboardWindContainer>
                  <Typography variant="small" textColor="white">
                    Wind
                  </Typography>{" "}
                  <Typography variant="body" textColor="white">
                    {wind}km/h
                  </Typography>{" "}
                </DashboardWindContainer>
              </DashboardPrecipitationHumidityWindContainer>
            </DashboardAddressDateForecastContainer>
            <DashboardSVGContainer>
              {currentCondition === "clear" ? (
                <Clear width={size} height={size} />
              ) : currentCondition === "partiallyCloudy" ? (
                <PartiallyCloudy width={size} height={size} />
              ) : currentCondition === "overcast" ? (
                <Overcast width={size} height={size} />
              ) : currentCondition === "rain" ? (
                <Rain width={size} height={size} />
              ) : currentCondition === "thunderStorm" ? (
                <ThunderStorm width={size} height={size} />
              ) : currentCondition === "snow" ? (
                <Snow width={size} height={size} />
              ) : currentCondition === "snowRain" ? (
                <SnowRain width={size} height={size} />
              ) : currentCondition === "thunderStormRain" ? (
                <ThunderStormRain width={size} height={size} />
              ) : (
                <PartiallyCloudy width={size} height={size} />
              )}
            </DashboardSVGContainer>
          </AddressDateForecastSVGContainer>

          <DashboardSearchContainer>
            <DashSearchContainer>
              <LocationSearch
                onClickControl={(value) => {
                  onSelectedSearchLocation(value);
                }}
              ></LocationSearch>
            </DashSearchContainer>
          </DashboardSearchContainer>
        </DashboardContainer>
      ) : (
        <Container
          gradientColor1={gradientColor1}
          gradientColor2={gradientColor2}
        >
          <AddressDateForecastSVGContainer>
            <AddressDateForecastContainer>
              <AddressContainer>
                <LocationSvg width={22} height={22} fill="#FFFFFF" />
                <Typography
                  variant={size === 60 ? "title4" : "title3"}
                  textColor="white"
                >
                  {currentLocation}{" "}
                </Typography>
              </AddressContainer>
              <DateForecastContainer>
                <DateContainer>
                  {" "}
                  <Typography variant="body" textColor="white">
                    {currentDateFormatted}
                  </Typography>
                </DateContainer>
                <ForecastContainer>
                  <Typography variant="body" textColor="white">
                    {forecast}
                  </Typography>
                </ForecastContainer>
              </DateForecastContainer>
              <TemperatureLowHighMTContainer>
                <TemperatureContainer>
                  <Typography
                    variant="body"
                    style={
                      size === 60
                        ? {
                            fontSize: "38px",
                            fontStyle: "normal",
                            fontWeight: 700,
                            lineHeight: "76px",
                            letterSpacing: "-1.4px",
                          }
                        : size === 80
                        ? {
                            fontSize: "50px",
                            fontStyle: "normal",
                            fontWeight: 700,
                            lineHeight: "76px",
                            letterSpacing: "-1.4px",
                          }
                        : {
                            fontSize: "70px",
                            fontStyle: "normal",
                            fontWeight: 700,
                            lineHeight: "76px",
                            letterSpacing: "-1.4px",
                          }
                    }
                    textColor="white"
                  >
                    {currentTemperature}°C
                  </Typography>{" "}
                </TemperatureContainer>
                <LowHighMTContainer>
                  <LowContainer>
                    <Typography variant="small" textColor="white">
                      Low
                    </Typography>{" "}
                    <Typography variant="title5" textColor="white">
                      {lowTemperature}°C
                    </Typography>{" "}
                  </LowContainer>
                  <HighContainer>
                    <Typography variant="small" textColor="white">
                      High
                    </Typography>{" "}
                    <Typography variant="title5" textColor="white">
                      {highTemperature}°C
                    </Typography>{" "}
                  </HighContainer>
                </LowHighMTContainer>
              </TemperatureLowHighMTContainer>
            </AddressDateForecastContainer>
            <SVGContainer>
              {currentCondition === "clear" ? (
                <Clear width={size} height={size} />
              ) : currentCondition === "partiallyCloudy" ? (
                <PartiallyCloudy width={size} height={size} />
              ) : currentCondition === "overcast" ? (
                <Overcast width={size} height={size} />
              ) : currentCondition === "rain" ? (
                <Rain width={size} height={size} />
              ) : currentCondition === "thunderStorm" ? (
                <ThunderStorm width={size} height={size} />
              ) : currentCondition === "snow" ? (
                <Snow width={size} height={size} />
              ) : currentCondition === "snowRain" ? (
                <SnowRain width={size} height={size} />
              ) : currentCondition === "thunderStormRain" ? (
                <ThunderStormRain width={size} height={size} />
              ) : (
                <PartiallyCloudy width={size} height={size} />
              )}
            </SVGContainer>
          </AddressDateForecastSVGContainer>

          <SearchTemperatureLowHighContainer>
            <SearchContainer>
              <LocationSearch
                onClickControl={(value) => {
                  onSelectedSearchLocation(value);
                }}
              ></LocationSearch>
            </SearchContainer>

            <TemperatureLowHighContainer>
              <TemperatureContainer>
                <Typography
                  variant="body"
                  style={{
                    fontSize: "70px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "76px",
                    letterSpacing: "-1.4px",
                  }}
                  textColor="white"
                >
                  {currentTemperature}°C
                </Typography>{" "}
              </TemperatureContainer>
              <LowHighContainer>
                <LowContainer>
                  <Typography variant="small" textColor="white">
                    Low
                  </Typography>{" "}
                  <Typography variant="title4" textColor="white">
                    {lowTemperature}°C
                  </Typography>{" "}
                </LowContainer>
                <HighContainer>
                  <Typography variant="small" textColor="white">
                    High
                  </Typography>{" "}
                  <Typography variant="title4" textColor="white">
                    {highTemperature}°C
                  </Typography>{" "}
                </HighContainer>
              </LowHighContainer>
            </TemperatureLowHighContainer>
          </SearchTemperatureLowHighContainer>
        </Container>
      )}
    </>
  );
};

export default React.memo(CurrentWeather);
