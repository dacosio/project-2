import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";


export const Container = styled.div`
    display: flex;
    flex:0.25;
    flex-direction: column;
    gap: 1.3rem;
    padding: 16px 16px;
    box-shadow: 0 0 1px 1px ${theme.brand.error};
    border-radius: 1.3rem;
    background-color: ${theme.grey.noshade};
    width: 212px;
    height:212px;

    @media screen and (max-width: 1200px) {
        width: 256px;
      height:254px;
      }

      @media screen and (min-width: 1200px) {
        gap: 1.3rem;
      }
`

export const TitleContainer = styled.div`
display:flex;
column-gap: 0.6rem;
margin-top:32px;
align-items: center;

`

export const ContentContainer = styled.div`
// margin-left : 14px;
margin-top : 18px
`

