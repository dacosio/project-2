import React from "react";
import { HomeGeneratedProps } from "./Home.props";
import { Container } from "./Home.style";
import Typography from "components/base/Typography";
import Card from "components/base/Card/Card.view";

const HomeView = (props: HomeGeneratedProps) => {
  return (
    <>
      <Container>I am Home Screen and I can be viewed by the public </Container>
      <Card
        headerText="New Card"
        subText="Some Subtitle"
        image="https://fastly.picsum.photos/id/235/1200/500.jpg?hmac=QZQVKfjXK390HjcIi_E2NKw_DvFZjBz41k6PKJCE5ho"
        description="some description about the image"
      />
    </>
  );
};

export default HomeView;
