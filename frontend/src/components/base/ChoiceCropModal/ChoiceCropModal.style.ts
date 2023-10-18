import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div``;

export const ModalBox = styled.div`
  max-width: 637px;
  padding: 3rem 2rem 2rem 2rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  gap: 1rem;
`;

export const Description = styled.div`
`;

export const CropInformation = styled.div`
`;

export const Composition = styled.div`
display: grid;
gap: 1rem;
`;

export const CompositionDetails = styled.div`
display: flex;
justify-content: space-between;
padding-bottom: .5rem;
border-bottom: 1px solid ${theme.neutral.n30};
`;

export const Action = styled.div`
display: flex;
gap: 1rem;
`;
