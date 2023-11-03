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

export const Header = styled(Row)`
  height: 100vh;
  padding: 1rem;
  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

export const HeaderContents = styled(Col)`
  @media (max-width: 768px) {
    text-align: center; /* Center-align text for screens 768px or smaller */

    /* Additional styles for the title1 Typography component */
    & > :first-child {
      text-align: center; /* Center-align the first Typography component */
    }
  }
`;

export const Hide = styled(Hidden)``;

export const About = styled(Row)`
  padding: 1rem;
  background-color: #fff;
  @media (max-width: 992px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
    gap: 3rem;
  }
`;

export const Discover = styled(Row)`
  padding: 1rem;
  background-color: #fff;
  @media (max-width: 992px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
    gap: 3rem;
  }
`;

export const DiscoverContent = styled.div`
max-width: 760px;
padding: 4rem 0;
`;

export const AboutDisplay = styled(Col)`
  display: flex;
  flex-flow: column;
  img {
    max-width: 100%;
    position: relative;
    top: -150px;
  }
`;

export const AboutTypography = styled.div`
  position: relative;
  top: 250px;
  left: 125px;
`;

export const AboutDetails = styled(Col)`
  display: flex;
  flex-flow: column;
  gap: 3rem;
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

export const Contact = styled(Row)`
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

export const ContactImage = styled(Col)`
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column;
  gap: 1.5rem;
  p {
    color: white;
  }
  textarea {
    height: 200px;
    width: 100%;
    border-radius: 8px;
    padding: 1rem 0.25rem;
    box-sizing: border-box;
    border: 1px solid black;
  }
  textarea::placeholder {
    font-family: "Lexend", sans-serif;
    font-size: 14px;
    font-weight: light;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  @media (max-width: 768px) {
    flex-flow: column;
    gap: 1.5rem;
  }
`;

export const Message = styled.div``;

export const ContactForm = styled(Col)`
  display: grid;
  gap: 2rem;
`;

// export const About = styled.div`
//   background-color: #ffffff;
//   padding: 1rem 10rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 6rem;
//   height: 100vh;
//   .about-header {
//     display: flex;
//     flex-flow: column;
//   }
//   .about-details {
//     display: grid;
//     gap: 2rem;
//   }
// `;

// export const Details = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   img {
//     max-width: 80px;
//     height: auto;
//   }
// `;

// export const Contact = styled.div`
//   background-color: #57cb62;
//   padding: 1rem;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   gap: 2rem;
//   img {
//     height: 70vh;
//   }
// `;

export const Column = styled(Col)`
  background-color: red;
`;

export const Sacolumn = styled(Col)`
  background-color: white;
`;
