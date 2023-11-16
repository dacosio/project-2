import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SingleHourlyWeather from "../../../src/components/base/SingleHourlyWeather";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof SingleHourlyWeather> = {
  title: "Base/SingleHourlyWeather",
  component: () => {
    return (
      <Container>
        <div
          style={{
            display: "flex",
            gap: "32px",
          }}
        >
          <SingleHourlyWeather
            time="2PM"
            dayName="Wednesday"
            dayDate="20 Oct"
            condition="clear"
            temperature={18}
            state="Today"
            selectedIndex={0}
            index={0}
            onClickControl={(value) => {
              console.log("Single Hourly Weather");
            }}
          />

          <SingleHourlyWeather
            time="2PM"
            dayName="Wednesday"
            dayDate="20 Oct"
            condition="clear"
            temperature={18}
            state="Today"
            selectedIndex={0}
            index={1}
            onClickControl={(value) => {
              console.log("Single Hourly Weather");
            }}
          />
        </div>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
