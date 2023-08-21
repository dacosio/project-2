import React from "react";
import { FooterProps } from "./Footer.props";
import { Container, Status, User, Date, Left } from "./Footer.style";
import useAuth from "hooks/useAuth";

const Footer = (props: FooterProps): JSX.Element => {
  const { today } = props;
  const { email } = useAuth();

  return (
    <Container>
      <User>
        <Left>Current user:</Left> {email}
      </User>

      <Date>
        <Left>Date Today:</Left> {today}
      </Date>
    </Container>
  );
};

export default Footer;
