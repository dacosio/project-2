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
import Accordion from "./../../base/Accordion";

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

  return (
    <Container>
      <InformationContainer>
        <Typography variant="title3">Crop Information</Typography>
        <div>
          <Hidden xs sm md lg>
            {/* <div>
      <CropCondition

        variant="temperature"
        description="0.0 - 0.0°C"
      />
    </div>
    <div>
      <CropCondition
        variant="humidity"
        description="00 - 00%"
      />
    </div>
    <div>
      <CropCondition
        variant="duration"
        description="0 - 0 months"
      />
    </div> */}
          </Hidden>
          <Visible xs sm md lg>
            <div>
              <Typography variant="body" weight="700">
                Ideal Temperature
              </Typography>
              <div>
                <Typography variant="body">0.0 - 0.0°C</Typography>
              </div>
            </div>
            <div>
              <Typography variant="body" weight="700">
                Ideal Humidity
              </Typography>
              <div>
                <Typography variant="body">00 - 00%</Typography>
              </div>
            </div>
            <div>
              <Typography variant="body" weight="700">
                Growth Duration
              </Typography>
              <div>
                <Typography variant="body">0 - 0 months</Typography>
              </div>
            </div>
          </Visible>
        </div>
      </InformationContainer>
      <FertilizerContainer>
        <Hidden xs sm>
          <Typography variant="title3">Fertilizer Composition</Typography>
          <div>{Fertilizers}</div>
        </Hidden>
        <Visible xs sm>
          <Accordion label="Fertilizer Composition">{Fertilizers}</Accordion>
        </Visible>
      </FertilizerContainer>
      <SuggestionContainer>
        <Hidden xs sm>
          <Typography variant="title3">You Will Need</Typography>
          <div>{Suggestions}</div>
        </Hidden>
        <Visible xs sm>
          <Accordion label="You Will Need">{Suggestions}</Accordion>
        </Visible>
      </SuggestionContainer>
      <TipContainer>
        <Hidden xs sm>
          <Typography variant="title3">Growing Tips</Typography>
          <div>{Tips}</div>
        </Hidden>
        <Visible xs sm>
          <Accordion label="Growing Tips">{Tips}</Accordion>
        </Visible>
      </TipContainer>
    </Container>
  );
};

export default React.memo(CropInformation);
