import React from "react";
import { FooterProps } from "./Footer.props";
import { Container, User, Date, Left, Test } from "./Footer.style";
import useAuth from "utils/hooks/useAuth";
import Typography from "components/base/Typography";
import { useTheme } from "@emotion/react";
// /** @jsxImportSource @emotion/react */
const Footer = (props: FooterProps): JSX.Element => {
  const { today } = props;
  const { email } = useAuth();
  const theme = useTheme();
  return (
    <Container>
      <User>
        <Left>Current user:</Left>
        <Typography>{email}</Typography>
      </User>

      <Date>
        <Left>Date Today:</Left>
        {today}
      </Date>
      <Typography variant="body" textColor="secondary">
        {today}
      </Typography>
    </Container>
  );
};

export default Footer;
