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
import Loading from "../../../components/base/Loading";

const PlantCropModal = (props: PlantCropModalProps): JSX.Element => {
  const {
    adding,
    visibility,
    setVisibility,
    cropId,
    cropName,
    onLoading = () => null,
    onConfirm,
  } = props;

  const dispatch = useAppDispatch();

  const city = useAppSelector(selectCity);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [plant] = usePlantMutation();
  const [plantNow] = usePlantNowMutation();
  const [predict] = usePredictYieldMutation();

  const handleClose = () => {
    setVisibility(false);
  };

  const handleConfirm = async () => {
    setVisibility(false);
    onLoading(true);
    setIsLoading(true);
    if (city) {
      await predict({
        city: city,
        cropName: cropName,
      })
        .unwrap()
        .then(async (predictResponse) => {
          if (adding) {
            await plant({
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
                onConfirm(false);
              })
              .catch((error) => {
                onConfirm(true);
              });
          } else {
            await plantNow({
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
                onConfirm(false);
              })
              .catch((error) => {
                onConfirm(true);
              });
          }
        })
        .catch((error) => {
          onConfirm(true);
        });
    }
    setIsLoading(false);
    onLoading(false);
  };

  return (
    <>
      {isLoading && <Loading />}
      <Modal isOpen={visibility} onClose={handleClose}>
        <Container>
          <Wrapper>
            <Header>
              <Typography variant="title3" weight="700">
                Where is your planting area located?
              </Typography>
              <Typography>
                We'll need this information so we can give you an estimated
                yield of your crop.
              </Typography>
            </Header>
            <Body>
              <LocationSearch />
            </Body>
            <Footer>
              {isLoading || !city ? (
                <Button text="Confirm" variant="disabled" />
              ) : (
                <Button text="Confirm" onClick={handleConfirm} />
              )}
            </Footer>
          </Wrapper>
        </Container>
      </Modal>
    </>
  );
};

export default React.memo(PlantCropModal);
