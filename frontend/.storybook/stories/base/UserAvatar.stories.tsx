import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import UserAvatar from "../../../src/components/base/UserAvatar";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof UserAvatar> = {
  title: "Base/UserAvatar",
  component: () => {
    return (
      <Container>
        <Wrapper>
          <UserAvatar
            email="sprout@langara.ca"
            size="100"
            imageUrl="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3"
          />
        </Wrapper>
        <Wrapper>
          <UserAvatar
            email="project2@langara.ca"
            size="100"
            displayName="Sprout"
          />
        </Wrapper>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
