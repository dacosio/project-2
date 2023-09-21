import React from "react";
import { YuhwanGeneratedProps } from "./Yuhwan.props";
import { Container } from "./Yuhwan.style";
import Yuhwan from "components/base/Yuhwan";

const YuhwanView = (props: YuhwanGeneratedProps) => {
  return (
    <Container>
      <Yuhwan
        avatar="https://picsum.photos/300/300?random=1"
        title="Title"
        subtitle="Subtitle"
        image="https://picsum.photos/300/300?random=2"
        description="Description"
      />
    </Container>
  );
};

export default YuhwanView;
