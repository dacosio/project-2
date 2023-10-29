import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AddSuggestionFirst from "../../../src/components/base/AddSuggestionFirst";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { Provider } from "react-redux";
import { store } from "../../../src/app/store";

const meta: Meta<typeof AddSuggestionFirst> = {
  title: "Base/AddSuggestionFirst",
  component: () => {
    return (
      <Container>
        <Provider store={store}>
          <AddSuggestionFirst onNext={() => null} />
        </Provider>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
