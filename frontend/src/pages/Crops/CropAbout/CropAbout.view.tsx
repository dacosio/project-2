import React from "react";
import { useParams } from "react-router-dom";
import {
  ButtonWrapper,
  Wrapper,
  CropInformation,
  TipsContainer,
  FertilizerContainer,
  SuggestionsContainer,
  TipCircleContainer,
} from "./CropAbout.style";
import { CropAboutProps } from "./CropAbout.props";
import Typography from "components/base/Typography";
import Button from "components/base/Button";
import { Container, Row, Col, Hidden, Visible } from "react-grid-system";
import CropCondition from "components/base/CropCondition";
import Accordion from "../../../components/base/Accordion";

const CropAboutView = (props: CropAboutProps): JSX.Element => {
  const { crops, handlePlantLater, handlePlantNow } = props;

  const { id } = useParams();
  const crop = id ? crops.find((crop) => crop._id === parseInt(id)) : undefined;

  const conditions = [
    {
      title: "Temperature",
      output: crop ? crop.idealTemperature : "N/A",
    },
    {
      title: "Humidity",
      output: crop ? crop.humidity : "N/A",
    },
    {
      title: "Growth",
      output: crop ? crop.growthDuration : "N/A",
    },
    {
      title: "Soil pH",
      output: crop ? crop.soilPh : "N/A",
    },
  ];

  const getCondition = () => {
    return conditions.map((con, i) => (
      <CropCondition key={i} title={con.title} output={con.output} />
    ));
  };

  const Fertilizers = (
    <>
      <div>
        <Typography variant="body" weight="700">
          Nitrogen (N)
        </Typography>
        <div>
          <Typography variant="body">{crop?.soilN}</Typography>
        </div>
      </div>
      <div>
        <Typography variant="body" weight="700">
          Phosphorus (P)
        </Typography>
        <div>
          <Typography variant="body">{crop?.soilP}</Typography>
        </div>
      </div>
      <div>
        <Typography variant="body" weight="700">
          Potassium (K)
        </Typography>
        <div>
          <Typography variant="body">{crop?.soilK}</Typography>
        </div>
      </div>
    </>
  );

  const Suggestions = (
    <>
      {crop?.tools.map((suggestion, index) => (
        <div key={index}>
          <Typography variant="body" weight="700">
            {suggestion}
          </Typography>
        </div>
      ))}
    </>
  );

  const Tips = (
    <>
      {crop?.growingTips.map((tip, index) => (
        <div key={index}>
          <TipCircleContainer>
            <Typography variant="title5" weight="700">
              {index + 1}
            </Typography>
          </TipCircleContainer>
          <Typography variant="body">{tip}</Typography>
        </div>
      ))}
    </>
  );

  return (
    <Wrapper>
      <Container className="container">
        <Row gutterWidth={20}>
          <Col>
            <Typography variant="title3">{crop?.name}</Typography>
          </Col>
          <Col>
            <Hidden xs>
              <ButtonWrapper>
                <Button
                  text="Plant Later"
                  variant="outline"
                  onClick={() => handlePlantLater()}
                />
                <Button
                  text="Plant Now"
                  variant="primary"
                  onClick={() => handlePlantNow()}
                />
              </ButtonWrapper>
            </Hidden>
          </Col>
        </Row>
        <Row gutterWidth={20} style={{ rowGap: "20px" }}>
          <Col xl={4} lg={6}>
            <img src={crop?.img_url} />
          </Col>
          <Col xl={4} lg={6}>
            <div className="box-container">
              <Typography variant="title5">About</Typography>
              <Typography variant="body">{crop?.description}</Typography>
            </div>
          </Col>
          <Col xl={4} lg={6}>
            <div className="box-container">
              <CropInformation>
                <Typography variant="title5">Crop Information</Typography>
                {getCondition()}
              </CropInformation>
            </div>
          </Col>
          <Col xl={4} lg={6}>
            <FertilizerContainer className="box-container">
              <Hidden xs>
                <Typography variant="title5">Fertilizer Composition</Typography>
                <div>{Fertilizers}</div>
              </Hidden>
              <Visible xs>
                <Accordion label="Fertilizer Composition">
                  {Fertilizers}
                </Accordion>
              </Visible>
            </FertilizerContainer>
          </Col>
          <Col xl={4} lg={6}>
            <TipsContainer className="box-container">
              <Hidden xs>
                <Typography variant="title5">Growing Tips</Typography>
                <div>{Tips}</div>
              </Hidden>
              <Visible xs>
                <Accordion label="Growing Tips">{Tips}</Accordion>
              </Visible>
            </TipsContainer>
          </Col>
          <Col xl={4} lg={6}>
            <SuggestionsContainer className="box-container">
              <Hidden xs>
                <Typography variant="title5">You will need</Typography>
                <div>{Suggestions}</div>
              </Hidden>
              <Visible xs>
                <Accordion label="You will need">{Suggestions}</Accordion>
              </Visible>
            </SuggestionsContainer>
          </Col>
        </Row>
        <Row>
          <Visible xs>
            <ButtonWrapper>
              <Button
                text="Plant Later"
                variant="outline"
                onClick={() => handlePlantLater()}
              />
              <Button
                text="Plant Now"
                variant="primary"
                onClick={() => handlePlantNow()}
              />
            </ButtonWrapper>
          </Visible>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default CropAboutView;
