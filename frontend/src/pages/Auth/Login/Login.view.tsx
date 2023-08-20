import { LoginGeneratedProps } from "./Login.props";

const LoginView = (props: LoginGeneratedProps): JSX.Element => {
  const { email, password, isActive, roles } = props;
  return <div>Login</div>;
};

export default LoginView;
