import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.8rem;
    padding: 1.5rem;
    box-shadow: 0 0 1px 1px ${theme.neutral.n20};
    border-radius: 1.3rem;
    background-color: ${theme.grey.noshade};
`

export const ContentContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`

export const Temps = styled.div`

`

export const Logo = styled.div`

`