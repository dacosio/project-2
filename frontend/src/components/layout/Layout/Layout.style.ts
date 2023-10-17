import styled from "@emotion/styled";
import { theme } from "utils/Theme";

export const Container = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
  align-items: stretch;
`;

export const Main = styled.div`
  flex-grow: 1;
`;

export const Side = styled.div`
  display: flex;
  min-height: 100%;
`;
