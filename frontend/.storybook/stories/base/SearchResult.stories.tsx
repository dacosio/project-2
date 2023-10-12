import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import SearchResult from "../../../src/components/base/SearchResult";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof SearchResult> = {
  title: "Base/SearchResult",
  component: () => {
    return (
      <Container>
        <SearchResult delay={500} searchResults={undefined} />
      </Container>
    )
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
