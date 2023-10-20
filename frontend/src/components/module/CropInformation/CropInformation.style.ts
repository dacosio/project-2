import styled from "@emotion/styled";
import { theme } from "../../../utils/Theme";

export const Container = styled.div`
  display: grid;
  gap: 32px;
`;

export const InformationContainer = styled.div`
  > div {
    padding-top: 16px;
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(2, 1fr);
  }

  > div > div {
    margin: 1px;
  }

  @media (min-width: 1200px) {
    > div {
      grid-template-columns: repeat(4, 1fr);
      padding-top: unset;
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
      column-gap: 52px;
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
  width: 32px;
  height: 32px;
  aspect-ratio: 1;
  border-radius: 50%;
  display: grid;
  justify-items: center;
  align-items: center;
`;
