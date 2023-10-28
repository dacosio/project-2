import React, { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CurrentWeather from "../../../src/components/module/CurrentWeather";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import axios from "axios";
import Typography from "../../../src/components/base/Typography";
import { useCurrentCity } from "../../../src/utils/hooks/useCurrentCity"; // Import the custom hook

const meta: Meta<typeof CurrentWeather> = {
  title: "Module/CurrentWeather",
  component: () => {
    const [gradientObject, setGradientObject] = useState({
      clear: ["#1DAEFF", "#8ECCEF"],
      partiallyCloudy: ["#6DDFFC", "#89B4E7"],
      overcast: ["#83D3EF", "#4A629B"],
      rain: ["#37528C", "#9BACD0"],
      thunderStorm: ["#7148D5", "#C9A6C7"],
      snow: ["#1DACF0", "#202C4C"],
      snowRain: ["#524E8B", "#2A3259"],
      thunderStormRain: ["#4D54D5", "#C29EC9"],
    });

    return (
      <Container>
        {/* <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem" }}> */}
        <CurrentWeather
          currentLocation="Vancouver"
          forecast="Thunderstorm and rain"
          currentTemperature={24}
          lowTemperature={18}
          highTemperature={26}
          precipitation={0}
          humidity={65}
          wind={18}
          gradientColor1={gradientObject.thunderStormRain[0]}
          gradientColor2={gradientObject.thunderStormRain[1]}
          currentCondition="thunderStormRain"
          page="dashboard"
        />

        <CurrentWeather
          currentLocation="Vancouver"
          forecast="Clear"
          currentTemperature={24}
          lowTemperature={18}
          highTemperature={26}
          precipitation={0}
          humidity={65}
          wind={18}
          gradientColor1={gradientObject.clear[0]}
          gradientColor2={gradientObject.clear[1]}
          currentCondition="clear"
          page="weather"
        />

        <CurrentWeather
          currentLocation="Vancouver"
          forecast="Partially cloudy"
          currentTemperature={24}
          lowTemperature={18}
          highTemperature={26}
          precipitation={0}
          humidity={65}
          wind={18}
          gradientColor1={gradientObject.partiallyCloudy[0]}
          gradientColor2={gradientObject.partiallyCloudy[1]}
          currentCondition="partiallyCloudy"
          page="weather"
        />

        <CurrentWeather
          currentLocation="Vancouver"
          forecast="Overcast"
          currentTemperature={24}
          lowTemperature={18}
          highTemperature={26}
          precipitation={0}
          humidity={65}
          wind={18}
          gradientColor1={gradientObject.overcast[0]}
          gradientColor2={gradientObject.overcast[1]}
          currentCondition="overcast"
          page="weather"
        />

        <CurrentWeather
          currentLocation="Vancouver"
          forecast="Rain"
          currentTemperature={24}
          lowTemperature={18}
          highTemperature={26}
          precipitation={0}
          humidity={65}
          wind={18}
          gradientColor1={gradientObject.rain[0]}
          gradientColor2={gradientObject.rain[1]}
          currentCondition="rain"
          page="weather"
        />

        <CurrentWeather
          currentLocation="Vancouver"
          forecast="Thunderstorm"
          currentTemperature={24}
          lowTemperature={18}
          highTemperature={26}
          precipitation={0}
          humidity={65}
          wind={18}
          gradientColor1={gradientObject.thunderStorm[0]}
          gradientColor2={gradientObject.thunderStorm[1]}
          currentCondition="thunderStorm"
          page="weather"
        />

        <CurrentWeather
          currentLocation="Vancouver"
          forecast="Snow"
          currentTemperature={24}
          lowTemperature={18}
          highTemperature={26}
          precipitation={0}
          humidity={65}
          wind={18}
          gradientColor1={gradientObject.snow[0]}
          gradientColor2={gradientObject.snow[1]}
          currentCondition="snow"
          page="weather"
        />

        <CurrentWeather
          currentLocation="Vancouver"
          forecast="Heavy Rain and Snow"
          currentTemperature={24}
          lowTemperature={18}
          highTemperature={26}
          precipitation={0}
          humidity={65}
          wind={18}
          gradientColor1={gradientObject.snowRain[0]}
          gradientColor2={gradientObject.snowRain[1]}
          currentCondition="snowRain"
          page="weather"
        />

        <CurrentWeather
          currentLocation="Vancouver"
          forecast="Thunderstorm and rain"
          currentTemperature={24}
          lowTemperature={18}
          highTemperature={26}
          precipitation={0}
          humidity={65}
          wind={18}
          gradientColor1={gradientObject.thunderStormRain[0]}
          gradientColor2={gradientObject.thunderStormRain[1]}
          currentCondition="thunderStormRain"
          page="weather"
        />
        {/* </div> */}
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
