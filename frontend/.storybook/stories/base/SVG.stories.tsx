import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  /* PLOP_INJECT_IMPORT */
  Bell,
  Heart,
  Close,
  EyeOff,
  Eye,
} from "../../../src/components/base/SVG";
import Container from "../../components/Container";

const Wrapper = ({ children, label }) => {
  return (
    <div
      style={{
        marginLeft: 16,
        marginTop: 16,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {children}
      <div style={{ marginTop: "8px", color: "#000" }}>{label}</div>
    </div>
  );
};

const meta: Meta = {
  title: "Base/SVG",
  component: () => (
    <Container background="white">
      {/* PLOP_INJECT_INSTANCE*/}
        <Wrapper label="Bell">
          <Bell width={30} height={30} />
        </Wrapper>
        <Wrapper label="Heart">
          <Heart width={30} height={30} />
        </Wrapper>
        <Wrapper label="Close">
          <Close width={30} height={30} />
        </Wrapper>
      <Wrapper label="EyeOff">
        <EyeOff width={30} height={30} />
      </Wrapper>
      <Wrapper label="Eye">
        <Eye width={30} height={30} />
      </Wrapper>
    </Container>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Collection: Story = {
  args: {},
};
