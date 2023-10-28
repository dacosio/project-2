import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AddCropResult from "../../../src/components/base/AddCropResult";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { store } from "../../../src/app/store";
import { Provider } from "react-redux";

const meta: Meta<typeof AddCropResult> = {
  title: "Base/AddSuggestionThird",
  component: () => {
    const handleLater = () => {};

    const handleNow = () => {};

    return (
      <Container>
        <Provider store={store}>
          <AddCropResult onLater={handleLater} onNow={handleNow} />
        </Provider>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
