import React from 'react';
import { CropGuideGeneratedProps } from './CropGuide.props';
import { ContentContainer, Placeholder } from './CropGuide.style';
import CropCondition from './../../../components/base/CropCondition'
import { Container, Row, Col } from 'react-grid-system';
import Typography from './../../../components/base/Typography';
import Button from './../../../components/base/Button';
import { YourCropsSvg, Eye } from 'components/base/SVG';
import { setConfiguration } from 'react-grid-system';

const CropGuideView = (props: CropGuideGeneratedProps) => {
  setConfiguration({ gutterWidth: 30 });

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

  // const getCondition = () => {
  //   return conditions.map((con, i) =>
  //     <CropCondition key={i} title={con.title} output={con.output} />
  //   )
  // }


  const getCondition = (count: number | undefined, fromBeginning: boolean) => {
    const conditionsToDisplay = fromBeginning
      ? conditions.slice(0, count) // Display from the beginning
      : conditions.slice(count); // Display from the end

    return conditionsToDisplay.map((con, i) => (
      <CropCondition key={i} title={con.title} output={con.output} />
    ));
  };

  return (
    <ContentContainer>
      <Container>
        <Row>
          <Col lg={5} md={6} sm={12}>
            <Placeholder style={{ height: '362px', backgroundColor: 'lightgray' }} />
            <Col style={{ width: '100%', height: '480px', paddingTop: '1rem', paddingBottom: '1rem' }}>
              <Row className='crop-condition'>
                <Typography variant='title5' weight='bold' style={{ flex: '1', flexBasis: '100%', marginBottom: '1rem' }}>Best Conditions</Typography>
                {getCondition(2, true)}
              </Row>
              <Row className='crop-info'>
                <Typography variant='title5' weight='bold' style={{ flex: '1', flexBasis: '100%', margin: '1rem 0' }}>Crop Info</Typography>
                {getCondition(2, false)}
              </Row>
            </Col>
          </Col>
          <Col lg={3.5} md={6} sm={12}>
            <div style={{ width: '100%', height: '362px', marginTop: '1rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                  text="Favourite"
                  variant="outline"
                  icon={<Eye fill="#E35D32" height={15} width={20} />}
                  iconPosition="before"
                  style={{ marginBottom: "5px" }}
                />
                <Button
                  text="Plant New"
                  variant="tonal"
                  icon={<Eye fill="#E35D32" height={15} width={20} />}
                  iconPosition="before"
                  style={{ marginBottom: "5px" }}
                />
              </div>
              <div style={{ backgroundColor: 'white', height: '288px', marginTop: '1rem', borderRadius: '1rem' }}></div>
            </div>
            <div style={{ width: '100%', height: '480px', marginTop: '1rem', marginBottom: '1rem', paddingTop: '1rem', paddingBottom: '1rem' }}>
              <Typography variant='title5' weight='bold' style={{ flex: '1', flexBasis: '100%', marginBottom: '1rem' }}>Suggested Features</Typography>
              <div style={{ backgroundColor: 'white', height: '401px', marginTop: '1rem', borderRadius: '1rem' }}></div>
            </div>
          </Col>
          <Col lg={3.5} md={6} sm={12}>
            <Placeholder style={{ height: '362px', backgroundColor: 'white' }} />
            <div style={{ width: '100%', height: '480px', paddingTop: '1rem', paddingBottom: '1rem' }}>
              <div style={{ backgroundColor: 'white', height: '449px', borderRadius: '1rem' }}></div>
            </div>
          </Col>
        </Row>
      </Container>
    </ContentContainer>
  );
};

export default CropGuideView;
