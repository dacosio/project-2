import React, { useState } from "react";
import { AccountFormProps } from "./AccountForm.props";
import { Container, Form } from "./AccountForm.style";
import TextField from "../TextField";

const AccountForm = (props: AccountFormProps): JSX.Element => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState("");

  return (
    <Form>
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
