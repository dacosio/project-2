import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  max-width: 250px;
  gap: 16px;
  word-break: break-word;
`;

export const HeaderContainer = styled.div`
  position: relative;
`;

export const Image = styled.img`
  aspect-ratio: 1;
  width: 100%;
  border-radius: 50%;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: grid;
  justify-items: end;
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;
