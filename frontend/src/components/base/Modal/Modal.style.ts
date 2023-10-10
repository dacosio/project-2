import styled from "@emotion/styled";

  

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;



export const ModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .8);
    cursor: pointer;
`;

export const ModalBox = styled.div`
    position: relative;
    width: 40%;
    margin: 0 10%;
    padding: 28px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: white;
    cursor: auto;
`;


export const ModalContent = styled.div`
margin-top: 30px;
color: #6B6B6B;
font-size: 16px;
max-height: 240px; 
overflow-y: auto;

::-webkit-scrollbar {
    width: 8px;  
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;  
  }

  ::-webkit-scrollbar-thumb {
    background: #888;  
    border-radius: 6px;  
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;  
  }
`;


export const ModalBack = styled.div`
  position: absolute;
  top: 20px;
  left: 28px;
  background: transparent;
  border: none;
  color: #6B6B6B;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  :hover {
    color: #000; // Or whichever color you prefer for hover state
  }
`;

export const ModalClose = styled.div`
    width: 20px;
    height:20px;
    position: absolute;
    top: 20px;
    right: 20px;
    transition: transform 250ms ease-in-out;
    transform-origin: 50% 50%;
    display:flex;
    align-items: center;
    justify-content: center;



    :hover{
        transform: rotate(180deg); 
    }
`;

