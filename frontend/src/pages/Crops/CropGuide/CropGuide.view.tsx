import React from 'react';
import { CropGuideGeneratedProps } from './CropGuide.props';
import { Container, Conditions } from './CropGuide.style';
// import { Responsive, WidthProvider } from "react-grid-layout";
import GridLayout from "react-grid-layout";
import styled from "styled-components";
import CropCondition from './../../../components/base/CropCondition'

const CropGuideView = (props: CropGuideGeneratedProps) => {
  // const ResponsiveGridLayout = WidthProvider(Responsive);
  const layoutLg = [
    { i: '1', x: 0, y: 1, w: 5, h: 2 }, // col-5
    { i: '2', x: 5, y: 0, w: 3.5, h: 1 }, // col-3.5
    { i: '3', x: 8.5, y: 0, w: 3.5, h: 1 }, // col-3.5
  ];

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
    <GridLayout
      layout={layoutLg}
      cols={12}
      rowHeight={400}
      width={1200}
    >
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
