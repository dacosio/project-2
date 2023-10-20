import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";


export const Container = styled.div`
    background-color: ${theme.grey.noshade};
    border-radius: 1rem;
    width: fit-content; 
    overflow: hidden;
    cursor: pointer;
`

export const ImageHolder = styled.div`
    img {
        border-radius: inherit;
        height: 184px;
        object-fit: cover;
    }
`

export const TextHolder = styled.div`
    padding: 0.5rem 1rem 2rem 1rem;
`