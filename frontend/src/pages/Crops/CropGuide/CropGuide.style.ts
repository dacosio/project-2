import styled from "@emotion/styled";
import { theme } from "utils/Theme";

export const Wrapper = styled.div`

`;

export const Container = styled.div`
   max-width: 1021px;
   margin: auto;
   padding: 1.5rem;
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

export const AllCrop = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    row-gap: 1rem;
    margin: 2rem 0;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1200px) {
        grid-template-columns: repeat(5, 1fr);
    }
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
