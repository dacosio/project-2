import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

import Typography from "../../base/Typography";

export const Container = styled.div`
  display: grid;
  gap: 4px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border-radius: 4px;
  border: 1px solid black;
  box-sizing: border-box;
  padding: 6px;
`;

export const Error = styled(Typography)``;
