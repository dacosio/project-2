import React, { useState, useEffect } from 'react';
import { WeatherCardProps } from './WeatherCard.props';
import {
  Container,
  LocationContainer,
  TemperatureContainer,
  ForecastContainer,
  CloudContainer
} from './WeatherCard.style';
import Typography from '../Typography';
import CurrentDate from '../CurrentDate/CurrentDate.view';
import Rainy from '../SVG/Rainy';


const WeatherCard = (props: WeatherCardProps): JSX.Element => {
  const [weatherData, setWeatherData] = useState(
    {
      forecast: 'Rain & Thunderstorm',
      highTemperature: '22°C',
      lowTemperature: '18°C',
      currentTemperature: '20°C',
      humidity: '65%',
      windSpeed: '18%',
      precipitation: '0%',
    }
  );
  const date = new Date();

  useEffect(() => {
    // get data from weather API and use the data on setWeatherData
  }, [])

  return (
    <Container className={`weather-card ${weatherData.forecast.toLowerCase().replace(/ /g, '-')}`}>
      {weatherData ?
        <div className="weather-content">
          <div className="right-side-content">
            <LocationContainer>
              <Typography variant='subtitle' weight='700'>Vancouver, BC</Typography>
              <Typography variant='body'>
                <CurrentDate />
              </Typography>
            </LocationContainer>
            <TemperatureContainer>
              <Typography variant='title3' weight='700'>{weatherData.forecast}</Typography>
              <Typography variant='title1' weight='900'>{weatherData.currentTemperature}</Typography>
              <Typography variant='body'>High <span>{weatherData.highTemperature}</span> Low <span>{weatherData.lowTemperature}</span></Typography>
            </TemperatureContainer>
          </div>

          <div className='left-side-content'>
            <CloudContainer>
              {/* <ImageContainer src={Clouds} alt='clouds' /> */}
              <Rainy />
            </CloudContainer>
            <ForecastContainer>
              <Typography variant='body' align='left'>Precipitation <span>{weatherData.precipitation}</span></Typography>
              <Typography variant='body' align='left'>Humidity <span>{weatherData.humidity}</span></Typography>
              <Typography variant='body' align='left'>Wind <span>{weatherData.windSpeed}</span></Typography>
            </ForecastContainer>
          </div>
        </div>
        :
        <Typography>Loading weather data.</Typography>
      }
    </Container>
  );
};

export default React.memo(WeatherCard);
