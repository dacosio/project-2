import React from "react";
import { HomeFooterProps } from "./HomeFooter.props";
import { Container } from "./HomeFooter.style";
import Typography from "../../base/Typography";

const HomeFooter = (props: HomeFooterProps): JSX.Element => {
  return (
    <Container>
      <Typography variant="small" weight="700" textColor="n0" align="center">
        ©Team Lumpia 2023
      </Typography>
    </Container>
  );
};

export default React.memo(HomeFooter);
