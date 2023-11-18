import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  /* PLOP_INJECT_IMPORT */
  Website,
  GithubIcon,
  LinkedinIcon,
  Behance,
  Developer,
  Designer,
  ArrowLeft,
  ViewAllSvg,
  WeatherSvg,
  GitHub,
  LinkedIn,
  WindCompass,
  WeatherAlertSVG,
  DrawerHandle,
  ThunderStormRainInactive,
  SnowRainInactive,
  SnowInactive,
  ThunderStormInactive,
  RainInactive,
  OvercastInactive,
  PartiallyCloudyInactive,
  ClearInactive,
  ThunderStormRain,
  SnowRain,
  ThunderStorm,
  Rain,
  PartiallyCloudy,
  Suggestion,
  Choice,
  Snow,
  Overcast,
  Clear,
  Soil,
  Clock,
  Temperature,
  Humidity,
  ArrowDown,
  ArrowUp,
  ThreeDots,
  AddImage,
  Add,
  Delete,
  Favorite,
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
    <Container background="white" style={{ flexWrap: "wrap" }}>
      {/* PLOP_INJECT_INSTANCE*/}
        <Wrapper label="Website">
          <Website width={30} height={30} />
        </Wrapper>
        <Wrapper label="GithubIcon">
          <GithubIcon width={30} height={30} />
        </Wrapper>
        <Wrapper label="LinkedinIcon">
          <LinkedinIcon width={30} height={30} />
        </Wrapper>
        <Wrapper label="Behance">
          <Behance width={30} height={30} />
        </Wrapper>
        <Wrapper label="Developer">
          <Developer width={30} height={30} />
        </Wrapper>
        <Wrapper label="Designer">
          <Designer width={30} height={30} />
        <Wrapper label="ArrowLeft">
          <ArrowLeft width={30} height={30} />
        </Wrapper>
        <Wrapper label="ViewAllSvg">
          <ViewAllSvg width={30} height={30} />
        </Wrapper>
        <Wrapper label="WeatherSvg">
          <WeatherSvg width={30} height={30} />
        </Wrapper>
        <Wrapper label="GitHub">
          <GitHub width={30} height={30} />
        </Wrapper>
        <Wrapper label="LinkedIn">
          <LinkedIn width={30} height={30} />
        </Wrapper>
        <Wrapper label="WindCompass">
          <WindCompass width={30} height={30} />
        </Wrapper>
      <Wrapper label="WeatherAlert">
        <WeatherAlertSVG width={30} height={30} />
      </Wrapper>
      <Wrapper label="DrawerHandle">
        <DrawerHandle width={30} height={30} />
      </Wrapper>
      <Wrapper label="ThunderStormRain">
        <ThunderStormRain width={30} height={30} />
      </Wrapper>
      <Wrapper label="ThunderStormRainInactive">
        <ThunderStormRainInactive width={30} height={30} />
      </Wrapper>
      <Wrapper label="SnowRainInactive">
        <SnowRainInactive width={30} height={30} />
      </Wrapper>
      <Wrapper label="SnowInactive">
        <SnowInactive width={30} height={30} />
      </Wrapper>
      <Wrapper label="ThunderStormInactive">
        <ThunderStormInactive width={30} height={30} />
      </Wrapper>
      <Wrapper label="RainInactive">
        <RainInactive width={30} height={30} />
      </Wrapper>
      <Wrapper label="OvercastInactive">
        <OvercastInactive width={30} height={30} />
      </Wrapper>
      <Wrapper label="PartiallyCloudyInactive">
        <PartiallyCloudyInactive width={30} height={30} />
      </Wrapper>
      <Wrapper label="ClearInactive">
        <ClearInactive width={30} height={30} />
      </Wrapper>
      <Wrapper label="Snow">
        <Snow width={30} height={30} />
      </Wrapper>
      <Wrapper label="SnowRain">
        <SnowRain width={30} height={30} />
      </Wrapper>
      <Wrapper label="ThunderStorm">
        <ThunderStorm width={30} height={30} />
      </Wrapper>
      <Wrapper label="Rain">
        <Rain width={30} height={30} />
      </Wrapper>
      <Wrapper label="PartiallyCloudy">
        <PartiallyCloudy width={30} height={30} />
      </Wrapper>
      <Wrapper label="Suggestion">
        <Suggestion width={30} height={30} />
      </Wrapper>
      <Wrapper label="Choice">
        <Choice width={30} height={30} />
      </Wrapper>
      <Wrapper label="Snow">
        <Snow width={30} height={30} />
      </Wrapper>
      <Wrapper label="Overcast">
        <Overcast width={30} height={30} />
      </Wrapper>
      <Wrapper label="Clear">
        <Clear width={30} height={30} />
      </Wrapper>
      <Wrapper label="Soil">
        <Soil width={30} height={30} />
      </Wrapper>
      <Wrapper label="Clock">
        <Clock width={30} height={30} />
      </Wrapper>
      <Wrapper label="Temperature">
        <Temperature width={30} height={30} />
      </Wrapper>
      <Wrapper label="Humidity">
        <Humidity width={30} height={30} />
      </Wrapper>
      <Wrapper label="ArrowDown">
        <ArrowDown width={30} height={30} />
      </Wrapper>
      <Wrapper label="ArrowUp">
        <ArrowUp width={30} height={30} />
      </Wrapper>
      <Wrapper label="Add">
        <Add width={30} height={30} />
      </Wrapper>
      <Wrapper label="Delete">
        <Delete width={30} height={30} />
      </Wrapper>
      <Wrapper label="Favorite">
        <Favorite width={30} height={30} />
      </Wrapper>
      <Wrapper label="ThreeDots">
        <ThreeDots width={30} height={30} />
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
