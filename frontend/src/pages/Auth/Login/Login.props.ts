import { ChangeEvent, FormEvent } from "react";

export interface LoginGeneratedProps {
  email: string;
  password: string;
  roles?: string[];
  isActive?: boolean;
  handleUserInput: (event: ChangeEvent<HTMLInputElement>) => void;
  handlePwdInput: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
