import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div<{ width?: string; height?: string }>`
  height: ${({ height }) => (height ? height : "8rem")};
  width: ${({ width }) => (width ? width : "8rem")};
`;
