import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

import Typography from "../../base/Typography";

const fontStyle = `
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;  
`;

export const Container = styled.div`
  display: grid;
  gap: 4px;
`;

export const FieldContainer = styled.div<{ error: boolean }>`
  padding: 12px 8px;
  display: flex;
  border-radius: 4px;
  // border: 1px solid black;
  align-items: center;
  gap: 4px;
  flex-grow: 1;

  background-color: ${({ theme }) => {
    return theme.grey.noshade;
  }};
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
`;

export const Field = styled.input`
  ${fontStyle};
  background-color: ${({ theme }) => theme.grey.noshade};
  color: ${({ theme }) => theme.text.primary};
  flex-grow: 1;
  border: none;
  :focus {
    outline: none;
  }
  :placeholder {
    color: ${({ theme }) => theme.text.disabled};
  }
`;

export const LeftComponentContainer = styled.div<{ focus?: boolean }>`
  padding-right: 1.5px;
  // border-right: 1px solid ${({ theme }) => theme.grey.shade5};
  display: flex;
  align-items: center;
  & > svg > path {
    fill: ${({ theme, focus }) =>
      focus ? theme.btn.color.primary : theme.text.disabled};
  }
`;
export const RightComponentContainer = styled.div`
  padding-right: 1.5px;
  display: flex;
  align-items: center;
`;

export const VisibilityContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
`;

export const Error = styled(Typography)``;

export const Prefix = styled.span`
  color: ${(props) => props.theme.grey.shade8};
  ${fontStyle};
`;
