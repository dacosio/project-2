import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

import Typography from "../../base/Typography";

export const Container = styled.div``;
export const TextArea = styled.textarea`
  width: 100%;
  border-radius: 4px;
  border: 1px solid black;
  box-sizing: border-box;
`;

export const Error = styled(Typography)`
  margin-top: 4px;
`;
