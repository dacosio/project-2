import React, { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SingleImageInput from "../../../src/components/base/SingleImageInput";
import Container from "../../components/Container";
import Wrapper from "../../components/Wrapper";
import { ImageType } from "react-images-uploading";

const meta: Meta<typeof SingleImageInput> = {
  title: "Base/SingleImageInput",
  component: () => {
    const [image1, setImage1] = useState<ImageType | undefined>(undefined);
    const [image2, setImage2] = useState<ImageType | undefined>(undefined);

    useEffect(() => {
      console.log(image1);
    }, [image1]);

    useEffect(() => {
      console.log(image2);
    }, [image2]);

    useEffect(() => {
      const main = async () => {
        const response = await fetch("https://picsum.photos/300/300");
        const blob = await response.blob();
        const file = new File([blob], "image.jpg");
        const fileReader = new FileReader();
        fileReader.onload = () => {
          setImage2({ dataURL: fileReader.result?.toString(), file: file });
        };
        fileReader.readAsDataURL(blob);
      };
      main();
    }, []);

    return (
      <Container>
        <SingleImageInput
          image={image1}
          setImage={setImage1}
          style={{ width: "300px" }}
        />
        <SingleImageInput
          image={image1}
          sizing="mobile"
          setImage={setImage1}
          style={{ width: "150px" }}
        />
        <SingleImageInput
          image={image2}
          setImage={setImage2}
          style={{ width: "300px" }}
        />
        <SingleImageInput
          image={image2}
          sizing="mobile"
          setImage={setImage2}
          style={{ width: "150px" }}
        />
      </Container>
    );
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
