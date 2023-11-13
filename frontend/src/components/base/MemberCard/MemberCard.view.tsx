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
  const { source, name, role, url, portfolio } = props;

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
        <Typography variant="body" align="center" textColor="n70">
          {role}
        </Typography>
        {portfolio ? (
          <div
            style={{ display: "flex", justifyContent: "center", gap: ".5rem", marginTop: ".5rem" }}
          >
            {Array.isArray(portfolio) ? (
              portfolio.map((item, index) => (
                <Typography
                  key={index}
                  variant="mobile"
                  weight="bold"
                  align="center"
                  textColor="green"
                  style={{textDecoration: "underline"}}
                >
                  {item.includes("github") ? "github" : "behance"}
                </Typography>
              ))
            ) : (
              <Typography variant="small" align="center" textColor="n70">
                {portfolio.includes("github") ? "github" : "behance"}
              </Typography>
            )}
          </div>
        ) : null}
      </FooterContainer>
    </Container>
  );
};

export default React.memo(MemberCard);
