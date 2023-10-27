import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import Typography from "../Typography";

export const Container = styled.div`
  min-width: 300px;
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 0;
    flex-flow: row;
    max-width: 725px;
  }
`;

export const Header = styled.div`
  padding: 4rem 2rem 0 2rem;
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    padding: 2rem;
    width: 25.5%;
    background-color: ${theme.brand.accent};
    p {
      font-size: 36px;
      line-height: 46px;
      color: ${theme.text.invert};
      text-align: left;
    }
  }
`;

export const SigninForm = styled.div`
  padding: 0 1rem 2rem 1rem;
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
  justify-content: center;
  @media (min-width: 768px) {
    padding: 4rem 2rem 2rem 2rem;
  }
`;

export const FormStyle = styled.div`
  display: grid;
  gap: 1rem;
`;

export const Option = styled.div`
  display: grid;
  gap: 0.5rem;
  a {
    color: ${theme.neutral.n70};
    font-weight: 500;
  }
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;
`;

export const SignUpButton = styled(Typography)`
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 5px;

  &:hover {
    color: ${(props) => props.theme.btn.text.accent};
  }
`;
