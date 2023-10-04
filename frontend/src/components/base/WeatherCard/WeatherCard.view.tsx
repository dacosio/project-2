import React, { useState, useEffect } from 'react';
import { WeatherCardProps } from './WeatherCard.props';
import { Container, ContentContainer, DetailsContainer, ImageContainer } from './WeatherCard.style';
import Typography from '../Typography'
import clouds from './../../../assets/clouds.png'

const WeatherCard = (props: WeatherCardProps): JSX.Element => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // get data from weather API and use the data on setWeatherData
  }, [])

  return (
    <Container className='weather-card'>
      <ContentContainer>
        <div style={{ width: "45%" }}>
          <DetailsContainer>
            <Typography variant='body'>Vancouver, BC</Typography>
            <Typography variant='small'>Sat, Dec 1, 2023</Typography>
          </DetailsContainer>
          <DetailsContainer>
            <Typography variant='title5'>Partly Cloudy</Typography>
            <Typography variant='title2'>20C</Typography>
            <Typography variant='small'>High 22C Low 18C</Typography>
          </DetailsContainer>
        </div>

        <div style={{ width: "55%", display: "flex", alignItems: "flex-end" }}>
          <DetailsContainer>
            <ImageContainer src={clouds} alt='clouds' />
          </DetailsContainer>
          <DetailsContainer>
            <Typography variant='small'>Precipitation</Typography>
            <Typography variant='small'>Humidity</Typography>
            <Typography variant='small'>Wind</Typography>
          </DetailsContainer>
        </div>
      </ContentContainer>
    </Container>
  )
};

export default React.memo(WeatherCard);
