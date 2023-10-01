import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import TextField from "../../../src/components/base/TextField";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta = {
  title: "Base/TextField",
  component: () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState("");
    return (
      <Container background="white">
        <div style={{ marginRight: "2rem" }}>
          <TextField
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="user@nomail.com"
            error="Please enter your email"
          />
        </div>

        <div>
          <TextField
            label="Password"
            value={password}
            onChangeText={setPassword}
            secured
            placeholder="******"
          />
        </div>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {};
