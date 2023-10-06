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
import Clouds from '../SVG/Clouds';
import Moment from 'react-moment';

const WeatherCard = (props: WeatherCardProps): JSX.Element => {
  const [weatherData, setWeatherData] = useState(
    {
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
    <Container className='weather-card'>
      {weatherData ?
        <div className="weather-content">
          <div className="right-side-content">
            <LocationContainer>
              <Typography variant='body' weight='700'>Vancouver, BC</Typography>
              <Typography variant='caption'>
                <Moment format="ddd, MMM D, YYYY">{date}</Moment>
              </Typography>
            </LocationContainer>
            <TemperatureContainer>
              <Typography variant='title5' weight='700'>Partly Cloudy</Typography>
              <Typography variant='title2' weight='900'>{weatherData.currentTemperature}</Typography>
              <Typography variant='label'>High <span>{weatherData.highTemperature}</span> Low <span>{weatherData.lowTemperature}</span></Typography>
            </TemperatureContainer>
          </div>

          <div className='left-side-content'>
            <CloudContainer>
              {/* <ImageContainer src={Clouds} alt='clouds' /> */}
              <Clouds fill='green' />
            </CloudContainer>
            <ForecastContainer>
              <Typography variant='label' align='right'>Precipitation <span>{weatherData.precipitation}</span></Typography>
              <Typography variant='label' align='right'>Humidity <span>{weatherData.humidity}</span></Typography>
              <Typography variant='label' align='right'>Wind <span>{weatherData.windSpeed}</span></Typography>
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
