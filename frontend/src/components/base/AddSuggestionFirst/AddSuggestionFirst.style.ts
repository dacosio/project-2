import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
  display: grid;
  gap: 36px;
`;

export const Header = styled.div``;

export const Body = styled.div`
  display: grid;
  gap: 36px;

  > div:last-of-type > div {
    display: flex;
    gap: 8px;
  }
`;
export const Footer = styled.div`
  justify-self: end;
`;
