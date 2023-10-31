import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";


export const Container = styled.div`
`

export const Body = styled.div`
    margin: 2rem auto;
`

export const ResultHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`

export const ResultCount = styled.div`
    color: ${theme.neutral.n0};
    background-color: ${theme.neutral.n30};
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
`

export const SearchResultList = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    row-gap: 1rem;
    margin: 2rem 0;

    @media screen and (min-width: 768px) {
        gap: 24px;
    }

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media screen and (min-width: 1200px) {
        grid-template-columns: repeat(5, 1fr);
    }
    
`

export const List = styled.li`
    padding: 0.5rem;
    border-bottom: 0.5px solid ${theme.neutral.n20}
`

export const NoResultUL = styled.ul`
    margin-bottom: 0.5rem;
`

export const NoResultList = styled.li`

`

export const Result = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem auto;
`

export const SearchHelp = styled.div`

`