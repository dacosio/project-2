import React, { useEffect, useState } from "react";
import { AddCropResultProps } from "./AddCropResult.props";
import { Body, Container, Footer, Image } from "./AddCropResult.style";
import CropInformation from "../../module/CropInformation";
import { Crop } from "../../../types/store/CropState";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectCropId,
  selectCropName,
} from "../../../features/addCrop/addCropSlice";
import Button from "../Button";
import Typography from "../Typography";
import { useAddCropMutation } from "../../../features/crops/cropApiSlice";
import { useGetCropAboutQuery } from "../../../features/cropEncyclopedia/cropEncyclopediaApiSlice";
import { selectCity } from "../../../features/location/locationSlice";
import { storeSelectedCropId } from "../../../features/crops/cropSlice";

const AddCropResult = (props: AddCropResultProps): JSX.Element => {
  const { onLater, onNow } = props;

  const dispatch = useAppDispatch();

  const cityName = useAppSelector(selectCity);
  const cropId = useAppSelector(selectCropId);
  const cropName = useAppSelector(selectCropName);

  const [crop, setCrop] = useState<Crop | undefined>(undefined);

  const [addCrop] = useAddCropMutation();
  const { data: cropData } = useGetCropAboutQuery(useAppSelector(selectCropId));

  useEffect(() => {
    if (cropData && cropId && cropName) {
      const item = cropData as Crop[];

      if (
        item &&
        0 < item.length &&
        item[0]._id === cropId &&
        item[0].cropName === cropName
      ) {
        setCrop(item[0]);
      }
    }
  }, [cropData]);

  const handleLater = async () => {
    if (crop) {
      const response = (await addCrop({
        city: cityName,
        cropId: crop._id,
        plantNow: false,
      }).unwrap()) as Crop;
      dispatch(storeSelectedCropId(response._id));
      onLater();
    }
  };

  const handleNow = async () => {
    if (crop) {
      const response = (await addCrop({
        city: cityName,
        cropId: crop._id,
        plantNow: true,
      }).unwrap()) as Crop;
      dispatch(storeSelectedCropId(response._id));
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
