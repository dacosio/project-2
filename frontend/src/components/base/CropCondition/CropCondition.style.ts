import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  padding: 16px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  background-color: ${theme.grey.noshade};
  box-sizing: border-box;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
`;

export const Temps = styled.div``;

export const Logo = styled.div``;
