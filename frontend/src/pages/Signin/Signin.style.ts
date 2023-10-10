import styled from "@emotion/styled";
import { Col, Row, Visible, Hidden } from "react-grid-system";
import { theme } from "utils/Theme";

export const Container = styled.div`
  // background-color: ${theme.brand.primary};
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

export const Modalbox = styled.div`
  width: 300px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.292);
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  @media (min-width: 768px) {
    flex-flow: row;
    width: 725px;
  }
`;

export const Header = styled.div`
  padding: 2rem 2rem 0 2rem;
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

export const SingupForm = styled.form`
  p {
    font-size: 16px;
    font-weight: 400;
  }
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    p {
      font-size: 20px;
      font-weight: 400;
    }
  }
`;

export const SingupDetails = styled.form`
  padding: 2rem;
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  gap: 1rem;
  justify-content: center;
`;

export const SubmitButton = styled.input`
  font-size: 14px;
  font-weight: 700;
  background-color: ${theme.brand.accent};
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  color: ${theme.text.invert};
  margin-top: 0.5rem;
  width: 100%;
`;
