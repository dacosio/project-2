import React from "react";
import { LoadingProps } from "./Loading.props";
import { Container } from "./Loading.style";
import Lottie from "lottie-react";
import * as animation from ".././../../const/loading.json";

const Loading = (props: LoadingProps): JSX.Element => {
  return (
    <Container>
      <Lottie animationData={animation} loop />
    </Container>
  );
};

export default React.memo(Loading);
