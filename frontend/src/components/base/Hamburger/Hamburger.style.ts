import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
width: 1.5rem;
`;

export const StyledBurger = styled.div`
xf;
height: 2rem;
display: flex;
flex-flow: column;
gap: .3rem;
justify-content: center;

div{
    border-radius: 1rem;
    width: 2rem;
    height: 0.25rem;
    background-color: ${theme.neutral.n100}
}
`;
