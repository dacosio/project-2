import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";



export const Container = styled.div`
display:flex;
flex-direction:column;
border: 1px solid ${({ theme }) => theme.neutral.n20};
border-radius: 24px;
padding:1rem;
row-gap:2rem;


`

export const TypographyContainer = styled.div`
padding-bottom: 1rem;
border-bottom : 1px solid ${({ theme }) => theme.neutral.n20};
`

export const WeatherDataContainer = styled.div`
display:flex;
overflow-x: scroll;
 padding-bottom: 2rem;

border-radius: 20px;
// border: 1px solid red;


// ::-webkit-scrollbar {
//     display: none; 
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
  