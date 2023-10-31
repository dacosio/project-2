import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";


export const Container = styled.div`
    background-color: ${theme.grey.noshade};
    border-radius: 20px;
    width: fit-content; 
    overflow: hidden;
    cursor: pointer;
    width: 100%;
`

export const ImageHolder = styled.div`
    img {
        border-radius: inherit;
        height: 160px;
        object-fit: cover;
    }

    @media screen and (min-width: 560px) {
        img {
            height: 184px;
        }
    }
`

export const TextHolder = styled.div`
    padding: 0.5rem 1rem 2rem 1rem;
`