import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
    position: relative;
    width: 50%;
    max-width: 400px;
    padding: 1.5rem 0.5rem 1.5rem 1.5rem;
    background-color: ${theme.brand.secondary};
    border-radius: 1.5rem;

    .right-side-content {
        width: 45%;
        display: flex;
        flex-direction: column;
        gap: 1rem
    }

    .left-side-content {
        width: 55%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }

    span {
        font-weight: 700;
    }

    .weather-content {
        display: flex;
    }
`

export const LocationContainer = styled.div`

`
export const TemperatureContainer = styled.div`

`

export const ForecastContainer = styled.div`
    padding-right: 1rem;
`

export const CloudContainer = styled.div`
    position: absolute;
    top: -3rem;
    right: 0;

    @media (min-width: 1024px) {
        width: 17rem;
        max-width: 250px;
    }
`