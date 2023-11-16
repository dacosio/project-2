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
import {
  GitHub,
  Leaf,
  LinkedIn,
  Designer,
  Developer,
  Behance,
  LinkedinIcon,
  GithubIcon,
  Website,
} from "../SVG";
import { Link } from "react-router-dom";

const MemberCard = (props: MemberCardProps): JSX.Element => {
  const { source, name, role, icon, url, link } = props;

  const socialMediaIcons = {
    linkedin: LinkedinIcon,
    behance: Behance,
    github: GithubIcon,
    website: Website,
  };

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
            {icon === "designer" ? (
              <Designer />
            ) : icon === "developer" ? (
              <Developer />
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
        {link && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: ".5rem",
              marginTop: ".8rem",
            }}
          >
            {Array.isArray(link) ? (
              link.map((item, index) => {
                const platform = item.includes("linkedin")
                  ? "linkedin"
                  : item.includes("behance")
                  ? "behance"
                  : item.includes("github")
                  ? "github"
                  : null;

                return (
                  <Link to={item} target="_blank" key={index}>
                    {platform ? (
                      React.createElement(socialMediaIcons[platform])
                    ) : (
                      <Website />
                    )}
                  </Link>
                );
              })
            ) : link.includes("linkedin") ? (
              <Link to={link} target="_blank">
                {React.createElement(LinkedinIcon)}
              </Link>
            ) : link.includes("behance") ? (
              <Link to={link} target="_blank">
                {React.createElement(Behance)}
              </Link>
            ) : link.includes("github") ? (
              <Link to={link} target="_blank">
                {React.createElement(GithubIcon)}
              </Link>
            ) : (
              <Link to={link} target="_blank">
                <Website />
              </Link>
            )}
          </div>
        )}
      </FooterContainer>
    </Container>
  );
};

export default React.memo(MemberCard);
