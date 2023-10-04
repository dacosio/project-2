import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import { ImgHTMLAttributes } from "react";

export const Container = styled.div`
    position: relative;
    width: 50%;
    padding: 1.5rem;
    background-color: ${theme.brand.secondary};
    border-radius: 1.5rem;
`

export const ContentContainer = styled.div`
    display: flex;
`

export const DetailsContainer = styled.div`

`

export const ImageContainer = styled.img<ImgHTMLAttributes<HTMLImageElement>>`
    position: absolute;
    top: -3rem;
    width: 250px;
    right: 0;
`