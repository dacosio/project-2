import React, { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SingleImageInput from "../../../src/components/base/SingleImageInput";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { ImageType } from "react-images-uploading";

const meta: Meta<typeof SingleImageInput> = {
  title: "Base/SingleImageInput",
  component: () => {
    const [image, setImage] = useState<ImageType | undefined>(undefined);

    useEffect(() => {
      console.log(image?.dataURL);
    }, [image]);

    return (
      <Container>
        <SingleImageInput
          image={image}
          setImage={setImage}
          style={{ width: "300px" }}
        />
        <SingleImageInput
          image={image}
          sizing="mobile"
          setImage={setImage}
          style={{ width: "150px" }}
        />
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
