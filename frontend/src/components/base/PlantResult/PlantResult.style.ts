import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";


export const Container = styled.div`
    background-color: ${theme.grey.noshade};
    border-radius: 1rem;
    width: fit-content;
    overflow: hidden;
`
export const AnchorTag = styled.a`
    text-decoration: none;
`

export const ImageHolder = styled.div`
    img {
        object-fit-cover;
        border-radius: inherit;
    }
`

export const TextHolder = styled.div`
    padding: 0.5rem 1rem 2rem 1rem;
`