import React from "react";
import { TeamGeneratedProps } from "./Team.props";
import { Container, ItemContainer, ListContainer, Wrapper } from "./Team.style";
import Typography from "components/base/Typography";
import { Col } from "react-grid-system";
import MemberCard from "components/base/MemberCard";
import HomeNavigation from "components/layout/HomeNavigation";

const TeamView = (props: TeamGeneratedProps) => {
  const { members } = props;

  return (
    <Container>
      <HomeNavigation />
      <Wrapper>
        <Typography variant="title1" textColor="accent" weight="700">
          Meet the team that made this platform sprout
        </Typography>
        <Typography variant="subtitle">
          Check out these passionate developers, designers, and creative problem
          solvers
        </Typography>
        <ListContainer
          style={{ width: "100%", justifyContent: undefined }}
          nogutter
        >
          {members &&
            members.map((member, index) => (
              <ItemContainer
                sm={6}
                md={4}
                lg={3}
                style={{
                  padding: undefined,
                  display: "grid",
                }}
              >
                <MemberCard
                  source={member.source}
                  name={member.name}
                  role={member.role}
                  url={member.url}
                  key={index}
                />
              </ItemContainer>
            ))}
        </ListContainer>
      </Wrapper>
    </Container>
  );
};

export default TeamView;
