import React from "react";
import { PrivateGeneratedProps } from "./Private.props";
import {
  Cell,
  Container,
  Form,
  Input,
  Label,
  Table,
  Header,
} from "./Private.style";

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
          <Table>
            <thead>
              <tr>
                <Header>Title</Header>
                <Header>Description</Header>
                <Header>Actions</Header>
              </tr>
            </thead>
            <tbody>
              {data?.map((d) => (
                <tr key={d._id}>
                  <Cell>{d.title}</Cell>
                  <Cell>{d.text}</Cell>
                  <Cell>
                    <button onClick={() => handleDelete(d._id)}>Delete</button>
                  </Cell>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <>Loading...</>
        )}
      </div>
    </Container>
  );
};

export default PrivateView;
