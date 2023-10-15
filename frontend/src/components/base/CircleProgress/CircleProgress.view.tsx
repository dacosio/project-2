import React from "react";
import { CircleProgressProps } from "./CircleProgress.props";
import { Container, Wrapper } from "./CircleProgress.style";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { useTheme } from "@emotion/react";
import Typography from "../Typography";
import { useCountUp } from "react-countup";

const CircleProgress = (props: CircleProgressProps): JSX.Element => {
  const { value, title, subtitle, size, maxValue, id, ...rest } = props;
  const theme = useTheme();
  useCountUp({ ref: id, end: Number(title) });

  const strokeColor = () => {
    let stroke: string = "";
    const res = value / maxValue;
    if (res <= 0.25) stroke = theme.prog.quarter;
    else if (res >= 0.5 && res < 1) stroke = theme.prog.half;
    else if (res === 1) stroke = theme.prog.full;
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
            style={{ marginTop: "-10px" }}
          >
            {subtitle}
          </Typography>
        </Wrapper>
      </CircularProgressbarWithChildren>
    </Container>
  );
};

export default React.memo(CircleProgress);
