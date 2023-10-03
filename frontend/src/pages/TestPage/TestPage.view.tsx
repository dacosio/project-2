import React from 'react';
import { TestPageGeneratedProps } from './TestPage.props';
import { Container } from './TestPage.style';
import CardView from 'components/layout/Card/Card.view';

const TestPageView = (props: TestPageGeneratedProps) => {
  const {
    data: cards,
    title,
    body,
    ...TestPageGeneratedProps
  } = props;

  console.log(cards)

  const cardItems = Array.isArray(cards) ? (
    cards.map(
      (
        card: {
          _id: string;
          title: string;
          body: string;
        },
        index
      ) => (
        <CardView
          key={card._id}
          id={card._id}
          title={card.title}
          body={card.body}
        />
      )
    )
  ) : null;

  return <Container>{cardItems}</Container>;

};

export default TestPageView;
