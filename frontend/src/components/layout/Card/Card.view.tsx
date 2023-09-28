import React from 'react';
import { CardProps } from './Card.props';
import { Container, Buttons } from './Card.style';
import Typography from '../../../components/base/Typography';
import Button from '../../../components/base/Button/Button.view';

const Card = (props: CardProps): JSX.Element => {
  return (
    <Container>
      <Typography variant='title5' weight='black' textColor='shade8'>
        Subtitle 1
      </Typography>
      <Typography variant='body' textColor='shade6' style={{ margin: '2rem 0' }}>
        Body 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Typography>
      <Buttons>
        <Button text='Button' variant="purple" size='lg' style={{ backgroundColor: "transparent", padding: "1rem 0", textTransform: "uppercase" }} />
        <Button text='Button' variant="purple" size='lg' style={{ backgroundColor: "transparent", padding: "1rem 0", textTransform: "uppercase" }} />
      </Buttons>
    </Container>)
};

export default React.memo(Card);
