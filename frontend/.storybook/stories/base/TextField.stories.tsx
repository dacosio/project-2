import React, { useState, MouseEvent } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import TextField from "../../../src/components/base/TextField";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { Eye, EyeOff, Info } from "../../../src/components/base/SVG";
import Typography from "../../../src/components/base/Typography";

const meta: Meta = {
  title: "Base/TextField",
  component: () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [visibility, setVisibility] = useState<boolean>(true);

    const handleOnToggle = (event: MouseEvent<HTMLDivElement>) => {
      setVisibility((oldValue) => !oldValue);
    };

    const instruction = (
      <div
        style={{
          position: "relative",
        }}
      >
        <div
          onClick={handleOnToggle}
          style={{
            display: "grid",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Info fill="#565A6A" />
        </div>
        {visibility && (
          <>
            <div
              style={{
                position: "absolute",
                borderRadius: "8px",
                padding: "12px",
                backgroundColor: "#FCFFEB",
                minWidth: "280px",
                top: "0",
                left: "50%",
                transform: "translateX(-25%) translateY(-105%)",
              }}
            >
              <Typography variant="small">Your password must</Typography>
              <ul style={{ marginBottom: "0" }}>
                <li>
                  <Typography variant="small">
                    have at least 10 characters
                  </Typography>
                </li>
                <li>
                  <Typography variant="small">
                    have at least one symbol
                  </Typography>
                </li>
                <li>
                  <Typography variant="small">
                    be a mix of uppercase and lowercase letters
                  </Typography>
                </li>
                <li>
                  <Typography variant="small">have no spaces</Typography>
                </li>
              </ul>
            </div>
            <div
              style={{
                position: "absolute",
                left: "0",
                top: "0",
                zIndex: "-1",
                borderLeft: "20px solid transparent",
                borderRight: "20px solid transparent",
                borderTop: "30px solid #FCFFEB",
                transform: "translateX(-25%) translateY(-100%)",
              }}
            ></div>
          </>
        )}
      </div>
    );

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
              leftComponent={<Eye />}
              label="Email"
              value={email}
              setValue={setEmail}
              placeholder="user@nomail.com"
            />
            <TextField
              leftComponent={<Eye />}
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
              rightComponent={instruction}
              label="Password"
              value={password}
              setValue={setPassword}
              secured
              placeholder="******"
            />
            <TextField
              leftComponent={<EyeOff />}
              label="Password"
              value={password}
              setValue={setPassword}
              secured
              placeholder="******"
            />
            <TextField
              leftComponent={<EyeOff />}
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
        </Wrapper>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {};
