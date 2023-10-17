import React from "react";
import { CropConditionProps, ConditionTitle } from "./CropCondition.props";
import { Container, Body, Logo, Header } from "./CropCondition.style";
import Typography from "./../Typography";
import { Clock, Humidity, Soil, Temperature } from "../SVG";

const CropCondition = (props: CropConditionProps): JSX.Element => {
  const { title, output } = props;
  const renderSVG = () => {
    switch (title) {
      case ConditionTitle.Temperature:
        return <Temperature />;
      case ConditionTitle.Humidity:
        return <Humidity />;
      case ConditionTitle.Growth:
        return <Clock />;
      case ConditionTitle.Soil:
        return <Soil />;
      default:
        return null;
    }
  };
  return (
    <Container>
      <Header>
        <Logo>{renderSVG()}</Logo>
        <Typography variant="small" textColor="shade8">
          {title}
        </Typography>
      </Header>
      <Body>
        <Typography variant="small" weight="bold" textColor="shade8">
          {output}
        </Typography>
      </Body>
    </Container>
  );
};

export default React.memo(CropCondition);
