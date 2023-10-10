import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

import Typography from "../../base/Typography";

const fontStyle = `
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  font-family: "Inter";
`;

export const Container = styled.div`
  display: grid;
  gap: 4px;
`;

export const TextArea = styled.textarea`
  ${fontStyle};
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.grey.shade3};
  box-sizing: border-box;
  padding: 12px 20px 12px 8px;
  color: ${({ theme }) => theme.grey.shade9};
  background-color: ${({ theme }) => theme.grey.noshade};
  resize: none;

  :focus {
    outline: none;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const Error = styled(Typography)`
  padding: 0 16px;
`;
