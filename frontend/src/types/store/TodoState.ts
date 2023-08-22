import { GenericResponse } from "types/GenericResponse";

export type TodoMeta = {
  _id: string;
  id: string;
  title: string;
  text: string;
};

export type GetTodosPayload = {
  title: string;
  text: string;
  isCompleted: boolean;
  _id: string;
  user: {
    _id: string;
    email: string;
  };
};
