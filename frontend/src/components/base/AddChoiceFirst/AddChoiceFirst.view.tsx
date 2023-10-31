import React, { useEffect, useState } from "react";
import { Option, AddChoiceFirstProps } from "./AddChoiceFirst.props";
import { Body, Container, Footer, Header } from "./AddChoiceFirst.style";
import Typography from "../Typography";
import AutoComplete from "../AutoComplete";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectCropId,
  selectCropName,
  storeCropId,
  storeCropName,
} from "../../../features/addCrop/addCropSlice";
import Button from "../Button";
import { Crop } from "../../../types/store/CropState";
import { useGetCropAboutAllQuery } from "../../../features/cropEncyclopedia/cropEncyclopediaApiSlice";
import LocationSearch from "../../../components/module/LocationSearch";
import { selectAddress } from "../../../features/location/locationSlice";

const AddChoiceFirst = (props: AddChoiceFirstProps): JSX.Element => {
  const { onNext } = props;

  const dispatch = useAppDispatch();

  const address = useAppSelector(selectAddress);
  const cropId = useAppSelector(selectCropId);
  const cropName = useAppSelector(selectCropName);

  const [options, setOptions] = useState<Option[] | undefined>(undefined);
  const [crop, setCrop] = useState<Option | undefined>(
    cropId && cropName
      ? {
          value: cropId,
          label: cropName,
        }
      : undefined
  );

  const { data: cropsData } = useGetCropAboutAllQuery("");

  const handleNext = () => {
    if (address && crop && crop.value && crop.label) {
      dispatch(storeCropId(crop.value));
      dispatch(storeCropName(crop.label));
      onNext();
    }
  };

  useEffect(() => {
    if (cropsData) {
      const items = cropsData as Crop[];

      setOptions(
        items.map((item) => ({ value: item._id, label: item.cropName }))
      );
    }
  }, [cropsData]);

  return (
    <Container>
      <Header>
        <Typography variant="title3" weight="700">
          What crop do you want to plant?
        </Typography>
        <Typography>
          We can give you information about the crop, tips, and tools you’ll
          need to grow it
        </Typography>
      </Header>
      <Body>
        <div>
          <Typography weight="500">
            Where is your planting area located?
          </Typography>
          <LocationSearch />
        </div>
        {options && (
          <div>
            <Typography weight="500">Which crop are you planting?</Typography>
            <AutoComplete
              options={options}
              option={crop}
              setOption={setCrop}
              placeholder="Tomato, Potato, Carrots, etc..."
            />
          </div>
        )}
      </Body>
      <Footer>
        {address && crop && crop.value && crop.label ? (
          <Button text="Next" onClick={handleNext} />
        ) : (
          <Button text="Next" variant="disabled" />
        )}
      </Footer>
    </Container>
  );
};

export default React.memo(AddChoiceFirst);
