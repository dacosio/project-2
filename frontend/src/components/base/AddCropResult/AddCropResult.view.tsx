import React, { useEffect, useState } from "react";
import { AddCropResultProps } from "./AddCropResult.props";
import { Body, Container, Footer, Image } from "./AddCropResult.style";
import toast, { Toaster } from "react-hot-toast";
import CropInformation from "../../module/CropInformation";
import { Crop } from "../../../types/store/CropState";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectCropId,
  selectCropName,
} from "../../../features/addCrop/addCropSlice";
import Button from "../Button";
import Typography from "../Typography";
import { usePlantMutation } from "../../../features/crops/cropApiSlice";
import { useGetCropAboutQuery } from "../../../features/cropEncyclopedia/cropEncyclopediaApiSlice";
import {
  storeSelectedCropId,
  storeSelectedOption,
} from "../../../features/crops/cropSlice";
import PlantCropModal from "../../../components/module/PlantCropModal";
import { selectCity } from "../../../features/location/locationSlice";
import { usePredictYieldMutation } from "../../../features/condition/conditionApiSlice";
import Loading from "../Loading";

const AddCropResult = (props: AddCropResultProps): JSX.Element => {
  const { suggested, onLater, onNow } = props;

  const dispatch = useAppDispatch();

  const city = useAppSelector(selectCity);
  const cropId = useAppSelector(selectCropId);
  const cropName = useAppSelector(selectCropName);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [visibility, setVisibility] = useState<boolean>(false);
  const [crop, setCrop] = useState<Crop | undefined>(undefined);

  const [plant] = usePlantMutation();
  const [predictYield] = usePredictYieldMutation();
  const { data: cropData } = useGetCropAboutQuery(useAppSelector(selectCropId));
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

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
      await plant({
        cropId: crop._id,
        plantNow: false,
      })
        .unwrap()
        .then((response: Crop) => {
          dispatch(
            storeSelectedOption({
              value: "to-plant",
              label: "To Plant",
            })
          );
          dispatch(storeSelectedCropId(response._id));
          onLater(false);
        })
        .catch((error) => {
          onLater(true);
        });
    }
  };

  const handleNow = async () => {
    if (crop) {
      if (suggested) {
        setIsLoading(true);
        await predictYield({
          city: city,
          cropName: cropName,
        })
          .unwrap()
          .then(async (predictResponse) => {
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
                onNow(false);
              })
              .catch((error) => {
                if (error && error.data && error.data.message) {
                  toast.error(error.data.message);
                } else {
                  toast.error("An error occured. Please, try again later");
                }
                onNow(true);
              });
          })
          .catch((error) => {
            if (error && error.data && error.data.message) {
              toast.error(error.data.message);
            } else {
              toast.error("An error occured. Please, try again later");
            }
            onNow(true);
          });
        setIsLoading(false);
      } else {
        setVisibility(true);
      }
    }
  };

  const handleConfirm = (isError: boolean) => {
    onNow(isError);
  };

  return (
    <>
      {isLoading && <Loading />}
      <Container>
        <Body>
          {crop && (
            <>
              <div>
                <div>
                  {suggested && (
                    <Typography variant="small">
                      Our suggested crop is...
                    </Typography>
                  )}
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
          {isLoading || visibility ? (
            <>
              <Button text="Plant Later" variant="disabled" />
              <Button text="Plant Now" variant="disabled" />
            </>
          ) : (
            <>
              <Button
                text="Plant Later"
                variant="outline"
                onClick={handleLater}
              />
              <Button text="Plant Now" onClick={handleNow} />
            </>
          )}
        </Footer>
      </Container>
      <PlantCropModal
        visibility={visibility}
        setVisibility={setVisibility}
        cropId={cropId}
        cropName={cropName}
        onConfirm={handleConfirm}
        onLoading={handleLoading}
        adding
        setIsModalVisible={setIsModalVisible}
      />
      <Toaster />
    </>
  );
};

export default React.memo(AddCropResult);
