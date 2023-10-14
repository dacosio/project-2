import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  /* PLOP_INJECT_IMPORT */
  IconSoil,
  IconClock,
  IconHumidity,
  IconTemperature,
  AddImage,
  Bell,
  MagnifierSvg,
  LocationSvg,
  Leaf,
  CropGuideSvg,
  YourCropsSvg,
  DashboardSvg,
  CollapsedLogo,
  SproutLogo,
  Rainy,
  Sunny,
  Cloudy,
  Smile,
  Close,
  EyeOff,
  Eye,
} from "../../../src/components/base/SVG";
import Container from "../../components/Container";

const Wrapper = ({ children, label }) => {
  return (
    <div
      style={{
        marginLeft: 16,
        marginTop: 16,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {children}
      <div style={{ marginTop: "8px", color: "#000" }}>{label}</div>
    </div>
  );
};

const meta: Meta = {
  title: "Base/SVG",
  component: () => (
    <Container background="white">
      {/* PLOP_INJECT_INSTANCE*/}
        <Wrapper label="IconSoil">
          <IconSoil width={30} height={30} />
        </Wrapper>
        <Wrapper label="IconClock">
          <IconClock width={30} height={30} />
        </Wrapper>
        <Wrapper label="IconHumidity">
          <IconHumidity width={30} height={30} />
        </Wrapper>
        <Wrapper label="IconTemperature">
          <IconTemperature width={30} height={30} />
        </Wrapper>
        <Wrapper label="AddImage">
          <AddImage width={30} height={30} />
        </Wrapper>
        <Wrapper label="Bell">
          <Bell width={30} height={30} />
        </Wrapper>
      <Wrapper label="MagnifierSvg">
        <MagnifierSvg width={30} height={30} fill="green" />
      </Wrapper>
      <Wrapper label="LocationSvg">
        <LocationSvg width={30} height={30} />
      </Wrapper>
      <Wrapper label="Leaf">
        <Leaf width={30} height={30} />
      </Wrapper>
      <Wrapper label="CropGuideSvg">
        <CropGuideSvg width={30} height={30} />
      </Wrapper>
      <Wrapper label="YourCropsSvg">
        <YourCropsSvg width={30} height={30} />
      </Wrapper>
      <Wrapper label="DashboardSvg">
        <DashboardSvg width={30} height={30} />
      </Wrapper>
      <Wrapper label="CollapsedLogo">
        <CollapsedLogo width={30} height={30} />
      </Wrapper>
      <Wrapper label="SproutLogo">
        <SproutLogo width={30} height={30} />
      </Wrapper>
      <Wrapper label="Rainy">
        <Rainy width={30} height={30} />
      </Wrapper>
      <Wrapper label="Sunny">
        <Sunny width={30} height={30} />
      </Wrapper>
      <Wrapper label="Cloudy">
        <Cloudy width={30} height={30} />
      </Wrapper>
      <Wrapper label="Smile">
        <Smile width={30} height={30} />
      </Wrapper>
      <Wrapper label="Close">
        <Close width={30} height={30} />
      </Wrapper>
      <Wrapper label="EyeOff">
        <EyeOff width={30} height={30} />
      </Wrapper>
      <Wrapper label="Eye">
        <Eye width={30} height={30} />
      </Wrapper>
    </Container>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Collection: Story = {
  args: {},
};
