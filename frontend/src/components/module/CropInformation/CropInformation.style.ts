import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
  display: grid;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;

export const InformationContainer = styled.div`
  > div > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
  }

  > div > div:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.neutral.n20};
  }

  @media (min-width: 1200px) {
    > div > {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    > div > div {
      display: block;
      margin: 1px;
      flex-grow: 1;
      padding: unset;
    }

    > div > div:not(:last-child) {
      border-bottom: none;
    }
  }
`;

export const FertilizerContainer = styled.div`
  > div > div > div > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
  }

  > div > div > div > div:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.neutral.n20};
  }

  @media (min-width: 768px) {
    > div > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 0;
    }

    > div > div:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.neutral.n20};
    }
  }

  @media (min-width: 1200px) {
    > div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 16px;
    }

    > div > div:nth-last-child(2) {
      border-bottom: none;
    }
  }
`;

export const SuggestionContainer = styled.div`
  > div > div > div > div {
    padding: 16px 0;
  }

  > div > div > div > div:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.neutral.n20};
  }

  @media (min-width: 768px) {
    > div > div {
      border-bottom: 1px solid ${({ theme }) => theme.neutral.n20};
      padding: 16px 0;
    }
  }
`;

export const TipContainer = styled.div`
  > div > div > div > div {
    padding: 16px 0;
    display: flex;
    gap: 16px;
  }

  > div > div > div > div:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.neutral.n20};
  }

  @media (min-width: 768px) {
    > div > div {
      border-bottom: 1px solid ${({ theme }) => theme.neutral.n20};
      padding: 16px 0;
      display: flex;
      gap: 16px;
    }
  }
`;

export const TipCircleContainer = styled.div`
  background-color: ${({ theme }) => theme.neutral.n20};
  width: 30px;
  height: 30px;
  aspect-ratio: 1;
  border-radius: 50%;
  display: grid;
  justify-items: center;
  align-items: center;
`;
