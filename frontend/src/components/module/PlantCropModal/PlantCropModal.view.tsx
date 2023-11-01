import React from "react";
import { PlantCropModalProps } from "./PlantCropModal.props";
import {
  Body,
  Container,
  Footer,
  Header,
  Wrapper,
} from "./PlantCropModal.style";
import Modal from "../../../components/base/Modal";
import Typography from "../../../components/base/Typography";
import LocationSearch from "../LocationSearch";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectCity } from "../../../features/location/locationSlice";
import Button from "../../../components/base/Button";
import {
  usePlantMutation,
  usePlantNowMutation,
} from "../../../features/crops/cropApiSlice";
import { Crop } from "../../../types/store/CropState";
import {
  storeSelectedCropId,
  storeSelectedOption,
} from "../../../features/crops/cropSlice";
import { usePredictYieldMutation } from "../../../features/condition/conditionApiSlice";

const PlantCropModal = (props: PlantCropModalProps): JSX.Element => {
  const {
    isNew = true,
    visibility,
    setVisibility,
    cropId,
    cropName,
    onConfirm,
  } = props;

  const dispatch = useAppDispatch();

  const city = useAppSelector(selectCity);

  const [plant] = usePlantMutation();
  const [plantNow] = usePlantNowMutation();
  const [predict] = usePredictYieldMutation();

  const handleClose = () => {
    setVisibility(false);
  };

  const handleConfirm = async () => {
    if (city) {
      const predictResponse = await predict({
        city: city,
        cropName: cropName,
      }).unwrap();

      if (isNew) {
        const response = (await plant({
          cropId: cropId,
          plantNow: true,
          estimatedYield: predictResponse.yield,
        }).unwrap()) as Crop;

        dispatch(
          storeSelectedOption({
            value: "planted",
            label: "Planted",
          })
        );
        dispatch(storeSelectedCropId(response._id));
      } else {
        const response = (await plantNow({
          id: cropId,
          estimatedYield: predictResponse.yield,
        }).unwrap()) as Crop;

        dispatch(
          storeSelectedOption({
            value: "planted",
            label: "Planted",
          })
        );
        dispatch(storeSelectedCropId(response._id));
      }

      setVisibility(false);
      onConfirm();
    }
  };

  return (
    <Modal isOpen={visibility} onClose={handleClose}>
      <Container>
        <Wrapper>
          <Header>
            <Typography variant="title3" weight="700">
              What crop do you want to plant?
            </Typography>
            <Typography>
              We can give you information about the crop, tips, and tools you'll
              need to grow it
            </Typography>
          </Header>
          <Body>
            <LocationSearch />
          </Body>
          <Footer>
            {city ? (
              <Button text="Confirm" onClick={handleConfirm} />
            ) : (
              <Button text="Confirm" variant="disabled" />
            )}
          </Footer>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default React.memo(PlantCropModal);
