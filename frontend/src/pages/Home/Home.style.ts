import styled from "@emotion/styled";
import { Col, Row, Visible, Hidden } from "react-grid-system";
import { theme } from "utils/Theme";
import Typography from "components/base/Typography";
import TextField from "components/base/TextField";

export const Container = styled.div`
  box-sizing: border-box;

  .text {
    margin-top: 1rem;
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
    flex-flow: column;

    @media (min-width: 768px) {
      justify-content: flex-start;
      flex-flow: row;
    }

    > div {
      width: 100%;
      outline: 2px solid ${theme.text.accent};
      border-radius: 4px;
      overflow: hidden;
      @media (min-width: 768px) {
        width: 40%;
      }
    }
  }
`;

export const Hide = styled(Hidden)``;

export const Features = styled(Row)`
  background-color: #fff;
  padding-top: 4rem;
  padding-bottom: 4rem;
  @media (max-width: 992px) {
    padding-top: 0rem;
    gap: 1rem;
  }
`;

export const About = styled(Row)`
  padding: 1rem;
  background: linear-gradient(#f4f6f9, #fff);
  @media (max-width: 992px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

export const DiscoverContent = styled.div`
  max-width: 760px;
  padding: 4rem 0;

  @media (min-width: 992px) {
  }
`;

export const AboutDisplay = styled(Col)`
  display: flex;
  flex-flow: column;
  align-items: center;
  img {
    max-width: 400px;
    position: relative;
    @media (min-width: 1100px) {
      max-width: 500px;
    }
  }
  @media (min-width: 992px) {
    align-items: flex-end;
  }
`;

export const AboutFrame = styled.div`
  position: static;
`;

export const AboutTypography = styled.div`
  position: absolute;
  top: 7rem;
  right: 10rem;
  @media (min-width: 1100px) {
    top: 10rem;
    right: 12rem;
  }
`;

export const AboutDetails = styled(Col)`
  display: flex;
  flex-flow: column;
  gap: 1rem;
  @media (min-width: 576px) {
    gap: 3rem;
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    max-width: 60px;
    height: auto;
  }
`;

export const Column = styled(Col)`
  background-color: red;
`;

export const Sacolumn = styled(Col)`
  background-color: white;
`;

export const Header = styled(Row)`
  height: 100vh;
  padding: 1rem;
  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

export const HeaderContents = styled(Col)`
  .image {
    max-width: 100%;
  }
  @media (max-width: 767px) {
    text-align: center; /* Center-align text for screens 768px or smaller */

    /* Additional styles for the title1 Typography component */
    & > :first-child {
      text-align: center; /* Center-align the first Typography component */
    }
  }
`;
