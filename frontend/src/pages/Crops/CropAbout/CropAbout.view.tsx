import React from "react";
import { useParams } from "react-router-dom";
import {
  ButtonWrapper,
  Wrapper,
  Header,
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
import { Toaster } from "react-hot-toast";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import PlantCropModal from "../../../components/module/PlantCropModal";

const CropAboutView = (props: CropAboutProps) => {
  const {
    crops,
    handlePlantLater,
    handlePlantNow,
    visibility,
    setVisibility,
    handlePlant,
  } = props;
  const crop = crops[0];
  const conditions = [
    {
      title: "Temperature",
      output: crop
        ? `${crop.idealTemperature.celcius.min}°C - ${crop.idealTemperature.celcius.max}°C`
        : "N/A",
    },
    {
      title: "Humidity",
      output: crop ? `${crop.humidity.min} - ${crop.humidity.max}%` : "N/A",
    },
    {
      title: "Growth",
      output: crop
        ? `${crop.growthDuration.min} - ${crop.growthDuration.max} days`
        : "N/A",
    },
    {
      title: "Soil pH",
      output: crop ? `${crop.soilPh.min} - ${crop.soilPh.max}` : "N/A",
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
    <>
      <Wrapper>
        <Container className="container">
          <Toaster />
          <Link to={"/crop-guide"}>
            <IoChevronBack />
            <Typography variant="body">Prev</Typography>
          </Link>
          <Row gutterWidth={20}>
            <Col>
              <div className="box-container header">
                <Header>
                  <Typography variant="title3">{crop?.cropName}</Typography>
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
                </Header>
                <img src={crop?.imageURL} />
                <hr />
                <div>
                  <Typography variant="title5" className="title">
                    About
                  </Typography>
                  <Typography variant="body">{crop?.description}</Typography>
                </div>
              </div>
            </Col>
          </Row>
          <Row gutterWidth={20}>
            <Col>
              <div className="box-container">
                <Typography variant="title5">Crop Information</Typography>
                <CropInformation>{getCondition()}</CropInformation>
              </div>
            </Col>
          </Row>
          <Row gutterWidth={20}>
            <Col>
              <FertilizerContainer className="box-container">
                <Hidden xs>
                  <Typography variant="title5">
                    Fertilizer Composition
                  </Typography>
                  <div>{Fertilizers}</div>
                </Hidden>
                <Visible xs>
                  <Accordion label="Fertilizer Composition">
                    {Fertilizers}
                  </Accordion>
                </Visible>
              </FertilizerContainer>
            </Col>
          </Row>
          <Row gutterWidth={20}>
            <Col>
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
          </Row>
          <Row gutterWidth={20}>
            <Col>
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
          <Row gutterWidth={20}>
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
      <PlantCropModal
        isNew={true}
        visibility={visibility}
        setVisibility={setVisibility}
        cropId={crop?._id}
        cropName={crop?.cropName}
        onConfirm={handlePlant}
      />
    </>
  );
};

export default CropAboutView;
