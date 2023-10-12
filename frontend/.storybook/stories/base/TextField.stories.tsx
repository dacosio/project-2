import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import TextField from "../../../src/components/base/TextField";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { Eye, EyeOff, LocationSvg } from "../../../src/components/base/SVG";

const meta: Meta = {
  title: "Base/TextField",
  component: () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
      <Container background="white">
        <Wrapper>
          <div style={{ display: "grid", gap: "64px" }}>
            <TextField
              label="Email"
              value={email}
              setValue={setEmail}
              placeholder="user@nomail.com"
              error="Please enter your email."
            />
            <TextField
              LeftComponent={<Eye />}
              label="Email"
              value={email}
              setValue={setEmail}
              placeholder="user@nomail.com"
            />
            <TextField
              LeftComponent={<Eye />}
              prefix="Email"
              label="Email"
              value={email}
              setValue={setEmail}
              placeholder="user@nomail.com"
            />
            <TextField
              prefix="Email"
              label="Email"
              value={email}
              setValue={setEmail}
              placeholder="user@nomail.com"
            />
            <TextField
              label="Password"
              value={password}
              setValue={setPassword}
              secured
              placeholder="******"
            />
            <TextField
              LeftComponent={<EyeOff />}
              label="Password"
              value={password}
              setValue={setPassword}
              secured
              placeholder="******"
            />
            <TextField
              LeftComponent={<EyeOff />}
              prefix="Password"
              label="Password"
              value={password}
              setValue={setPassword}
              secured
              placeholder="******"
            />
            <TextField
              prefix="Password"
              label="Password"
              value={password}
              setValue={setPassword}
              secured
              placeholder="******"
            />
          </div>
          <TextField
            LeftComponent={<LocationSvg />}
            labelVariant="body"
            labelWeight="500"
            label="Email"
            value={email}
            setValue={setEmail}
            placeholder="Search location"
          />
        </Wrapper>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {};
