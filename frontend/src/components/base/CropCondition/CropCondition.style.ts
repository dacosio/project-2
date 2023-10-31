import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.3rem;
    padding: 1rem;
    box-shadow: 0 0 1px 1px ${theme.neutral.n20};
    border-radius: 20px;
    background-color: ${theme.grey.noshade};
`

export const Body = styled.div`
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

export const Logo = styled.div`

`