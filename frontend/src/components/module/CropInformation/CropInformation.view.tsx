import React from "react";
import { CropInformationProps } from "./CropInformation.props";
import {
  Container,
  FertilizerContainer,
  InformationContainer,
  SuggestionContainer,
  TipCircleContainer,
  TipContainer,
} from "./CropInformation.style";
import Typography from "../../../components/base/Typography";
import { Hidden, Visible } from "react-grid-system";
import Accordion from "../../../components/base/Accordion";
import CropCondition from "../../../components/base/CropCondition";

const CropInformation = (props: CropInformationProps): JSX.Element => {
  const { ph, nitrogen, phosphorus, potassium, suggestions, tips } = props;

  const Fertilizers = (
    <>
      <div>
        <Typography variant="body" weight="700">
          pH Level
        </Typography>
        <div>
          <Typography variant="body">{ph}</Typography>
        </div>
      </div>
      <div>
        <Typography variant="body" weight="700">
          Nitrogen (N)
        </Typography>
        <div>
          <Typography variant="body">{nitrogen}</Typography>
        </div>
      </div>
      <div>
        <Typography variant="body" weight="700">
          Phosphorus (P)
        </Typography>
        <div>
          <Typography variant="body">{phosphorus}</Typography>
        </div>
      </div>
      <div>
        <Typography variant="body" weight="700">
          Potassium (K)
        </Typography>
        <div>
          <Typography variant="body">{potassium}</Typography>
        </div>
      </div>
    </>
  );

  const Tips = (
    <>
      {tips.map((tip, index) => (
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

  const Suggestions = (
    <>
      {suggestions.map((suggestion, index) => (
        <div key={index}>
          <Typography variant="body" weight="700">
            {suggestion}
          </Typography>
        </div>
      ))}
    </>
  );

  return (
    <Container>
      <InformationContainer>
        <Typography variant="title5">Crop Information</Typography>
        <div>
          <CropCondition title="Temperature" output="0.0 - 0.0°C" />
          <CropCondition title="Humidity" output="00 - 00%" />
          <CropCondition title="Growth" output="0 - 0 months" />
          <CropCondition title="Soil pH" output="0 - 0 months" />
        </div>
      </InformationContainer>
      <FertilizerContainer>
        <Hidden xs sm>
          <Typography variant="title5">Fertilizer Composition</Typography>
          <div>{Fertilizers}</div>
        </Hidden>
        <Visible xs sm>
          <Accordion label="Fertilizer Composition">{Fertilizers}</Accordion>
        </Visible>
      </FertilizerContainer>
      <TipContainer>
        <Hidden xs sm>
          <Typography variant="title5">Growing Tips</Typography>
          <div>{Tips}</div>
        </Hidden>
        <Visible xs sm>
          <Accordion label="Growing Tips">{Tips}</Accordion>
        </Visible>
      </TipContainer>
      <SuggestionContainer>
        <Hidden xs sm>
          <Typography variant="title5">You Will Need</Typography>
          <div>{Suggestions}</div>
        </Hidden>
        <Visible xs sm>
          <Accordion label="You Will Need">{Suggestions}</Accordion>
        </Visible>
      </SuggestionContainer>
    </Container>
  );
};

export default React.memo(CropInformation);
