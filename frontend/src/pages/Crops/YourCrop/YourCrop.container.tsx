import React, { useState } from "react";

import YourCropView from "./YourCrop.view";
import { Option } from "components/base/Tab/Tab.props";
import { YourCropGeneratedProps } from "./YourCrop.props";

const YourCrop = (): JSX.Element => {
  const options: Option[] = [
    { value: "all", label: "All" },
    { value: "planted", label: "Planted" },
    { value: "to-plant", label: "To Plant" },
  ];

  const crops: { name: string; isPlanted: boolean }[] = [
    { name: "Crop1", isPlanted: true },
    { name: "Crop2", isPlanted: false },
    { name: "Crop3", isPlanted: true },
    { name: "Crop4", isPlanted: true },
    { name: "Crop5", isPlanted: true },
    { name: "Crop6", isPlanted: false },
    { name: "Crop7", isPlanted: true },
    { name: "Crop8", isPlanted: true },
    { name: "Crop9", isPlanted: true },
    { name: "Crop10", isPlanted: false },
    { name: "Crop11", isPlanted: true },
    { name: "Crop12", isPlanted: true },
    { name: "Crop13", isPlanted: false },
    { name: "Crop14", isPlanted: true },
  ];

  const [option, setOption] = useState<string | undefined>("all");

  const generatedProps: YourCropGeneratedProps = {
    options: options,
    value: option,
    setValue: setOption,
    crops: crops,
  };
  return <YourCropView {...generatedProps} />;
};

export default YourCrop;
