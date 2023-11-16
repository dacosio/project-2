import React from "react";
import { CircleProgressHumidityProps } from "./CircleProgressHumidity.props";
import { Container, Wrapper } from "./CircleProgressHumidity.style";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { useTheme } from "@emotion/react";
import { useCountUp } from "react-countup";
import Typography from "../Typography";

const CircleProgressHumidity = (
  props: CircleProgressHumidityProps
): JSX.Element => {
  const { value, title, subtitle, size, maxValue, id, ...rest } = props;
  const theme = useTheme();
  useCountUp({ ref: id, end: Number(title) });

  const strokeColor = () => {
    let stroke: string = "";
    const res = value / maxValue;
    stroke = "#1FB4F4";
    return stroke;
  };
  return (
    <Container {...rest}>
      <CircularProgressbarWithChildren
        styles={{
          path: {
            strokeWidth: 8,
            stroke: strokeColor(),
          },
        }}
        value={value}
        minValue={0}
        maxValue={maxValue}
        counterClockwise
      >
        <Wrapper>
          <Typography
            variant={size === "mobile" ? "title4" : "title3"}
            weight="700"
            textColor="secondary"
            id={id}
          >
            {title}
          </Typography>
          <Typography
            variant={size === "mobile" ? "body" : "title5"}
            weight="700"
            textColor="secondary"
          >
            {subtitle}
          </Typography>
        </Wrapper>
      </CircularProgressbarWithChildren>
    </Container>
  );
};

export default React.memo(CircleProgressHumidity);
