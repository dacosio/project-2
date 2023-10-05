import React, { useState } from 'react';
import { JbCardProps } from './JbCard.props';
import Button from '../Button';
import Typography from '../Typography';
import { Container, ButtonDiv } from './JbCard.style';

const JbCard = (props: JbCardProps): JSX.Element => {
  const { title, description } = props;


  return <Container>
    <Typography variant="title5" weight="700">
      {title}
    </Typography>

    <Typography variant="body">
      { description }
    </Typography>

    <ButtonDiv>

    <Button text='Button' variant='primary' size='sm' takeFullWidth={false} style={{color: "purple", backgroundColor: "transparent", textTransform: "uppercase"}} ></Button>
    
    <Button text='Button' variant='primary' size='sm' takeFullWidth={false} style={{color: "purple", backgroundColor: "transparent", textTransform: "uppercase"}} ></Button>

    </ButtonDiv>


  </Container >;

};

export default React.memo(JbCard);
