import React from 'react';
import { CropConditionProps } from './CropCondition.props';
import { Container, ContentContainer, Logo, Temps } from './CropCondition.style';
import Typography from './../Typography';
import Clock from '../SVG/Clock';
import Thermometer from '../SVG/Thermometer';
import Hygrometer from '../SVG/Hygrometer';
import Apple from '../SVG/Apple';


const CropCondition = (props: CropConditionProps): JSX.Element => {
  const { title, output } = props;
  const renderSVG = () => {
    if (title === 'Temperature') {
      return <Thermometer />;
    } else if (title === 'Humidity') {
      return <Hygrometer />;
    } else if (title === 'Expected Harvest') {
      return <Apple />
    } else if (title.includes('Yield')) {
      return <Clock />
    }
  }
  return (
    <Container>
      <Typography variant='body' weight='bold' textColor='shade8'>
        {title}
      </Typography>
      <ContentContainer>
        <Logo>
          {renderSVG()}
        </Logo>
        <Temps>
          <Typography variant='title5' textColor='shade8'>
            {output}
          </Typography>
        </Temps>
      </ContentContainer>
    </Container>
  )
};

export default React.memo(CropCondition);
