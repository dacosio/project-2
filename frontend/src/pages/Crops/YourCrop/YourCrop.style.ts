import styled from "@emotion/styled";
import { Col, Hidden } from "react-grid-system";
import { theme } from "utils/Theme";

export const Container = styled.div`
  display: grid;
  margin: auto;
  padding: 16px;
  background-color: white;

  @media (min-width: 768px) {
    background-color: inherit;
  }
`;

export const ListColumnContainer = styled(Col)`
  display: grid;
  gap: 16px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 600px;
    padding: 0 8px;
  }
`;

export const ColumnHeaderContainer = styled.div``;

export const ColumnBodyContainer = styled.div`
  background-color: white;
  display: grid;
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
    height: 600px;
  }
`;

export const CropItemContainer = styled.div`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 20px 28px;
  display: flex;
  justify-content: space-between;
  margin: 1px;
  box-sizing: border-box;

  :hover {
    background-color: ${({ theme }) => theme.btn.color.outlineBg};
  }
`;

export const ButtonContainer = styled.div`
  display: grid;
  justify-items: end;
`;

export const DetailColumnContainer = styled(Col)`
  display: grid;
  gap: 16px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 600px;
    padding: 0 8px;
  }
`;

export const DescriptionContainer = styled.div`
  display: grid;
  gap: 16px;
`;

export const DescriptionHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DescriptionHeaderLeftContainer = styled.div``;

export const DescriptionHeaderRightContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const DescriptionFooterContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column-reverse;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DescriptionFooterLeftContainer = styled.div`
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

export const DescriptionFooterRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media (min-width: 1200px) {
    flex-direction: column;
  }
`;

export const InformationContainer = styled.div`
  display: grid;
  gap: 16px;
`;

export const InformationHeaderContainer = styled.div``;

export const InformationFooterContainer = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
  }

  > div:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.neutral.n20};
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    > div {
      display: block;
      margin: 1px;
      flex-grow: 1;
    }

    > div:not(:last-child) {
      border-bottom: none;
    }
  }
`;

export const FertilizerContainer = styled.div``;

export const FertilizerHeaderContainer = styled.div``;

export const FertilizerFooterContainer = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
  }

  > div:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.neutral.n20};
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;

    > div:nth-last-child(2) {
      border-bottom: none;
    }
  }
`;

export const SuggestionContainer = styled.div`
  display: grid;
  gap: 16px;
`;

export const SuggestionHeaderContainer = styled.div``;

export const SuggestionFooterContainer = styled.div`
  > div {
    border-bottom: 1px solid ${({ theme }) => theme.neutral.n20};
    padding: 16px 0;
  }
`;

export const TipContainer = styled.div``;

export const TipHeaderContainer = styled.div``;

export const TipFooterContainer = styled.div`
  > div {
    border-bottom: 1px solid ${({ theme }) => theme.neutral.n20};
    padding: 16px 0;
    display: flex;
    gap: 16px;
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
