import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
  background-color: white;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 16px;

  > div {
    display: flex;
    gap: 16px;
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

    > div:last-of-type {
      padding-right: 16px;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleLeftContainer = styled.div``;

export const TitleRightContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column-reverse;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DescriptionLeftContainer = styled.div`
  flex-grow: 1;
  display: grid;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
  }

  > div:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.neutral.n20};
  }
`;

export const DescriptionRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media (min-width: 1200px) {
    flex-direction: column;
  }
`;
