import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AddSuggestionModal from "../../../src/components/module/AddSuggestionModal";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { Provider } from "react-redux";
import { store } from "../../../src/app/store";
import Button from "../../../src/components/base/Button";

const meta: Meta<typeof AddSuggestionModal> = {
  title: "Module/AddSuggestionModal",
  component: () => {
    const [visibility, setVisibility] = useState<boolean>(true);

    const handleToggle = () => {
      setVisibility((oldValue) => !oldValue);
    };

    return (
      <Container>
        <Provider store={store}>
          <Button text="Modal" onClick={handleToggle} />
          <AddSuggestionModal
            visibility={visibility}
            setVisibility={setVisibility}
          />
        </Provider>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
