import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
  display: grid;
  justify-items: start;
  gap: 36px;
`;

export const Header = styled.div`
  display: grid;
  gap: 8px;
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 48px;
  row-gap: 16px;

  > div {
    display: grid;
    gap: 8px;
  }

  > div > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
export const Footer = styled.div`
  justify-self: end;
  gap: 10px;
  display: flex;
`;
