import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";


export const Container = styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
    // justify-content: space-between;
    gap:24px;
    padding: 16px 16px;
    box-shadow: 0 0 1px 1px ${theme.neutral.n20};
    border-radius: 1.3rem;
    background-color: ${theme.grey.noshade};
    width: 212px;
    height:212px;

    @media screen and (max-width: 1200px) {
        width: 254px;
      height:254px;
      }

      @media screen and (min-width: 1200px) {
        gap:12px;
      }
`


export const TitleContainer = styled.div`
`

export const PrecipSvgContainer = styled.div`
display: flex;
align-items: end;
justify-content : space-between;
`
