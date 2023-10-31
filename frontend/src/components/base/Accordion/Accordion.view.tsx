import React, { useState } from "react";
import { AccordionProps } from "./Accordion.props";
import { Container, FooterContainer, HeaderContainer } from "./Accordion.style";
import Typography from "../Typography";
import { ArrowDown, ArrowUp } from "../SVG";

const Accordion = (props: AccordionProps): JSX.Element => {
  const { label, children } = props;

  const [visibility, setVisibility] = useState<boolean>(false);

  const handleOnToggle = () => {
    setVisibility((oldValue) => !oldValue);
  };

  return (
    <Container>
      <HeaderContainer onClick={handleOnToggle}>
        {visibility ? <ArrowUp /> : <ArrowDown />}
        <Typography variant="title5">{label}</Typography>
      </HeaderContainer>
      <FooterContainer className={visibility ? "expand" : undefined}>
        <div>{children}</div>
      </FooterContainer>
    </Container>
  );
};

export default React.memo(Accordion);
