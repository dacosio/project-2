import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Typography from "../../../src/components/base/Typography";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta = {
  title: "Base/Typography",
  component: () => {
    return (
      <Container
        background="white"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Wrapper>
          <Typography variant="title1">title1</Typography>
          <Typography variant="title2">title2</Typography>
          <Typography variant="title3">title3</Typography>
          <Typography variant="title4">title4</Typography>
          <Typography variant="title5">title5</Typography>
          <Typography variant="subtitle">subtitle</Typography>
          <Typography variant="body">body</Typography>
          <Typography variant="btn">btn</Typography>
          <Typography variant="tag">tag</Typography>
          <Typography variant="small">small</Typography>
          <Typography variant="title4">title4</Typography>
        </Wrapper>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {};
