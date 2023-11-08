import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";


export const Container = styled.div`
    display: flex;
    flex:0.25;
    flex-direction: column;
    // justify-content: space-between;
     gap: 40px;
    padding: 16px 16px;
    box-shadow: 0 0 1px 1px ${theme.neutral.n20};
    border-radius: 1.3rem;
    background-color: ${theme.grey.noshade};
  //  width: 212px;
   // height:212px;

   @media screen and (max-width: 768px) {
    width: 94%;
    height:254px;
   }

   @media screen and (min-width: 768px) and (max-width: 1200px) {
        width: 254px;
       height:254px;
       }

   @media screen and (min-width: 1200px) {
    gap: 20px;
     width: 212px;
   height:212px;
   }
`

export const TopContainer = styled.div`
    display : flex;
    justify-content: space-between;
    padding-top: 1rem;
    align-items: center;
    // column-gap : 2rem;
`
export const  BottomContainer = styled.div`
    
`