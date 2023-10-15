import React from 'react';
import { CropGuideGeneratedProps } from './CropGuide.props';
import { Container, Conditions, GridLayout } from './CropGuide.style';
import CropCondition from './../../../components/base/CropCondition'

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

  return (
    <GridLayout>
      <Container key="1" className="col-lg-5">
        <div style={{ height: '400px' }}></div>
        <Conditions>
          {getCondition()}
        </Conditions>
      </Container>
      <Container key="2" className="col-lg-3-5">Content 2</Container>
      <Container key="3" className="col-lg-3-5">Content 3</Container>

    </GridLayout>
  );
};

export default CropGuideView;
