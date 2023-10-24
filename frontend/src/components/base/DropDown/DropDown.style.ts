import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import Typography from "../Typography";

const fontStyle = `
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  font-family: "Inter";
`;

export const Container = styled.div`
  display: grid;
  gap: 8px;
`;

export const Select = styled.select`
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;
  min-width: 100px;
  padding: 12px 8px;
  border: none;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.btn.text.primary};
  background-color: ${({ theme }) => theme.bg.primary};
  ${fontStyle}

  :focus {
    outline: none;
  }
`;

export const Option = styled.option``;

export const Error = styled(Typography)`
  padding: 0 8px;
`;
