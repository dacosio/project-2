import styled from "@emotion/styled";

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
  padding: 4px 8px;
  display: flex;
  border-radius: 4px;
  border: 1px solid black;
  align-items: center;
  gap: 4px;
  flex-grow: 1;

  background-color: ${({ theme }) => {
    return theme.grey.noshade;
  }};
`;

export const Field = styled.input`
  ${fontStyle};
  background-color: ${({ theme }) => theme.grey.noshade};
  color: 1px solid ${({ theme }) => theme.grey.shade9};
  flex-grow: 1;
  border: none;
  :focus {
    outline: none;
  }
`;

export const LeftComponentContainer = styled.div`
  padding-right: 4px;
  border-right: 1px solid ${({ theme }) => theme.grey.shade5};
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
