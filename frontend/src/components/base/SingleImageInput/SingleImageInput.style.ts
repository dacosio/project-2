import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div``;

export const InputContainer = styled.div`
  width: 100%;
  border-radius: 1rem;
  aspect-ratio: 1;
  background-color: ${({ theme }) => theme.neutral.n20};
  display: grid;
  align-items: center;
  justify-items: center;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 50%;
  aspect-ratio: 1;
  cursor: pointer;
`;
