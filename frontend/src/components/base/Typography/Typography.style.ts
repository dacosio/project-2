import { Theme } from "types/Theme";
import styled from "@emotion/styled";

import { pxToRem } from "../../../utils/Theme";

import { Variants, TypographyProps } from "./Typography.props";

const styles: Record<Variants, string> = {
  title1: `
        font-size: ${pxToRem(62)};
        line-height: 72px;
    `,
  title2: `
        font-size: ${pxToRem(48)};
        line-height: 56px;
    `,
  title3: `
        font-size: ${pxToRem(40)};
        line-height: 48px;
    `,
  title4: `
        font-size: ${pxToRem(32)};
        line-height: 40px;
    `,
  title5: `
        font-size: ${pxToRem(24)};
        line-height: 32px;
    `,
  body: `
        font-size: ${pxToRem(16)};
        line-height: 24px;
    `,
  label: `
        font-size: ${pxToRem(14)};
        line-height: 24px;
    `,
  caption: `
        font-size: ${pxToRem(12)};
        line-height: 16px;
    `,
  small: `
        font-size: ${pxToRem(10)};
        line-height: 12px;
    `,
  overline: `
        font-size: ${pxToRem(11)};
        line-height: 12px;
        text-transform: uppercase;
        letter-spacing: 2px;
    `,
};

const weights: Record<string, string> = {
  Regular: "400",
  Medium: "500",
  Black: "900",
};

const font: Record<string, string> = {
  title1: weights.Regular,
  title2: weights.Regular,
  title3: weights.Regular,
  title4: weights.Regular,
  title5: weights.Regular,
  body: weights.Medium,
  label: weights.Medium,
  caption: weights.Medium,
  small: weights.Medium,
  overline: weights.Black,
};

export const P = styled.p<TypographyProps>`
  ${({ variant }) => styles[variant || "body"]};
  font-weight: ${({ variant, weight }) => weight || font[variant || "body"]};
  color: ${({ theme, textColor = "shade9" }) => {
    const selectedColor = { ...theme.grey, ...theme.brand }[textColor]; //the color will not work on storybook since it does not run in runtime
    return selectedColor;
  }};
  text-align: ${({ align }) => align || "left"};
  margin: 0;
`;