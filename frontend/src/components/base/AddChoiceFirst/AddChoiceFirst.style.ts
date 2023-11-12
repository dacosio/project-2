import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
  display: grid;
  gap: 32px;
  justify-items: start;
  padding: 0 16px 16px 20px;
`;

export const Header = styled.div`
  display: grid;
  gap: 8px;
`;

export const Body = styled.div`
  display: grid;
  gap: 36px;

  > div {
    display: grid;
    gap: 8px;
  }
`;
export const Footer = styled.div`
  justify-self: end;
`;
