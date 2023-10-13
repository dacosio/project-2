import styled from "@emotion/styled";
import { Col } from "react-grid-system";
import { theme } from "utils/Theme";

export const Container = styled.div`
  display: grid;
  margin: auto;
  padding: 16px;
`;

export const ListColumnContainer = styled(Col)`
  display: grid;
  gap: 16px;
  width: 100%;
  max-width: 500px;
`;

export const ColumnHeaderContainer = styled.div`
  height: 50px;
  display: grid;
  align-items: center;
`;

export const ColumnBodyContainer = styled.div`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  background-color: white;
  border-radius: 20px;
  padding: 32px 20px;
  display: grid;
  gap: 16px;
`;

export const CropItemContainer = styled.div`
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 20px 28px;
  display: flex;
  justify-content: space-between;
`;

export const ButtonContainer = styled.div`
  display: grid;
  justify-items: end;
`;

export const DetailColumnContainer = styled(Col)`
  display: grid;
  gap: 16px;
  width: 100%;
  max-width: 500px;
  padding-top: 66px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
`;

export const InformationContainer = styled.div``;

export const FertilizerContainer = styled.div``;

export const SuggestionContainer = styled.div``;

export const TipContainer = styled.div``;
