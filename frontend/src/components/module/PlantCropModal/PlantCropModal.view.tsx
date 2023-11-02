import React, { useState } from "react";
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
  const { isNew, visibility, setVisibility, cropId, cropName, onConfirm } =
    props;

  const dispatch = useAppDispatch();

  const city = useAppSelector(selectCity);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCloseable, setIsCloseable] = useState<boolean>(true);

  const [plant] = usePlantMutation();
  const [plantNow] = usePlantNowMutation();
  const [predict] = usePredictYieldMutation();

  const handleClose = () => {
    setVisibility(false);
  };

  const handleConfirm = async () => {
    if (city) {
      setIsLoading(true);
      setIsCloseable(false);
      predict({
        city: city,
        cropName: cropName,
      })
        .unwrap()
        .then((predictResponse) => {
          if (isNew) {
            plant({
              cropId: cropId,
              plantNow: true,
              estimatedYield: predictResponse.yield,
            })
              .unwrap()
              .then((response: Crop) => {
                dispatch(
                  storeSelectedOption({
                    value: "planted",
                    label: "Planted",
                  })
                );
                dispatch(storeSelectedCropId(response._id));
                setVisibility(false);
                onConfirm(false);
              })
              .catch((error) => {
                setVisibility(false);
                onConfirm(true);
              });
          } else {
            plantNow({
              id: cropId,
              estimatedYield: predictResponse.yield,
            })
              .unwrap()
              .then((response: Crop) => {
                dispatch(
                  storeSelectedOption({
                    value: "planted",
                    label: "Planted",
                  })
                );
                dispatch(storeSelectedCropId(response._id));
                setVisibility(false);
                onConfirm(false);
              })
              .catch((error) => {
                setVisibility(false);
                onConfirm(true);
              });
          }
        })
        .catch((error) => {
          onConfirm(true);
        });
    }
  };

  return (
    <Modal isOpen={visibility} onClose={handleClose} uncloseable={!isCloseable}>
      <Container>
        <Wrapper>
          <Header>
            <Typography variant="title3" weight="700">
              Where is your planting area located?
            </Typography>
          </Header>
          <Body>
            <LocationSearch />
          </Body>
          <Footer>
            {isLoading ? (
              <Button text="Confirm" variant="disabled" loading />
            ) : city ? (
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
