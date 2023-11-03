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
import { GitHub, Leaf, LinkedIn } from "../SVG";
import { Link } from "react-router-dom";

const MemberCard = (props: MemberCardProps): JSX.Element => {
  const { source, name, role, url } = props;

  return (
    <Container>
      <HeaderContainer>
        <ImageContainer>
          <Background />
          {url ? (
            <Link to={url} target="_blank">
              <Image src={source} />
            </Link>
          ) : (
            <Image src={source} />
          )}
          <IconContainer>
            {url ? (
              <Link to={url} target="_blank">
                {url.includes("linkedin") ? (
                  <LinkedIn />
                ) : url.includes("github") ? (
                  <GitHub />
                ) : (
                  <Leaf />
                )}
              </Link>
            ) : (
              <Leaf />
            )}
          </IconContainer>
        </ImageContainer>
      </HeaderContainer>
      <FooterContainer>
        <Typography variant="title5" align="center">
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
