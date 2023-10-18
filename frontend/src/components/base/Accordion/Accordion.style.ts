import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  transition: max-height 0.5s;

  .expand {
    max-height: 1000px;
    transition: all 0.35s ease-in-out;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  cursor: pointer;
  padding: 16px 0;
`;

export const FooterContainer = styled.div`
  box-sizing: border-box;
  max-height: 0;
  overflow: hidden;
  transition: all 0.35s ease-in-out;

  > div {
    border-radius: 20px;
    padding: 16px;
    border: 1px solid #d1d1d9;
  }
`;
