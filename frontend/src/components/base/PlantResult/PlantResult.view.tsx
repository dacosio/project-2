import React from 'react';
import { PlantResultProps } from './PlantResult.props';
import {
  Container,
  ImageHolder,
  TextHolder
} from './PlantResult.style';
import Typography from '../Typography';

const PlantResult = (props: PlantResultProps): JSX.Element => {
  const {
    imageUrl,
    imageAlt,
    imgWidth,
    imgHeight,
    cropName
  } = props

  return (
    <Container>
      <ImageHolder>
        <img src={imageUrl} alt={imageAlt} width={imgWidth} height={imgHeight} />
      </ImageHolder>
      <TextHolder>
        <Typography variant='body' weight='500'>{cropName}</Typography>
      </TextHolder>
    </Container>);
};

export default React.memo(PlantResult);
