import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import { Col, Row, Visible, Hidden } from "react-grid-system";
import Typography from "components/base/Typography";
import TextField from "components/base/TextField";

export const Container = styled.div`
background-color: ${theme.brand.accent};
padding: 2rem 0;
p{
    color: ${theme.neutral.n0}
}
`

export const Hide = styled(Hidden)``;

export const ContactImage = styled(Col)`
img {
    max-width: 100%;
    height: auto;
  }
`;

export const UserInfo = styled.div`
display: flex;
gap: .5rem;
@media (max-width: 768px) {
    flex-flow: column;
    gap: 1.5rem;
  }
`;

export const Footer = styled.div`
`;