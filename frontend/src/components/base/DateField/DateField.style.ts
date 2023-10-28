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

export const Container = styled.div``;

export const Date = styled.input`
  ${fontStyle}
  padding: 8px 12px;
  border: none;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  :focus {
    outline: none;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const Error = styled(Typography)`
  padding: 0 8px;
`;
