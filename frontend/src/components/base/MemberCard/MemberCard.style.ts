import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  gap: 16px;
  word-break: break-word;
`;

export const HeaderContainer = styled.div`
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 100%;
  height: auto;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bg.secondary};

  :hover {
    background-color: ${({ theme }) => theme.btn.color.token};
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: grid;
  justify-items: end;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-flow: column;
`;
