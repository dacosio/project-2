import { selectCurrentToken } from "../../features/auth/authSlice";
import jwtDecode from "jwt-decode";
import { useAppSelector } from "app/hooks";

interface TokenProps {
  UserInfo: {
    id: string;
    email: string;
    roles: string;
  };
}

const useAuth = () => {
  const token = useAppSelector(selectCurrentToken);

  if (token) {
    const decoded = jwtDecode<TokenProps>(token);
    const { email, roles } = decoded.UserInfo;

    return { email, roles };
  }

  return { email: "", roles: [] };
};
export default useAuth;
