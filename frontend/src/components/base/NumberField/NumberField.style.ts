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

export const Container = styled.div`
  display: grid;
  gap: 8px;
`;

export const Number = styled.textarea`
  ${fontStyle};
  width: 100%;
  min-width: 300px;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  padding: 8px;
  color: ${({ theme }) => theme.btn.text.primary};
  background-color: ${({ theme }) => theme.bg.primary};
  resize: none;
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);

  ::placeholder {
    color: ${({ theme }) => theme.btn.text.disabledToken};
  }

  :focus {
    outline: none;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const Error = styled(Typography)`
  padding: 0 8px;
`;
