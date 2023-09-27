import React, { ChangeEvent } from "react";
import { YuhwanGeneratedProps } from "./Yuhwan.props";
import { Container, Form, ListContainer } from "./Yuhwan.style";
import Yuhwan from "components/base/Yuhwan";

const YuhwanView = (props: YuhwanGeneratedProps) => {
  const {
    data: yuhwans,
    title,
    setTitle,
    subtitle,
    setSubtitle,
    description,
    setDescription,
    handleOnSubmit,
    handleOnDelete,
    handleOnUpdate,
  } = props;
  return (
    <Container>
      <Form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setTitle(event.target.value)
          }
        />
        <input
          type="text"
          value={subtitle}
          placeholder="Subtitle"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setSubtitle(event.target.value)
          }
        />
        <textarea
          value={description}
          placeholder="Description"
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(event.target.value)
          }
        />
        <button
          type="submit"
          disabled={![title, subtitle, description].every(Boolean)}
        >
          Add
        </button>
      </Form>
      <ListContainer>
        {yuhwans?.map(
          (
            yuhwan: {
              _id: string;
              avatar: string;
              title: string;
              subtitle: string;
              image: string;
              description: string;
            },
            index
          ) => (
            <Yuhwan
              id={yuhwan._id}
              avatar={`${yuhwan.avatar}${index}`}
              title={yuhwan.title}
              subtitle={yuhwan.subtitle}
              image={`${yuhwan.image}${index}`}
              description={yuhwan.description}
              key={index}
              onDelete={handleOnDelete}
              onUpdate={handleOnUpdate}
            />
          )
        )}
      </ListContainer>
    </Container>
  );
};

export default YuhwanView;
