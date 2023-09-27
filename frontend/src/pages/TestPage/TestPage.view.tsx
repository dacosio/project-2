import React from 'react';
import { TestPageGeneratedProps } from './TestPage.props';
import { Container } from './TestPage.style';
import CardView from 'components/layout/Card/Card.view';

const TestPageView = (props: TestPageGeneratedProps) => {
  return <Container> <CardView /> </Container>;
};

export default TestPageView;
