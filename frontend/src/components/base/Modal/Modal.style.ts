import styled from "@emotion/styled";



export const ModalBackground = styled.div`
width: 100vw;
    height: 100vh;
    background-color: rgba(200, 200, 200,0.01);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.div`
width: 340px;
    height: 200px;
    border-radius: 12px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 25px;
`;

export const ModalCloseButtonContainer = styled.div`
display: flex;
justify-content: flex-end;
`;

export const ModalCloseButton = styled.button`
background-color: transparent;
border: none;
font-size: 25px;
cursor: pointer;
`;

export const ModalTitle = styled.div`
display: inline-block;
text-align: center;
margin-top: 10px;
`;



