import React from "react";
import { PlantResultProps } from "./PlantResult.props";
import {
  Container,
  AnchorTag,
  ImageHolder,
  TextHolder,
} from "./PlantResult.style";
import Typography from "../Typography";

const PlantResult = (props: PlantResultProps): JSX.Element => {
  const { imageUrl, imageAlt, imgWidth, imgHeight, cropName, link } = props;

  return (
    <Container>
      <AnchorTag href={link}>
        <ImageHolder>
          <img
            src={imageUrl}
            alt={imageAlt}
            width={imgWidth}
            height={imgHeight}
          />
        </ImageHolder>
        <TextHolder>
          <Typography variant="body" weight="500">
            {cropName}
          </Typography>
        </TextHolder>
      </AnchorTag>
    </Container>
  );
};

export default React.memo(PlantResult);
