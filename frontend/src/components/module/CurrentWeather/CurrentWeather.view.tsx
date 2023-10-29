import React from "react";
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
  DashboardTemperatureLowHighWindContainer,
  DashboardTemperatureLowHighContainer,
  DashboardPrecipitationContainer,
  DashboardHumidityContainer,
  DashboardWindContainer,
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

              <SearchContainer>
                <LocationSearch
                  onClickControl={(value) => {
                    onSelectedSearchLocation(value);
                  }}
                ></LocationSearch>
              </SearchContainer>
            </AddressDateForecastContainer>
            <SVGContainer>
              {currentCondition === "clear" ? (
                <Clear width={160} height={160} />
              ) : currentCondition === "partiallyCloudy" ? (
                <PartiallyCloudy width={160} height={160} />
              ) : currentCondition === "overcast" ? (
                <Overcast width={160} height={160} />
              ) : currentCondition === "rain" ? (
                <Rain width={160} height={160} />
              ) : currentCondition === "thunderStorm" ? (
                <ThunderStorm width={160} height={160} />
              ) : currentCondition === "snow" ? (
                <Snow width={160} height={160} />
              ) : currentCondition === "snowRain" ? (
                <SnowRain width={160} height={160} />
              ) : currentCondition === "thunderStormRain" ? (
                <ThunderStormRain width={160} height={160} />
              ) : (
                <Cloudy width={160} height={160} />
              )}
            </SVGContainer>
          </AddressDateForecastSVGContainer>

          <DashboardTemperatureLowHighWindContainer>
            <DashboardTemperatureLowHighContainer>
              <TemperatureContainer>
                <Typography variant="title1" textColor="white">
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
            </DashboardTemperatureLowHighContainer>
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
          </DashboardTemperatureLowHighWindContainer>
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
                  <Typography variant="title3" textColor="white">
                    {currentTemperature}°C
                  </Typography>{" "}
                </TemperatureContainer>
                <LowHighContainer>
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
                </LowHighContainer>
              </TemperatureLowHighMTContainer>
            </AddressDateForecastContainer>
            <SVGContainer>
              {currentCondition === "clear" ? (
                <Clear width={160} height={160} />
              ) : currentCondition === "partiallyCloudy" ? (
                <PartiallyCloudy width={160} height={160} />
              ) : currentCondition === "overcast" ? (
                <Overcast width={160} height={160} />
              ) : currentCondition === "rain" ? (
                <Rain width={160} height={160} />
              ) : currentCondition === "thunderStorm" ? (
                <ThunderStorm width={160} height={160} />
              ) : currentCondition === "snow" ? (
                <Snow width={160} height={160} />
              ) : currentCondition === "snowRain" ? (
                <SnowRain width={160} height={160} />
              ) : currentCondition === "thunderStormRain" ? (
                <ThunderStormRain width={160} height={160} />
              ) : (
                <Cloudy width={160} height={160} />
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
                <Typography variant="title1" textColor="white">
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
