import React from "react";
import { YourCropGeneratedProps } from "./YourCrop.props";
import {
  Container,
  CropItemContainer,
  ColumnBodyContainer,
  ListColumnContainer,
  ButtonContainer,
  ColumnHeaderContainer,
  DescriptionContainer,
  DetailColumnContainer,
  InformationContainer,
  FertilizerContainer,
  SuggestionContainer,
  TipContainer,
} from "./YourCrop.style";
import Typography from "components/base/Typography";
import { Row } from "react-grid-system";
import theme from "utils/Theme";
import Button from "components/base/Button";

const YourCropView = (props: YourCropGeneratedProps) => {
  return (
    <Container>
      <Row
        nogutter
        style={{
          width: "100%",
          gap: "16px",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <ListColumnContainer
          sm={6}
          style={{ width: undefined, maxWidth: undefined }}
        >
          <ColumnHeaderContainer>
            <Typography variant="title2">Your Crops</Typography>
          </ColumnHeaderContainer>
          <ColumnBodyContainer>
            <CropItemContainer>
              <Typography variant="body" weight="700">
                Crop Name
              </Typography>
              <Typography variant="body">Planted</Typography>
            </CropItemContainer>
            <CropItemContainer>
              <Typography variant="body">Crop Name</Typography>
              <Typography variant="body">Planted</Typography>
            </CropItemContainer>
            <CropItemContainer>
              <Typography variant="body">Crop Name</Typography>
              <Typography variant="body">Planted</Typography>
            </CropItemContainer>
            <CropItemContainer>
              <Typography variant="body">Crop Name</Typography>
              <Typography variant="body">Planted</Typography>
            </CropItemContainer>
            <CropItemContainer>
              <Typography variant="body">Crop Name</Typography>
              <Typography variant="body">Planted</Typography>
            </CropItemContainer>
            <CropItemContainer>
              <Typography variant="body">Crop Name</Typography>
              <Typography variant="body">Planted</Typography>
            </CropItemContainer>
            <CropItemContainer>
              <Typography variant="body">Crop Name</Typography>
              <Typography variant="body">Planted</Typography>
            </CropItemContainer>
            <CropItemContainer>
              <Typography variant="body">Crop Name</Typography>
              <Typography variant="body">Planted</Typography>
            </CropItemContainer>
            <Button text="New Crop" style={{ justifySelf: "end" }} />
          </ColumnBodyContainer>
        </ListColumnContainer>
        <DetailColumnContainer
          sm={6}
          style={{ width: undefined, maxWidth: undefined }}
        >
          <ColumnBodyContainer>
            <DescriptionContainer>h</DescriptionContainer>
            <InformationContainer>wef</InformationContainer>
            <FertilizerContainer>ewf</FertilizerContainer>
            <SuggestionContainer>e</SuggestionContainer>
            <TipContainer>w</TipContainer>
          </ColumnBodyContainer>
        </DetailColumnContainer>
      </Row>
    </Container>
  );
};

export default YourCropView;
