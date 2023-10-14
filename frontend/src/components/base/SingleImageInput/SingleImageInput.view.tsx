import React, { useState } from "react";
import { SingleImageInputProps } from "./SingleImageInput.props";
import { Container, Image, InputContainer } from "./SingleImageInput.style";
import ImageUploading, {
  ErrorsType,
  ImageListType,
  ImageType,
} from "react-images-uploading";
import { AddImage } from "../SVG";

const SingleImageInput = (props: SingleImageInputProps): JSX.Element => {
  const { image, setImage, style, sizing = "desktop" } = props;

  const [inputImages, setInputImages] = useState<ImageListType>(
    image ? [image] : []
  );

  const onChange = async (value: ImageListType) => {
    setInputImages(value);
    setImage(value[0]);
  };

  const handleOnError = (error: ErrorsType) => {
    if (error?.maxNumber) {
    }
    if (error?.acceptType) {
    }
    if (error?.maxFileSize) {
    }
  };

  return (
    <>
      <ImageUploading
        value={inputImages}
        maxFileSize={10485760}
        onChange={onChange}
        onError={handleOnError}
        dataURLKey="dataURL"
        acceptType={["jpg", "png"]}
      >
        {({ imageList, onImageUpload, onImageUpdate, dragProps }) => (
          <Container style={style}>
            {inputImages.length === 0 && (
              <InputContainer onClick={onImageUpload} {...dragProps}>
                <AddImage
                  width={sizing === "desktop" ? 50 : 25}
                  height={sizing === "desktop" ? 50 : 25}
                />
              </InputContainer>
            )}
            {imageList.map((image, index) => (
              <Image
                src={image.dataURL}
                onClick={() => onImageUpdate(index)}
                key={index}
              />
            ))}
          </Container>
        )}
      </ImageUploading>
    </>
  );
};

export default React.memo(SingleImageInput);
