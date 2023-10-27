import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AddSuggestionThird from "../../../src/components/base/AddSuggestionThird";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { store } from "../../../src/app/store";
import { Provider } from "react-redux";

const meta: Meta<typeof AddSuggestionThird> = {
  title: "Base/AddSuggestionThird",
  component: () => {
    const handleLater = () => {};

    const handleNow = () => {};

    return (
      <Container>
        <Provider store={store}>
          <AddSuggestionThird onLater={handleLater} onNow={handleNow} />
        </Provider>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
