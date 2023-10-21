import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    padding: 0 20px;

    button {
        flex: 1;
    }

    @media screen and (min-width: 578px) {
        justify-content: flex-end;
        padding: unset;

        button {
            flex: unset;
        }
    }
`

export const Wrapper = styled.div`
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
    }

    .container {
        margin-left: 1rem;
        margin-right: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 1rem;

        > div {
            padding-top: 10px;
            padding-bottom: 10px;
        }        
    }

    .box-container {  
        border-radius: 20px;
        height: calc(100% - 2rem);
        display: grid;
        gap: 1rem;
        align-content: flex-start;
    }    

    @media screen and (min-width: 578px) {
        .container {
            max-width: 1021px !important;
        }
        
        .box-container {
            background-color: ${theme.neutral.n0};
            border: 1px solid ${theme.neutral.n20};
            padding: 1rem;
        }
    }
`

export const CropInformation = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    > p {
        grid-column: 1/-1;
    }
`

export const TipsContainer = styled.div`
    > div > div:last-child > div > div {
        display: flex;
        gap: 1rem;
        padding: 1rem 0;

        :not(:last-child) {
            border-bottom: 1px solid ${theme.neutral.n20}
        }
    }

    > div > div:last-child > div {
        padding: 0;
        border: unset;
    }

    @media screen and (min-width: 578px) {
        > div > div {
            display: flex;
            padding: 1rem 0;
            gap: 1rem;
            
            :not(:last-child) {
                border-bottom: 1px solid ${theme.neutral.n20}
            }
        }
    }
`

export const FertilizerContainer = styled.div`
    > div > div:last-child > div > div {
        display: flex;
        justify-content: space-between;
        padding: 1rem 0;

        :not(:last-child) {
            border-bottom: 1px solid ${theme.neutral.n20}
        }
    }

    > div > div:last-child > div {
        padding: 0;
        border: unset;
    }

    @media screen and (min-width: 578px) {
        > div > div {
            display: flex;
            padding: 1rem 0;
            justify-content: space-between;
            
            :not(:last-child) {
                border-bottom: 1px solid ${theme.neutral.n20}
            }
        }
    }
`

export const SuggestionsContainer = styled.div`
    > div > div:last-child > div > div {
        display: flex;
        gap: 1rem;
        padding: 1rem 0;

        :not(:last-child) {
            border-bottom: 1px solid ${theme.neutral.n20}
        }
    }

    > div > div:last-child > div {
        padding: 0;
        border: unset;
    }

    @media screen and (min-width: 578px) {
        > div > div {
            display: flex;
            padding: 1rem 0;
            
            :not(:last-child) {
                border-bottom: 1px solid ${theme.neutral.n20}
            }
        }
    }
`
export const TipCircleContainer = styled.div`
    background-color: ${({ theme }) => theme.neutral.n20};
    width: 30px;
    height: 30px;
    aspect-ratio: 1;
    border-radius: 50%;
    display: grid;
    justify-items: center;
    align-items: center;
    justify-content: center;
`;