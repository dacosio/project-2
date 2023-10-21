import React, { useState, useEffect } from "react";
import { AccountFormProps } from "./AccountForm.props";
import { Container, Form } from "./AccountForm.style";
import TextField from "../TextField";
import SingleImageInput from "../SingleImageInput";
import { ImageType } from "react-images-uploading";


const AccountForm = (props: AccountFormProps): JSX.Element => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState("");

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
    <Form>
      <SingleImageInput
          image={image1}
          sizing="mobile"
          setImage={setImage1}
          style={{ width: "150px"}}
      />
      <TextField
        label="First Name"
        value={firstName}
        setValue={setFirstName}
        placeholder="Lumpia"
        style={{ width: "100%" }}
      />
      <TextField
        label="Last Name"
        value={lastName}
        setValue={setLastName}
        placeholder="Shanghai"
        style={{ width: "100%" }}
      />
    </Form>
  );
};

export default React.memo(AccountForm);
