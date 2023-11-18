import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";
import { WindStyleProps } from "./Wind.props";


export const Container = styled.div<WindStyleProps>`
    display: flex;
    flex:1;
    flex-direction: column;
    gap: 3.4rem;
    padding: 16px 16px;
    box-shadow: 0 0 1px 1px ${theme.neutral.n20};
    border-radius: 1.3rem;
    background-color: ${theme.grey.noshade};


    @media screen and (max-width: 400px) {
      width: 88%;
      height:254px;
     }  

    @media screen and (min-width: 400px) and (max-width: 528px) {
      width: 90%;
      height:254px;
     }

    @media screen and (min-width: 528px) and (max-width: 768px) {
     width: 94%;
     height:254px;
    }

    @media screen and (min-width: 768px) and (max-width: 1200px) {
         width: 84%;
        height:254px;
        }

    @media screen and (min-width: 1200px) {
      gap: 1.3rem;
      width: 212px;
    height:212px;
    }

    @media screen and (min-width: 768px) and (max-width: 1200px) {
      justify-self : start;
  }

  @media screen and (min-width: 1200px) and  (max-width: 1360px){
    justify-self : ${({ collapseState }) => collapseState ? "stretch" : "start"};
    width: ${({ collapseState }) => collapseState ? "212px" : "84%"};
  }
    
`

export const ContentContainer = styled.div`
display:grid;
grid-template-columns : 1fr 1fr;

`

export const LeftContainer = styled.div`
display:flex;
flex-direction: column;
row-gap:10px;

`

export const WindContainer = styled.div`
display:flex;
align-items:center;
column-gap:6px;
`

export const GustContainer = styled.div`
display:flex;
align-items:center;
column-gap:6px;
`

export const RightContainer = styled.div`
position: relative;
`

export const Arrow = styled.div<WindStyleProps>`
width: 64px;
  height: 2px;
  background-color: #222222;
  position: absolute;
  top: 70px;
  left: 32px;
  -webkit-transform:rotate(${({ windDirection }) => windDirection}deg);

  -webkit-transition: all 1s ease;

  :after {
    content: '';
    position: absolute;
    top: -4px; 
    left: 60px; 
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent transparent black;
  }

`


