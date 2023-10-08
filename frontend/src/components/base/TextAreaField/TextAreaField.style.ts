import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

import Typography from "../../base/Typography";

const fontStyle = `
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;  
`;

export const Container = styled.div`
  display: grid;
  gap: 4px;
`;

export const TextArea = styled.textarea`
  ${fontStyle};
  width: 100%;
  border-radius: 4px;
  border: 1px solid black;
  box-sizing: border-box;
  padding: 4px 8px;

  :focus {
    outline: none;
  }
`;

export const Error = styled(Typography)``;
