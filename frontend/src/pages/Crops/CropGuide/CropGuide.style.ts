import styled from "@emotion/styled";
import { theme } from "utils/Theme";


export const Container = styled.div`
   max-width: 1021px;
   margin: 1.5rem auto;
`;

export const Header = styled.div`
    background-color: ${theme.brand.green};
    display: grid;
    gap: 0.5rem;
    padding: 1.5rem 1rem 1rem 1rem;
    border-radius: 1rem;
`

export const SearchContainer = styled.div`
    width: 50%;
    margin: 1rem 0;
`

export const Body = styled.div`

`

export const Conditions = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`

export const GridLayout = styled.div`
    display: flex;
    flex-direction: row;
`
