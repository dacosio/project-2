import React from 'react';
import { JbCardProps } from './JbCard.props';
import { Container } from './JbCard.style';

const JbCard = (props: JbCardProps): JSX.Element => {


  return <Container> JbCard

    <div className="hello"></div>
    <div className="card">
      <div className="cardContent">
        <h3>Subtitle 1</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dolorem reiciendis ab rem sunt architecto officia nemo. Consequuntur commodi tenetur beatae iure, aut placeat.</p>
      </div>
      <div className="buttonsDiv">
        <button className="buttonDefault">Button</button>
        <button className="buttonDefault">Button</button>
      </div>
    </div>

    <div className="checkbox">
      <input type="checkbox" className="checkbox" />
    </div>

  </Container>;
};

export default React.memo(JbCard);
