import styled from "@emotion/styled";

import Typography from "../../base/Typography";

const fontStyle = `
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  font-family: inherit;
`;

export const Container = styled.div`
  display: grid;
  gap: 8px;
`;

export const LabelContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FieldContainer = styled.div<{ error: boolean }>`
  padding: 16px 8px;
  display: flex;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.grey.shade3};
  align-items: center;
  gap: 12px;
  flex-grow: 1;
  background-color: ${({ theme }) => {
    return theme.grey.noshade;
  }};
`;

export const Field = styled.input`
  ${fontStyle};
  background-color: ${({ theme }) => theme.grey.noshade};
  flex-grow: 1;
  border: none;
  color: ${({ theme }) => theme.grey.shade9};

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

export const Error = styled(Typography)`
  padding: 0 8px;
`;

export const Prefix = styled.span`
  color: ${(props) => props.theme.grey.shade8};
  ${fontStyle};
`;
