import { useEffect, useState } from "react";

import YourCropView from "./YourCrop.view";
import { YourCropGeneratedProps } from "./YourCrop.props";

const YourCrop = (): JSX.Element => {
  const [crops, setCrops] = useState<
    { id: string; name: string; isPlanted: boolean }[]
  >([]);
  const [crop, setCrop] = useState<
    { id: string; name: string; isPlanted: boolean } | undefined
  >(undefined);

  const handleOnClickCrop = (id: string) => {
    setCrop(crops.find((crop) => id === crop.id));
  };

  const handleOnClickChoice = () => {
    console.log("Choice");
  };

  const handleOnClickSuggestion = () => {
    console.log("Suggestion");
  };

  const handlePlant = (id: string) => {
    console.log(id);
  };

  const handleOnDelete = (id: string) => {
    console.log(id);
  };

  useEffect(() => {
    const cropItems = [
      { id: "1", name: "Crop1", isPlanted: true },
      { id: "2", name: "Crop2", isPlanted: false },
      { id: "3", name: "Crop3", isPlanted: true },
      { id: "4", name: "Crop4", isPlanted: true },
      { id: "5", name: "Crop5", isPlanted: true },
      { id: "6", name: "Crop6", isPlanted: false },
      { id: "7", name: "Crop7", isPlanted: true },
      { id: "8", name: "Crop8", isPlanted: true },
      { id: "9", name: "Crop9", isPlanted: true },
      { id: "10", name: "Crop10", isPlanted: false },
      { id: "11", name: "Crop11", isPlanted: true },
      { id: "12", name: "Crop12", isPlanted: true },
      { id: "13", name: "Crop13", isPlanted: false },
      { id: "14", name: "Crop14", isPlanted: true },
    ];

    setCrops(cropItems);
    if (0 < cropItems.length) {
      setCrop(cropItems[0]);
    }
  }, []);

  const generatedProps: YourCropGeneratedProps = {
    crops,
    crop,
    handleOnClickCrop,
    handleOnClickChoice,
    handleOnClickSuggestion,
    handlePlant,
    handleOnDelete,
  };
  return <YourCropView {...generatedProps} />;
};

export default YourCrop;
