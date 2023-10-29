import React, { useState } from "react";
import { AddChoiceFirstProps } from "./AddChoiceFirst.props";
import { Body, Container, Footer, Header } from "./AddChoiceFirst.style";
import Typography from "../Typography";
import AutoComplete from "../AutoComplete";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectName,
  storeCrop,
  storeName,
} from "../../../features/addSuggestion/addCropSlice";
import Button from "../Button";
import { Crop } from "../../../types/store/CropState";
import { useGetCropAboutAllQuery } from "features/cropEncyclopedia/cropEncyclopediaApiSlice";

const AddChoiceFirst = (props: AddChoiceFirstProps): JSX.Element => {
  const { onNext } = props;

  const dispatch = useAppDispatch();

  const [name, setName] = useState<string | undefined>(
    useAppSelector(selectName)
  );

  const { data } = useGetCropAboutAllQuery(null);

  console.log(data);

  const getCrop = () => {
    const crop: Crop = {
      _id: "id",
      cropName: "Tomato",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis quam vel risus accumsan iaculis. Nullam semper feugiat mi, non commodo massa fringilla sit amet. Aliquam efficitur quis metus semper posuere. Mauris dictum laoreet rhoncus. In mauris velit, laoreet eget augue et, posuere feugiat lectus. Proin blandit lacus nec velit tincidunt molestie. Integer et auctor urna.",
      idealTemperature: {
        fahrenheit: { min: 10, max: 20 },
        celcius: { min: 10, max: 20 },
      },
      humidity: { min: 10, max: 20 },
      growthDuration: { min: 2, max: 3 },
      soilPh: { min: 5.5, max: 6.5 },
      soilN: 5,
      soilP: 8,
      soilK: 6,
      growingTips: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Duis mollis quam vel risus accumsan iaculis.",
        "Nullam semper feugiat mi, non commodo massa fringilla sit amet.",
      ],
      tools: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Duis mollis quam vel risus accumsan iaculis.",
        "Nullam semper feugiat mi, non commodo massa fringilla sit amet.",
      ],
      imageURL: "https://picsum.photos/300",
      userId: "",
      isFavorite: false,
      isPlanted: false,
      datePlanted: new Date(),
      estimatedYield: "",
      __v: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    dispatch(storeCrop(crop));
  };

  const options = ["Apple", "Orange", "Strawberry", "Tomato"];

  const handleNext = () => {
    dispatch(storeName(name));
    getCrop();
    onNext();
  };

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
        <AutoComplete
          options={options}
          value={name}
          setValue={setName}
          placeholder="Tomato, Potato, Carrots, etc..."
        />
      </Body>
      <Footer>
        {name ? (
          <Button text="Next" onClick={handleNext} />
        ) : (
          <Button text="Next" variant="disabled" />
        )}
      </Footer>
    </Container>
  );
};

export default React.memo(AddChoiceFirst);
