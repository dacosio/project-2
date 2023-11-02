import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";


export const Wrapper = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  z-index: 9999;
`
export const Container = styled.div<{ width?: string; height?: string }>`
  height: ${({ height }) => (height ? height : "8rem")};
  width: ${({ width }) => (width ? width : "8rem")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
