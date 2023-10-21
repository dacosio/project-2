import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const StyledSidebarHeader = styled.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  > div {
    width: 100%;
    overflow: hidden;
  }
`;

export const StyledLogo = styled.div`
  width: 35px;
  min-width: 35px;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 33px;
  margin-right: 12px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
