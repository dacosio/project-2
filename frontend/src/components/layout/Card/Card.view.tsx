import React, { useEffect, useState } from 'react';
import { CardProps } from './Card.props';
import { Container, Buttons } from './Card.style';
import Typography from '../../../components/base/Typography';
import Button from '../../../components/base/Button/Button.view';
import axios from 'axios';

const Card = (props: CardProps): JSX.Element => {
  const { title, body } = props;

  const handleClick = () => {
    console.log(title)
  }

  return (
    <Container>
      <Typography variant='title5' weight='black' textColor='shade8'>
        {title}
      </Typography>
      <Typography variant='body' textColor='shade6' style={{ margin: '2rem 0' }}>
        {body}
      </Typography>
      <Buttons>
        <Button text='Button' onClick={handleClick} variant="accent" size='lg' style={{ backgroundColor: "transparent", padding: "1rem 0", textTransform: "uppercase" }} />
        <Button text='Button' onClick={handleClick} variant="accent" size='lg' style={{ backgroundColor: "transparent", padding: "1rem 0", textTransform: "uppercase" }} />
      </Buttons>
    </Container>)
};

export default React.memo(Card);
