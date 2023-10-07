import { Theme } from "types/Theme";
import styled from "@emotion/styled";

import { pxToRem } from "../../../utils/Theme";

import { Variants, TypographyProps } from "./Typography.props";

const styles: Record<Variants, string> = {
  title1: `
      font-size: ${pxToRem(60)};
      line-height: 76px;
      letter-spacing: -2%;
    `,
  title2: `
      font-size: ${pxToRem(36)};
      line-height: 46px;
      letter-spacing: -2%;
    `,
  title3: `
      font-size: ${pxToRem(28)};
      line-height: 38px;
      letter-spacing: 0;
    `,
  title4: `
      font-size: ${pxToRem(22)};
      line-height: 28px;
      letter-spacing: 0;
    `,
  title5: `
      font-size: ${pxToRem(20)};
      line-height: 25px;
      letter-spacing: 0;
    `,
  subtitle: `
      font-size: ${pxToRem(20)};
      line-height: 25px;
      letter-spacing: 0;
    `,
  body: `
      font-size: ${pxToRem(16)};
      line-height: 22px;
      letter-spacing: 0;
      font-family: "Inter";
    `,
  small: `
      font-size: ${pxToRem(14)};
      line-height: 20px;
      letter-spacing: 0;
      font-family: "Inter"; 
    `,
  mobile: `
      font-size: ${pxToRem(12)};
      line-height: 18px;
      letter-spacing: 0;
      `,
  btn: `
      font-size: ${pxToRem(14)};
      line-height: 17px;
      letter-spacing: 0;
    `,
  tag: `
      font-size: ${pxToRem(12)};
      line-height: 15px;
      letter-spacing: 0;
    `,
};

const weights: Record<string, string> = {
  Regular: "400",
  Medium: "500",
  Bold: "700",
};

const font: Record<Variants, string> = {
  title1: weights.Bold,
  title2: weights.Bold,
  title3: weights.Bold,
  title4: weights.Bold,
  title5: weights.Bold,
  subtitle: weights.Medium,
  body: weights.Regular,
  btn: weights.Regular,
  mobile: weights.Regular,
  small: weights.Regular,
  tag: weights.Regular,
};

export const P = styled.p<TypographyProps>`
  ${({ variant }) => styles[variant || "body"]};
  font-weight: ${({ variant, weight }) => weight || font[variant || "body"]};
  color: ${({ theme, textColor = "shade9" }) => {
    const selectedColor = {
      ...theme.neutral,
      ...theme.grey,
      ...theme.brand,
      ...theme.btn.text,
      ...theme.btn.color,
    }[textColor]; //the color may not work on storybook since it does not run in runtime
    return selectedColor;
  }};
  text-align: ${({ align }) => align || "left"};
  margin: 0;
`;
