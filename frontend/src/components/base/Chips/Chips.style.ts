import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import { ChipsStyleProps, Variants, ButtonSizes } from "./Chips.props";


//default state
const backgroundColor: Record<Variants, string> = {
    outlined: theme.grey.noshade,
    filled: theme.btn.color.token,
  };
  const hoverBgColor: Record<Variants, string> = {
    outlined: theme.btn.color.lightest,
    filled: theme.btn.color.tokenHover,
  };
  
  //active or pressed
  const active: Record<Variants, string> = {
    outlined: theme.btn.color.outlineBg,
    filled: theme.btn.color.tokenPressed,
  };
  

  const border: Record<Variants, string> = {
    outlined: `1.5px solid ${theme.btn.color.pressed}`,
    filled: "none",
  };
  
  const padding: Record<ButtonSizes, string> = {
    sm: "8px 12px",
    md: "16px 16px",
    lg: "",
  };
  


export const ChipContainer = styled.div<ChipsStyleProps>`
max-height: 28px;
  display: inline-flex;
  align-items: center;
  padding: 4px 16px;
  border-radius: 6px;
  font-family: "Inter", sans-serif;
  background-color: ${({ variant }) => backgroundColor[variant]};
  border: ${({ variant }) => border[variant]};

  :focus {
    outline: none;
  }

  :active {
    background-color: ${({ variant }) => active[variant]};
    transform: scale(0.95);
    transition: transform 0.1s ease-in-out;
  }

  :hover {
    background-color: ${({ variant }) => hoverBgColor[variant]};
  }
  cursor: pointer;
`;

export const Label = styled.span`
//   margin-right: 8px;
`;

export const DeleteIcon = styled.span`
  cursor: pointer;
  margin-left: 4px;
  /* More styles for delete icon */
`;
