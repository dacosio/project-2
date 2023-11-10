import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";



export const Container = styled.div`
// max-width: 58vw;
 width: 100%;
 box-sizing: border-box;
display:flex;
flex-direction:column;
border: 1px solid ${({ theme }) => theme.neutral.n20};
border-radius: 24px;
padding:1rem;
row-gap:2rem;
background : ${({ theme }) => theme.neutral.n0};


`

export const TypographyContainer = styled.div`
padding-bottom: 1rem;
border-bottom : 1px solid ${({ theme }) => theme.neutral.n20};
`

export const WeatherDataContainer = styled.div`
display:flex;
//  border: 2px solid red;
// background-color : #8ECCEF";
overflow-x: scroll;
overflow-y: hidden;
   padding-bottom: 2rem;
  padding-top:1rem;

border-radius: 20px;
// border: 1px solid red;


//  ::-webkit-scrollbar {
//      display: none; 
//   }
  ::-webkit-scrollbar {
    height: 4px;  
    margin-top: 2rem;
    
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;  
  }

  ::-webkit-scrollbar-thumb {
    background: #888;  
    border-radius: 2px;  
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;  
  }  
  
  `