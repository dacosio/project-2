import React from "react";
import { MemberCardProps } from "./MemberCard.props";
import {
  Background,
  Container,
  FooterContainer,
  HeaderContainer,
  IconContainer,
  Image,
  ImageContainer,
} from "./MemberCard.style";
import Typography from "../Typography";
import { Leaf } from "../SVG";

const MemberCard = (props: MemberCardProps): JSX.Element => {
  const { source, name, role } = props;

  return (
    <Container>
      <HeaderContainer>
        <ImageContainer>
          <Background />
          <Image src={source} />
          <IconContainer>
            <Leaf />
          </IconContainer>
        </ImageContainer>
      </HeaderContainer>
      <FooterContainer>
        <Typography variant="title4" align="center">
          {name}
        </Typography>
        <Typography variant="body" align="center">
          {role}
        </Typography>
      </FooterContainer>
    </Container>
  );
};

export default React.memo(MemberCard);
