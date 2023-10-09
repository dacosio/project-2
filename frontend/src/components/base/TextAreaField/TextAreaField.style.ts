import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

import Typography from "../../base/Typography";

const fontStyle = `
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  font-family: inherit;
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
  padding: 8px 16px;
  color: ${({ theme }) => theme.grey.shade9};
  background-color: ${({ theme }) => theme.grey.noshade};

  :focus {
    outline: none;
  }
`;

export const Error = styled(Typography)`
  padding: 0 16px;
`;
