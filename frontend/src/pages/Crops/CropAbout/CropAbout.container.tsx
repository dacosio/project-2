import React from "react";

import CropAboutView from "./CropAbout.view";

const CropAbout = (): JSX.Element => {
  const crops = [
    {
      _id: 1,
      name: "Carrot",
      description:
        "Carrots are root vegetables known for their orange color and sweet taste.",
      idealTemperature: "15-24°C",
      humidity: "70-80%",
      growthDuration: "70-80 days",
      soilPh: "7-10",
      soilN: "10",
      soilP: "20",
      soilK: "20",
      growingTips: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Phasellus aliquam metus nec nulla ullamcorper tempor.",
        "Pellentesque vitae urna ut lectus mattis ullamcorper et ac felis.",
      ],
      tools: ["Item 1", "Item 2", "Item 3"],
      img_url:
        "https://res.cloudinary.com/dqkmua29w/image/upload/v1697606726/crops/hm0bbyebfpvzlessr1n1.webp",
    },
    {
      _id: 2,
      name: "Tomato",
      description:
        "Tomatoes are a popular vegetable used in various culinary dishes.",
      idealTemperature: "21-29°C",
      humidity: "40-60%",
      growthDuration: "60-85 days",
      soilPh: "8-11",
      soilN: "5",
      soilP: "10",
      soilK: "5",
      growingTips: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Phasellus aliquam metus nec nulla ullamcorper tempor.",
        "Pellentesque vitae urna ut lectus mattis ullamcorper et ac felis.",
      ],
      tools: ["Item 1", "Item 2", "Item 3"],
      img_url:
        "https://res.cloudinary.com/dqkmua29w/image/upload/v1697606726/crops/wqmctunonbdbm3kqk4xt.webp",
    },
    {
      _id: 3,
      name: "Broccoli",
      description:
        "Broccoli are a popular vegetable used in various culinary dishes.",
      idealTemperature: "21-29°C",
      humidity: "40-60%",
      growthDuration: "30-85 days",
      soilPh: "5-10",
      soilN: "5",
      soilP: "10",
      soilK: "5",
      growingTips: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Phasellus aliquam metus nec nulla ullamcorper tempor.",
        "Pellentesque vitae urna ut lectus mattis ullamcorper et ac felis.",
      ],
      tools: ["Item 1", "Item 2", "Item 3"],
      img_url:
        "https://res.cloudinary.com/dqkmua29w/image/upload/v1697606726/crops/fdli2dgryzg54dr6yxez.webp",
    },
    {
      _id: 4,
      name: "Onion",
      description:
        "Onion are a popular vegetable used in various culinary dishes.",
      idealTemperature: "21-30°C",
      humidity: "40-60%",
      growthDuration: "60-85 days",
      soilPh: "7-9",
      soilN: "5",
      soilP: "10",
      soilK: "5",
      growingTips: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Phasellus aliquam metus nec nulla ullamcorper tempor.",
        "Pellentesque vitae urna ut lectus mattis ullamcorper et ac felis.",
      ],
      tools: ["Item 1", "Item 2", "Item 3"],
      img_url:
        "https://res.cloudinary.com/dqkmua29w/image/upload/v1697606727/crops/sllr15ehgc0jxdjdsddr.webp",
    },
    {
      _id: 5,
      name: "Cucumber",
      description:
        "Cucumber are a popular vegetable used in various culinary dishes.",
      idealTemperature: "18-28°C",
      humidity: "40-60%",
      growthDuration: "60-85 days",
      soilPh: "9-12",
      soilN: "1",
      soilP: "10",
      soilK: "20",
      growingTips: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Phasellus aliquam metus nec nulla ullamcorper tempor.",
        "Pellentesque vitae urna ut lectus mattis ullamcorper et ac felis.",
      ],
      tools: ["Item 1", "Item 2", "Item 3"],
      img_url:
        "https://res.cloudinary.com/dqkmua29w/image/upload/v1697606726/crops/oimgk1mnuszmk3flfxat.webp",
    },
  ];

  const handlePlantNow = () => {
    console.log("Plant Now");
  };

  const handlePlantLater = () => {
    console.log("Plant Later");
  };

  const generatedProps = {
    crops: crops,
    handlePlantNow: handlePlantNow,
    handlePlantLater: handlePlantLater,
  };
  return <CropAboutView {...generatedProps} />;
};

export default CropAbout;
