import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
display: grid;
gap: 1rem;
justify-content: center;
`;

export const UploadPhoto = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1rem;
  align-items: center;
  img {
    width: 150px;
  }
`;
