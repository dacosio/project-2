import React from 'react';
import { CropGuideGeneratedProps } from './CropGuide.props';
import { Container, Conditions, GridLayout } from './CropGuide.style';
import CropCondition from './../../../components/base/CropCondition'
import Typography from 'components/base/Typography';
import Search from 'components/base/Search';

const CropGuideView = (props: CropGuideGeneratedProps) => {
  const conditions = [
    {
      title: "Temperature",
      output: "21-27°C"
    },
    {
      title: "Humidity",
      output: "65-85%"
    },
    {
      title: "Expected Harvest",
      output: "50-65 days"
    },
    {
      title: "Yield Prediction (fruits per crop)",
      output: "150-200"
    }
  ]

  const getCondition = () => {
    return conditions.map((con, i) =>
      <CropCondition key={i} title={con.title} output={con.output} />
    )
  }

  {/* <Conditions>
          {getCondition()}
        </Conditions> */}

  return (
    <Container>
      <div>
        <Typography variant='title2'>Crop Guide</Typography>
        <Typography variant='subtitle'>Have a crop or two you want to plant?<br />Get tips on growing them from us!</Typography>
        <Search dynamicPlaceholder='Search for crop, plants, fruits etc...' onSearch={function (searchTerm: string): void {
          throw new Error('Function not implemented.');
        }} searchResults={undefined} />
      </div>
    </Container>
  );
};

export default CropGuideView;
