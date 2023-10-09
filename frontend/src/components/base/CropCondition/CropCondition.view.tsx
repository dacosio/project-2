import React from 'react';
import { CropConditionProps, ConditionTitle } from './CropCondition.props';
import { Container, ContentContainer, Logo, Temps } from './CropCondition.style';
import Typography from './../Typography';
import Clock from '../SVG/Clock';
import Thermometer from '../SVG/Thermometer';
import Hygrometer from '../SVG/Hygrometer';
import Apple from '../SVG/Apple';


const CropCondition = (props: CropConditionProps): JSX.Element => {
  const { title, output } = props;
  const renderSVG = () => {
    switch (title) {
      case ConditionTitle.Temperature:
        return <Thermometer />;
      case ConditionTitle.Humidity:
        return <Hygrometer />;
      case ConditionTitle.ExpectedHarvest:
        return <Apple />;
      case ConditionTitle.Yield:
        return <Clock />;
      default:
        return null;
    }
  };
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
