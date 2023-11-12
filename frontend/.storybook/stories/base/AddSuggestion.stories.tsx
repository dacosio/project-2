import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import AddSuggestion from "../../../src/components/base/AddSuggestion";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { Provider } from "react-redux";
import { store } from "../../../src/app/store";

const meta: Meta<typeof AddSuggestion> = {
  title: "Base/AddSuggestion",
  component: () => {
    const [visibility, setVisibility] = useState<boolean>(false);

    return (
      <Container>
        <Provider store={store}>
          <AddSuggestion
            visibility={visibility}
            setVisibility={setVisibility}
            onLater={() => null}
            onNow={() => null}
          />
        </Provider>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
