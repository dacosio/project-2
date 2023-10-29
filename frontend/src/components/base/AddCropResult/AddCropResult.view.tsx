import React, { useState } from "react";
import { AddCropResultProps } from "./AddCropResult.props";
import { Body, Container, Footer, Image } from "./AddCropResult.style";
import CropInformation from "../../module/CropInformation";
import { Crop } from "../../../types/store/CropState";
import { useAppSelector } from "../../../app/hooks";
import { selectCrop } from "../../../features/addSuggestion/addCropSlice";
import Button from "../Button";
import Typography from "../Typography";
import { useAddCropMutation } from "../../../features/crops/cropApiSlice";

const AddCropResult = (props: AddCropResultProps): JSX.Element => {
  const { onLater, onNow } = props;

  const [crop] = useState<Crop | undefined>(useAppSelector(selectCrop));

  const [addCrop] = useAddCropMutation();

  const handleLater = async () => {
    if (crop) {
      const response = await addCrop({
        cropId: crop._id,
        plantNow: false,
      }).unwrap();
      onLater();
    }
  };

  const handleNow = async () => {
    if (crop) {
      const response = await addCrop({
        cropId: crop._id,
        plantNow: true,
      }).unwrap();
      onNow();
    }
  };

  return (
    <Container>
      <Body>
        {crop && (
          <>
            <div>
              <div>
                <Typography variant="small">
                  Our suggested crop is...
                </Typography>
                <Typography variant="title3" weight="700">
                  {crop.cropName}
                </Typography>
              </div>
              <Image src={crop.imageURL} alt="crop" />
              <Typography>{crop.description}</Typography>
            </div>
            <div>
              <CropInformation
                temperature={`${crop.idealTemperature.celcius.min} - ${crop.idealTemperature.celcius.max}`}
                humidity={`${crop.humidity.min} - ${crop.humidity.max}`}
                growthDuration={`${crop.growthDuration.min} - ${crop.growthDuration.max}`}
                ph={`${crop.soilPh.min} - ${crop.soilPh.max}`}
                nitrogen={crop.soilN.toString()}
                phosphorus={crop.soilP.toString()}
                potassium={crop.soilK.toString()}
                suggestions={crop.tools}
                tips={crop.growingTips}
              />
            </div>
          </>
        )}
      </Body>
      <Footer>
        <Button text="Plant Later" variant="outline" onClick={handleLater} />
        <Button text="Plant Now" onClick={handleNow} />
      </Footer>
    </Container>
  );
};

export default React.memo(AddCropResult);
