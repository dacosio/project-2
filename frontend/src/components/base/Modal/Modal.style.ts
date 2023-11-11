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
  z-index: 10;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`;

export const ModalBox = styled.div`
  position: relative;
  margin: 0 10%;
  box-sizing: border-box;
  border-radius: 24px;
  background-color: white;
  cursor: auto;
`;

export const ModalContent = styled.div`
  color: #6b6b6b;
  font-size: 16px;
  max-height: 75vh;
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

  @media (min-width: 768px) {
    max-width: 50vw;
  }
`;

export const ModalBack = styled.div`
  position: absolute;
  top: 20px;
  left: 28px;
  background: transparent;
  border: none;
  color: #6b6b6b;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  :hover {
    color: #000; // Or whichever color you prefer for hover state
  }
`;

export const ModalClose = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: transform 250ms ease-in-out;
  transform-origin: 50% 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  // :hover{
  //     transform: rotate(180deg);
  // }
`;
