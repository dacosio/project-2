import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
  display: grid;
  justify-items: start;
  gap: 32px;
  padding: 0 16px 20px 16px;
`;

export const Body = styled.div`
  display: grid;
  gap: 32px;

  > div {
    display: grid;
    gap: 16px;
  }

  > div:first-of-type > div:first-of-type {
    display: grid;
    gap: 4px;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 20px;
`;

export const Footer = styled.div`
  justify-self: end;
  gap: 10px;
  display: flex;
`;
