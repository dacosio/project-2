import React from "react";
import { HarvestCardProps } from "./HarvestCard.props";
import { Container, Harvest, Title } from "./HarvestCard.style";
import Typography from "../../base/Typography";
import { ThreeDots } from "../../base/SVG";
import CircleProgress from "../../base/CircleProgress";

const HarvestCard = (props: HarvestCardProps): JSX.Element => {
  const { cropName, value, maxValue, ...rest } = props;

  const ready = value / maxValue;

  return (
    <Container>
      <Title>
        <Typography variant="body" weight="700" textColor="secondary">
          {cropName}
        </Typography>
        <ThreeDots />
      </Title>
      <CircleProgress value={value} maxValue={maxValue} {...rest} />
      <Harvest>
        <Typography variant="small" align="center">
          {ready === 1 ? "Ready to " : "Before"} Harvest
        </Typography>
      </Harvest>
    </Container>
  );
};

export default React.memo(HarvestCard);
