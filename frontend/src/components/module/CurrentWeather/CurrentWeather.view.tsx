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
} from "./CurrentWeather.style";
import {
  Clear,
  Cloudy,
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
import CurrentDate from "../../base/CurrentDate";

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
        : 80
      : window.innerWidth > 1200
      ? 160
      : window.innerWidth > 991
      ? 122
      : window.innerWidth > 767
      ? 120
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
            : 80
          : window.innerWidth > 1200
          ? 160
          : window.innerWidth > 991
          ? 122
          : window.innerWidth > 767
          ? 120
          : 80
      );
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <>
      {page === "dashboard" ? (
        <DashboardContainer
          gradientColor1={gradientColor1}
          gradientColor2={gradientColor2}
        >
          <AddressDateForecastSVGContainer>
            <AddressDateForecastContainer>
              <AddressContainer>
                <LocationSvg width={22} height={22} fill="#FFFFFF" />
                <Typography variant="title3" textColor="white">
                  {currentLocation}{" "}
                </Typography>
              </AddressContainer>
              <DateForecastContainer>
                <DateContainer>
                  {" "}
                  <Typography variant="body" textColor="white">
                    <CurrentDate />
                  </Typography>
                </DateContainer>
                <ForecastContainer>
                  <Typography variant="body" textColor="white">
                    {forecast}
                  </Typography>
                </ForecastContainer>
              </DateForecastContainer>
              <DashboardTemperatureLowHighContainer>
                <TemperatureContainer>
                  <Typography
                    variant="body"
                    style={
                      size === 120
                        ? {
                            fontSize: "54px",
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
                    {precipitation}%
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
            </AddressDateForecastContainer>
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
            <SearchContainer>
              <LocationSearch
                onClickControl={(value) => {
                  onSelectedSearchLocation(value);
                }}
              ></LocationSearch>
            </SearchContainer>
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
                <Typography variant="title3" textColor="white">
                  {currentLocation}{" "}
                </Typography>
              </AddressContainer>
              <DateForecastContainer>
                <DateContainer>
                  {" "}
                  <Typography variant="body" textColor="white">
                    <CurrentDate />
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
                      size === 80
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
