import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import Typography from "../Typography";

export const Container = styled.div`
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  gap: 2rem;

  @media (min-width: 768px) {
    gap: 0;
    flex-flow: row;
    max-width: 725px;
  }
`;

export const Header = styled.div`
  padding: 4rem 2rem 0 2rem;
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    padding: 2rem;
    width: 25.5%;
    background-color: ${theme.brand.accent};
    p {
      font-size: 36px;
      line-height: 46px;
      color: ${theme.text.invert};
      text-align: left;
    }
  }
`;

export const SingupForm = styled.form`
  padding: 0 1rem 2rem 1rem;
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
  justify-content: center;
  @media (min-width: 768px) {
    padding: 4rem 2rem 2rem 2rem;
  }
`;

export const SingupDetails = styled.form`
  padding: 0 1rem 2rem 1rem;
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  gap: 1rem;
  justify-content: center;
`;

export const Option = styled.div`
  display: grid;
  gap: 0.5rem;
  a {
    color: ${theme.neutral.n70};
    font-weight: 500;
  }
`;

// export const SingupForm = styled.form`
//   p {
//     font-size: 16px;
//     font-weight: 400;
//   }
//   flex-grow: 1;
//   display: flex;
//   flex-flow: column;
//   gap: 0.5rem;
//   justify-content: center;
//   align-items: center;

//   @media (min-width: 768px) {
//     p {
//       font-size: 20px;
//       font-weight: 400;
//     }
//   }
// `;

export const SubmitButton = styled.button`
  font-size: 14px;
  font-weight: 700;
  background-color: ${theme.brand.accent};
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  color: ${theme.text.invert};
  width: 100%;
`;

export const BackButton = styled.button`
  font-size: 14px;
  font-weight: 700;
  background-color: white;
  border: solid ${theme.brand.accent};
  border-radius: 1rem;
  padding: 1rem;
  color: ${theme.text.accent};
  width: 100%;

  &:hover {
    background-color: ${theme.brand.accent};
    color: white;
  }
`;

export const ButtonDivs = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 1rem;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;
`;

export const SignUpButton = styled(Typography)`
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 5px;

  &:hover {
    color: ${(props) => props.theme.btn.text.accent};
  }
`;
