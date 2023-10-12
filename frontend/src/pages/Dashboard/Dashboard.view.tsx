import React from 'react';
import { DashboardGeneratedProps } from './Dashboard.props';
import { Container } from './Dashboard.style';
import WeatherCard from '../../components/base/WeatherCard';

const DashboardView = (props: DashboardGeneratedProps) => {
  return (
    <Container>
      Dashboard
      <WeatherCard />
    </Container>);
};

export default DashboardView;
