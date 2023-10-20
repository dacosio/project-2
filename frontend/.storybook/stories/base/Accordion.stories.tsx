import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "../../../src/components/base/Accordion";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";

const meta: Meta<typeof Accordion> = {
  title: "Base/Accordion",
  component: () => {
    return (
      <Container>
        <Accordion label="Accordion">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          aliquam ac neque eget accumsan. Aenean commodo est sed pharetra
          facilisis. Donec ligula nunc, consectetur a ante ac, convallis blandit
          tortor. Nulla nec lectus erat. Nam sodales vestibulum viverra. Donec
          accumsan cursus accumsan. Aliquam nec posuere quam, id tincidunt dui.
          Etiam dictum mollis mauris vitae scelerisque.
        </Accordion>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
