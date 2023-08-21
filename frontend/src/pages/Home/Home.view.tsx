import React from "react";
import { HomeGeneratedProps } from "./Home.props";
import { Container } from "./Home.style";

const HomeView = (props: HomeGeneratedProps) => {
  return (
    <Container> I am Home Screen and I can be viewed by the public </Container>
  );
};

export default HomeView;
