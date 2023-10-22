import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
  background-color: white;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 16px;

  > div {
    display: flex;
    gap: 8px;
    overflow-y: auto;
    flex-direction: column;

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
  }

  @media (min-width: 768px) {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    padding: 32px 20px;
    border-radius: 20px;
    height: 700px;
  }
`;

export const TabContainer = styled.div`
  > div > label {
    flex-grow: 1;
  }

  @media (min-width: 1200px) {
    > div > label {
      flex-grow: unset;
      min-width: 100px;
    }
  }
`;

export const List = styled.div`
  @media (min-width: 768px) {
    padding-right: 16px;
  }
`;

export const Item = styled.div`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 8px 12px;
  display: flex;
  justify-content: space-between;
  margin: 1px;
  box-sizing: border-box;

  :hover {
    background-color: ${({ theme }) => theme.btn.color.outlineBg};
  }
`;
