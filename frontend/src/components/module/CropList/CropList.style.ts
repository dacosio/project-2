import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
  background-color: white;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 16px;
  box-sizing: border-box;
  position: relative;

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
    height: 100%;
  }
`;

export const TabContainer = styled.div`
  > div > label {
    flex-grow: 1;
  }

  @media (min-width: 1200px) {
    > div > label {
      flex-grow: unset;
      min-width: 80px;
    }
  }
`;

export const List = styled.div`
  @media (min-width: 768px) {
    padding-right: 8px;
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
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.btn.color.lightest};
  }
`;

export const PopupContainer = styled.div`
  > div > div > div {
    cursor: pointer;
    display: flex;
    gap: 16px;
    align-items: center;
    padding: 16px 0;

    :hover {
      background-color: ${({ theme }) => theme.btn.color.lightest};
    }
  }

  @media (min-width: 768px) {
    position: absolute;
    bottom: 65px;
    width: 400px;
    display: grid;
    z-index: 10;
    border-radius: 20px;

    > div > div {
      display: grid;
      background-color: white;
      margin: 1px;
      border-radius: 20px;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    }

    > div > div > div {
      padding: 32px 16px;
    }

    > div > div > div:first-of-type {
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }

    > div > div > div:last-of-type {
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }

    > div > div > div:not(:last-of-type) {
      border-bottom: 1px solid ${({ theme }) => theme.neutral.n20};
    }
  }

  @media (min-width: 1200px) {
    right: 0;
  }
`;
