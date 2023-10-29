import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AddChoiceFirst from "../../../src/components/base/AddChoiceFirst";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { Provider } from "react-redux";
import { store } from "../../../src/app/store";

const meta: Meta<typeof AddChoiceFirst> = {
  title: "Base/AddChoiceFirst",
  component: () => {
    const handleNext = () => {};

    return (
      <Container>
        <Provider store={store}>
          <AddChoiceFirst onNext={handleNext} />
        </Provider>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
