import React, { useRef, useState } from 'react';
import { PhotoUploadProps } from './PhotoUpload.props';
import { Container } from './PhotoUpload.style';
import ImageUpload

const PhotoUpload = (props: PhotoUploadProps): JSX.Element => {
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  }
  return <Container>
    <div onClick={handleImageClick}>
      <img src="../" alt="" />
      
    </div>
  </Container>;
};

export default React.memo(PhotoUpload);
