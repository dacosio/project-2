import styled from "@emotion/styled";
import { theme } from "utils/Theme";


export const ContentContainer = styled.div`

    .crop-condition, .crop-info {
        justify-content: space-between !important;
    }
    .crop-condition > div:nth-child(n+2),
    .crop-info > div:nth-child(n+2) {
        flex-basis: calc(50% - 55px);
    }

`

export const Placeholder = styled.div`
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem; 
    border-radius: 1rem;
`
