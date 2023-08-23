import React, { useState } from "react";

import PrivateView from "./Private.view";
import {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
} from "features/todos/todosApiSlice";

const Private = (): JSX.Element => {
  const { data, isLoading } = useGetTodosQuery("");
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  const [addTodo, { isLoading: isTodoLoading, error }] = useAddTodoMutation();
  const handleTextInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);
  const handleTitleInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log({ title, text }, "<------ from private container");
      const response = await addTodo({ title, text }).unwrap();
      console.log("New Todo: ", response);
    } catch (err) {
      console.log(err);
    }
  };

  const [deleteTodo] = useDeleteTodoMutation();

  const handleDelete = async (id: string) => {
    try {
      console.log("id from handle delete", id);
      // Trigger the mutation
      const response = await deleteTodo({ id }).unwrap();
      // Handle the response if needed
      console.log("Todo deleted:", response);
    } catch (err) {
      // Handle any errors from the mutation
      console.error("Error deleting todo:", err);
    }
  };

  const generatedProps = {
    // generated props here
    data,
    error,
    isLoading,
    title,
    text,
    handleTextInput,
    handleTitleInput,
    handleSubmit,
    isTodoLoading,
    handleDelete,
  };
  return <PrivateView {...generatedProps} />;
};

export default Private;
