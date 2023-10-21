import React, { useRef, useState } from "react";
import { PhotoUploadProps } from "./PhotoUpload.props";
import { Container, UploadPhoto } from "./PhotoUpload.style";
import Button from "../Button";

import ImageUpload from "../../../images/ImageUpload.svg";

const PhotoUpload = (props: PhotoUploadProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState<Blob | null>(null);

  const handleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileInput = event.target.files[0];
      if (fileInput) {
        setImage(fileInput);
      }
    }
  };

  return (
    <Container>
      <UploadPhoto onClick={handleImageClick}>
        {image ? (
          <img src={URL.createObjectURL(image)} alt="" />
        ) : (
          <img src={ImageUpload} alt="" />
        )}
        <input
          type="file"
          ref={inputRef}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </UploadPhoto>
      <Button
        text="Upload Photo"
        variant="primary"
        size="sm"
        style={{ color: "white" }}
      ></Button>
    </Container>
  );
};

export default React.memo(PhotoUpload);
