import React from 'react';
import { CropConditionProps, ConditionTitle } from './CropCondition.props';
import { Container, ContentContainer, Logo, Temps } from './CropCondition.style';
import Typography from './../Typography';
import IconClock from '../SVG/IconClock';
import IconTemperature from '../SVG/IconTemperature';
import IconHumidity from '../SVG/IconHumidity';
import IconSoil from '../SVG/IconSoil';


const CropCondition = (props: CropConditionProps): JSX.Element => {
  const { title, output } = props;
  const renderSVG = () => {
    switch (title) {
      case ConditionTitle.Temperature:
        return <IconTemperature />;
      case ConditionTitle.Humidity:
        return <IconHumidity />;
      case ConditionTitle.Yield:
        return <IconClock />;
      case ConditionTitle.SoilPh:
        return <IconSoil />;
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
