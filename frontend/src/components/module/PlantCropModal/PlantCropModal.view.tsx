import React, { useState } from "react";
import { PlantCropModalProps } from "./PlantCropModal.props";
import {
  Body,
  Container,
  Footer,
  Header,
  Wrapper,
} from "./PlantCropModal.style";
import toast from "react-hot-toast";
import Modal from "../../../components/base/Modal";
import Typography from "../../../components/base/Typography";
import LocationSearch from "../LocationSearch";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectAddress,
  selectCity,
} from "../../../features/location/locationSlice";
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
    setIsModalVisible = () => null,
  } = props;

  const dispatch = useAppDispatch();

  const address = useAppSelector(selectAddress);
  const city = useAppSelector(selectCity);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [plant] = usePlantMutation();
  const [plantNow] = usePlantNowMutation();
  const [predictYield] = usePredictYieldMutation();

  const handleClose = () => {
    setVisibility(false);
    setIsModalVisible(false);
  };

  const handleConfirm = async () => {
    onLoading(true);
    setIsLoading(true);
    if (city) {
      await predictYield({
        city: city,
        cropName: cropName,
      })
        .unwrap()
        .then(async (predictResponse: { yield: number }) => {
          if (adding) {
            await plant({
              cropId: cropId,
              plantNow: true,
              estimatedYield: predictResponse.yield,
            })
              .unwrap()
              .then((response: Crop) => {
                toast.success("Crop successfully planted");
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
                if (error && error.data && error.data.message) {
                  toast.error(error.data.message);
                } else {
                  toast.error("An error occured. Please, try again later");
                }
                onConfirm(true);
              });
          } else {
            await plantNow({
              id: cropId,
              estimatedYield: predictResponse.yield,
            })
              .unwrap()
              .then((response: Crop) => {
                toast.success("Crop successfully planted");
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
                if (error && error.data && error.data.message) {
                  toast.error(error.data.message);
                } else {
                  toast.error("An error occured. Please, try again later");
                }
                onConfirm(true);
              });
          }
        })
        .catch((error) => {
          if (error && error.data && error.data.message) {
            toast.error(error.data.message);
          } else {
            toast.error("An error occured. Please, try again later");
          }
          onConfirm(true);
        });
    }
    setIsLoading(false);
    onLoading(false);
    setVisibility(false);
    setIsModalVisible(false);
  };

  return (
    <>
      {isLoading && <Loading />}
      <Modal width="25vw" isOpen={visibility} onClose={handleClose} padded>
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
              <div>
                <LocationSearch />
                {address && !city && (
                  <div style={{ padding: "0 8px" }}>
                    <Typography textColor="error">
                      Please select a city
                    </Typography>
                  </div>
                )}
              </div>
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
