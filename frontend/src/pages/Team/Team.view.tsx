import React from "react";
import { TeamGeneratedProps } from "./Team.props";
import { Container, Wrapper } from "./Team.style";
import Typography from "components/base/Typography";
import { Row, Col } from "react-grid-system";
import MemberCard from "components/base/MemberCard";

const TeamView = (props: TeamGeneratedProps) => {
  const { members } = props;

  return (
    <Container>
      <Wrapper>
        <Typography variant="title1" textColor="accent">
          Meet the team that made this platform sprout
        </Typography>
        <Typography variant="subtitle">
          Check out these passionate developers, designers, and creative problem
          solvers
        </Typography>
        <Row style={{ width: "100%" }} nogutter>
          {members.map((member, index) => (
            <Col
              sm={6}
              md={4}
              lg={3}
              style={{
                padding: "16px",
                display: "grid",
              }}
            >
              <MemberCard
                source={`https://picsum.photos/300/300?random=${index + 1}`}
                name={member.name}
                role={member.role}
                key={index}
              />
            </Col>
          ))}
        </Row>
      </Wrapper>
    </Container>
  );
};

export default TeamView;
