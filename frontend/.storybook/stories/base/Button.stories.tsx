import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "../../../src/components/base/Button";
import Container from "../../components/Container";
import { Eye } from "../../../src/components/base/SVG";

const meta: Meta<typeof Button> = {
  title: "Base/Button",
  component: () => {
    return (
      <Container background="white">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div style={{ marginRight: "20px", marginBottom: "30px" }}>
            <Button
              text="Button"
              variant="primary"
              style={{ marginBottom: "5px" }}
            />
            <Button
              text="Primary Button with Icon"
              icon={<Eye fill="white" height={15} width={20} />}
              style={{ marginBottom: "5px" }}
            />
            <Button
              text="Primary Button with Icon"
              icon={<Eye fill="white" height={15} width={20} />}
              iconPosition="before"
              style={{ marginBottom: "5px" }}
            />
            <Button
              icon={<Eye fill="white" height={15} width={20} />}
              style={{ marginBottom: "5px" }}
              iconPosition="after"
            />
          </div>
          <div style={{ marginRight: "20px", marginBottom: "30px" }}>
            <Button
              text="Outline Button"
              variant="outline"
              style={{ marginBottom: "5px" }}
            />
            <Button
              text="Outline Button with Icon"
              variant="outline"
              icon={<Eye fill="#E35D32" height={15} width={20} />}
              style={{ marginBottom: "5px" }}
            />
            <Button
              text="Outline Button with Icon"
              variant="outline"
              icon={<Eye fill="#E35D32" height={15} width={20} />}
              iconPosition="before"
              style={{ marginBottom: "5px" }}
            />
            <Button
              variant="outline"
              icon={<Eye fill="#E35D32" height={15} width={20} />}
              style={{ marginBottom: "5px" }}
              iconPosition="after"
            />
          </div>
          <div style={{ marginRight: "20px", marginBottom: "30px" }}>
            <Button
              text="Disabled Button"
              variant="disabled"
              style={{ marginBottom: "5px" }}
            />
            <Button
              text="Disabled Button with Icon"
              variant="disabled"
              icon={<Eye fill="#BBC2DC" height={15} width={20} />}
              style={{ marginBottom: "5px" }}
            />
            <Button
              text="Disabled Button with Icon"
              variant="disabled"
              icon={<Eye fill="#BBC2DC" height={15} width={20} />}
              iconPosition="before"
              style={{ marginBottom: "5px" }}
            />
            <Button
              variant="disabled"
              icon={<Eye fill="#BBC2DC" height={15} width={20} />}
              style={{ marginBottom: "5px" }}
              iconPosition="after"
            />
          </div>

          <div style={{ marginRight: "20px" }}>
            <Button
              text="Tonal"
              variant="tonal"
              style={{ marginBottom: "5px" }}
            />
            <Button
              text="Unselected Button with Icon"
              variant="tonal"
              icon={<Eye fill="#BBC2DC" height={15} width={20} />}
              style={{ marginBottom: "5px" }}
            />
            <Button
              text="Tonal Button with Icon"
              variant="tonal"
              icon={<Eye fill="#BBC2DC" height={15} width={20} />}
              iconPosition="before"
              style={{ marginBottom: "5px" }}
            />
            <Button
              variant="tonal"
              icon={<Eye fill="#BBC2DC" height={15} width={20} />}
              style={{ marginBottom: "5px" }}
              iconPosition="after"
            />
          </div>

          <div style={{ marginRight: "20px" }}>
            <Button
              text="Elevated"
              variant="elevated"
              style={{ marginBottom: "5px" }}
            />
            <Button
              text="Elevated Button with Icon"
              variant="elevated"
              icon={<Eye fill="#BBC2DC" height={15} width={20} />}
              style={{ marginBottom: "5px" }}
            />
            <Button
              text="Elevated Button with Icon"
              variant="elevated"
              icon={<Eye fill="#BBC2DC" height={15} width={20} />}
              iconPosition="before"
              style={{ marginBottom: "5px" }}
            />
            <Button
              variant="elevated"
              icon={<Eye fill="#BBC2DC" height={15} width={20} />}
              style={{ marginBottom: "5px" }}
              iconPosition="after"
            />
          </div>
        </div>
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Collection: Story = {};
