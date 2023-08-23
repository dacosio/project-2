import { LoginGeneratedProps } from "./Login.props";
import { Form, Input, Label } from "./Login.style";

const LoginView = (props: LoginGeneratedProps): JSX.Element => {
  const { email, password, handleUserInput, handlePwdInput, handleSubmit } =
    props;

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="username">Username:</Label>
        <Input
          type="text"
          id="email"
          value={email}
          onChange={handleUserInput}
          required
        />
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          onChange={handlePwdInput}
          value={password}
          required
        />
        <button>Sign In</button>
      </Form>
    </div>
  );
};

export default LoginView;
