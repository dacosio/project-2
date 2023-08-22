import { GetTodosPayload } from "types/store/TodoState";
import { ChangeEvent, FormEvent } from "react";

export interface PrivateGeneratedProps {
  data: GetTodosPayload[] | undefined;
  isLoading: boolean;
  error: unknown;

  isTodoLoading: boolean;

  title: string;
  text: string;
  handleTitleInput: (event: ChangeEvent<HTMLInputElement>) => void;
  handleTextInput: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleDelete: (id: string) => void;
}
