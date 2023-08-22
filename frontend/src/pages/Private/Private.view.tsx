import React from "react";
import { PrivateGeneratedProps } from "./Private.props";
import { Container, Form, Input, Label } from "./Private.style";

const PrivateView = (props: PrivateGeneratedProps) => {
  const {
    data,
    isLoading,
    title,
    text,
    handleSubmit,
    handleTextInput,
    handleTitleInput,
    handleDelete,
  } = props;

  return (
    <Container>
      <div>Welcome to private route!</div>

      <Form onSubmit={handleSubmit}>
        <Label htmlFor="username">Title:</Label>
        <Input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleInput}
          required
        />
        <Label htmlFor="password">Description:</Label>
        <Input
          type="text"
          id="text"
          onChange={handleTextInput}
          value={text}
          required
        />
        <button>Add Todo</button>
      </Form>

      <div style={{ paddingTop: "1rem" }}>Here are the list of todos</div>
      <div style={{ color: "black", fontWeight: "normal" }}>
        {!isLoading ? (
          data?.map((d) => {
            return (
              <div key={d._id}>
                <ul key={d._id}>
                  <li>{d.text}</li>
                </ul>
                <button onClick={() => handleDelete(d._id)}>Delete</button>
              </div>
            );
          })
        ) : (
          <>Loading...</>
        )}
      </div>
    </Container>
  );
};

export default PrivateView;
