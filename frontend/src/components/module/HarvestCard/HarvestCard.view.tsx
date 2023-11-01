import React from "react";
import { HarvestCardProps } from "./HarvestCard.props";
import {
  Bottom,
  Container,
  Harvest,
  Planted,
  Progress,
  Title,
  Yield,
} from "./HarvestCard.style";
import Typography from "../../base/Typography";
import { ThreeDots } from "../../base/SVG";
import CircleProgress from "../../base/CircleProgress";

const HarvestCard = (props: HarvestCardProps): JSX.Element => {
  const {
    cropName,
    value,
    maxValue,
    datePlanted,
    estYield,
    height,
    width,
    mobile = false,
    ...rest
  } = props;

  const ready = value / maxValue;
  const textVariant = mobile ? "crop" : "small";
  return (
    <Container>
      <Title>
        <Typography
          variant={mobile ? "small" : "body"}
          weight="700"
          textColor="secondary">
          {cropName}
        </Typography>
        <ThreeDots />
      </Title>
      <Progress>
        <CircleProgress
          value={value}
          maxValue={maxValue}
          {...rest}
          style={{ height, width }}
        />
      </Progress>
      <Harvest>
        <Typography variant={textVariant} align="center">
          {ready === 1 ? "Ready to " : "Before"} Harvest
        </Typography>
      </Harvest>
      <Bottom mobile={mobile}>
        <Planted mobile={mobile}>
          <Typography variant={textVariant} weight="700" textColor="secondary">
            Planted
          </Typography>
          <Typography variant={textVariant} textColor="secondary">
            {datePlanted}
          </Typography>
        </Planted>
        <Yield mobile={mobile}>
          <Typography variant={textVariant} weight="700" textColor="secondary">
            Est. Yield
          </Typography>
          <Typography variant={textVariant} textColor="secondary">
            {estYield} g/m²
          </Typography>
        </Yield>
      </Bottom>
    </Container>
  );
};

export default React.memo(HarvestCard);
