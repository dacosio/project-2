import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import Typography from "../Typography";

const fontStyle = `
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  font-family: "Inter";
`;

export const Container = styled.div``;

export const InputContainer = styled.div`
  border-radius: 4px;
  padding: 8px 12px;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  background-color: white;
  display: flex;
  gap: 8px;
  box-sizing: border-box;
`;

export const InputText = styled.input`
  border: none;
  ${fontStyle}

  :focus {
    outline: none;
  }
`;

export const IconContainer = styled.div`
  cursor: pointer;
`;

export const ListContainer = styled.div`
  width: 100%;
  margin-top: 6px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
`;

export const ItemContainer = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  box-sizing: border-box;

  :not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.neutral.n10};
  }
`;

export const Error = styled(Typography)`
  padding: 0 8px;
`;

export const InputHidden = styled.input``;
