import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AddChoiceModal from "../../../src/components/module/AddChoiceModal";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { store } from "../../../src/app/store";
import { Provider } from "react-redux";
import Button from "../../../src/components/base/Button";

const meta: Meta<typeof AddChoiceModal> = {
  title: "Module/AddChoiceModal",
  component: () => {
    const [visibility, setVisibility] = useState<boolean>(true);

    const handleToggle = () => {
      setVisibility((oldValue) => !oldValue);
    };

    return (
      <Container>
        <Provider store={store}>
          <Button text="Modal" onClick={handleToggle} />
          <AddChoiceModal
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
