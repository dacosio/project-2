import React from 'react';
import { JbCardProps } from './JbCard.props';
import { Container, Button, Card, ButtonsDiv } from './JbCard.style';

const JbCard = (props: JbCardProps): JSX.Element => {


  return <Container> JbCard

    <Card>
      <div className="cardContent">
        <h3>Subtitle 1</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dolorem reiciendis ab rem sunt architecto officia nemo. Consequuntur commodi tenetur beatae iure, aut placeat.</p>
      </div>
      <ButtonsDiv>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </ButtonsDiv>
    </Card>

    <div className="checkbox">
      <input type="checkbox" className="checkbox" />
    </div>

  </Container >;


};

export default React.memo(JbCard);
