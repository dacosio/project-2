import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.3rem;
    padding: 32px 16px;
    box-shadow: 0 0 1px 1px ${theme.neutral.n20};
    border-radius: 1.3rem;
    background-color: ${theme.grey.noshade};
    width: 250px;
    // height:230px;
`


export const TitleContainer = styled.div`
`

export const PrecipSvgContainer = styled.div`
display: flex;
align-items: end;
justify-content : space-between;
`
