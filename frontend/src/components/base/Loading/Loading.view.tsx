import React from "react";
import { LoadingProps } from "./Loading.props";
import { Container, Wrapper } from "./Loading.style";
import Lottie from "lottie-react";
import * as animation from ".././../../const/loading.json";

const Loading = (props: LoadingProps): JSX.Element => {
  return (
    <Wrapper>
      <Container {...props}>
        <Lottie animationData={animation} loop />
      </Container>
    </Wrapper>
  );
};

export default React.memo(Loading);
