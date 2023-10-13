import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
  padding: 16px 20px;
  background-color: #FFFFFF;
  border: 1px solid #D1D1D9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
`;

export const AvatarWrapper = styled.div`
  text-align: right;
  cursor: pointer;
`;

export const LogOutContainer = styled.div`
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: ${({ theme }) => theme.bg.primary};
  margin-top: 6px;
  padding: 8px 16px;
  position: absolute;
  right: 20%;
  cursor: pointer;
  // top: 120%;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    right: 10px;
    border-width: 0 10px 10px 10px;
    border-style: solid;
    border-color: transparent transparent ${({ theme }) => theme.bg.primary}
      transparent;
  }

  :hover {
    background-color: ${({ theme }) => theme.btn.color.lightest};
  }
`;
