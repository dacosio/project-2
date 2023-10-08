import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MemberCard from "../../../src/components/base/MemberCard";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { Row, Col } from "react-grid-system";

const meta: Meta<typeof MemberCard> = {
  title: "Base/MemberCard",
  component: () => {
    const members: { name: string; role: string }[] = [
      { name: "Don Apollo Cosio", role: "Developer" },
      { name: "Yuhwan Ban", role: "Developer" },
      { name: "Guia Chavez", role: "Developer" },
      { name: "Philippe Gabriel Hernandez", role: "Developer" },
      { name: "Pujan Shakya", role: "Developer" },
      { name: "Monica Esquivel", role: "Designer" },
      { name: "Mugdha Gupta", role: "Designer" },
      { name: "Kanin Phuvanatnaranubala", role: "Designer" },
    ];

    return (
      <Container>
        <Row style={{ width: "100%" }} nogutter>
          {members.map((member, index) => (
            <Col
              sm={6}
              md={4}
              lg={3}
              style={{
                padding: "16px 32px",
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
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
