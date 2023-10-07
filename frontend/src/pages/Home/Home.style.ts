import styled from "@emotion/styled";
import { Col } from "react-grid-system";
import { theme } from "utils/Theme";

export const Container = styled.div``;

export const Header = styled.div`
  background-color: #fcffeb;
  padding: 1rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .header-contents {
    max-width: 500px;
  }
  .input-landing-page {
    display: flex;
    gap: 1rem;
  }
`;

export const About = styled.div`
  background-color: #ffffff;
  padding: 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  height: 100vh;
  .about-header {
    display: flex;
    flex-flow: column;
  }
  .about-details {
    display: grid;
    gap: 2rem;
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    max-width: 80px;
    height: auto;
  }
`;

export const Contact = styled.div`
  background-color: #57cb62;
  padding: 1rem;
  height: 100vh;
  display: flex;
  align-items: center;
  gap: 2rem;
  img {
    height: 70vh;
  }
`;
export const Column = styled(Col)`
  background-color: red;
`;

export const Sacolumn = styled(Col)`
  background-color: white;
`;
