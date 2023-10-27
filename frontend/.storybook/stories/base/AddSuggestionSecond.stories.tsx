import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AddSuggestionSecond from "../../../src/components/base/AddSuggestionSecond";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { Provider } from "react-redux";
import { store } from "../../../src/app/store";

const meta: Meta<typeof AddSuggestionSecond> = {
  title: "Base/AddSuggestionSecond",
  component: () => {
    return (
      <Container>
        <Provider store={store}>
          <AddSuggestionSecond />
        </Provider>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
