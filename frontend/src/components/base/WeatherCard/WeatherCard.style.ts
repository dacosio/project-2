import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 450px;
    padding: 7rem 1.5rem 1.5rem 1.5rem;
    background-color: ${theme.btn.color.outlineBg};
    border-radius: 1.5rem;

    @media screen and (min-width: 768px) {
        padding: 1.5rem;
        .weather-content {
            display: flex;
        }

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
    }
    
    span {
        font-weight: 700;
    }

    @keyframes rainDrops {
        0% {
          opacity: 1;
          transform: translate(0,0);
        }
        100% {
          opacity: 0;
          transform: translate(-25px,35px);
        }
    }

    @keyframes thunderStorm {
        0% {
          fill: #fff;
        }
        2% {
          fill: #333;
        }
        4% {
          fill: #fff;
        }
        6% {
          fill: #fff;
        }
        8% {
          fill: #333;
        }
        12% {
          fill: #fff;
        }
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
    top: -1.5rem;

    path.rain-drops {
        fill: blue;
    }

    .rain-drops:nth-child(2) {
        animation: rainDrops 1s linear infinite; 
        opacity: 1;
    }

    .rain-drops:nth-child(3) {
        animation: rainDrops 1.5s linear infinite; 
        opacity: 1;
    }

    .rain-drops:nth-child(4) {
        animation: rainDrops 1.8s linear infinite; 
        opacity: 1;
    }

    path.cloud {
        fill: white;
        stroke: blue;
        animation: thunderStorm 3s 1s infinite linear;
    }

    @media screen and (min-width: 768px) {
        right: 1.5rem;
    }
`