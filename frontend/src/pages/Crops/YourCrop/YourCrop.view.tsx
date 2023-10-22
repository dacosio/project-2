import React from "react";
import { YourCropGeneratedProps } from "./YourCrop.props";
import {
  Container,
  ColumnBodyContainer,
  ListColumnContainer,
  DescriptionContainer,
  DetailColumnContainer,
  InformationContainer,
  FertilizerContainer,
  SuggestionContainer,
  TipContainer,
  TitleContainer,
  TitleLeftContainer,
  TitleRightContainer,
  DescriptionLeftContainer,
  DescriptionRightContainer,
  InformationHeaderContainer,
  InformationFooterContainer,
  SuggestionHeaderContainer,
  SuggestionFooterContainer,
  FertilizerHeaderContainer,
  TipHeaderContainer,
  TipFooterContainer,
  FertilizerFooterContainer,
  TipCircleContainer,
} from "./YourCrop.style";
import Typography from "components/base/Typography";
import { Hidden, Row, Visible } from "react-grid-system";
import Button from "components/base/Button";
import CircleProgress from "./../../../components/base/CircleProgress";
import CropCondition from "components/base/CropCondition";
import { Delete, Favorite } from "components/base/SVG";
import "react-circular-progressbar/dist/styles.css";
import theme from "utils/Theme";
import Tab from "components/base/Tab";
import CropList from "components/module/CropList";
import CropDetail from "components/module/CropDetail";
import CropInformation from "components/module/CropInformation";

const YourCropView = (props: YourCropGeneratedProps) => {
  const {
    crops,
    crop,
    handleOnClickCrop,
    handleOnCreateCrop,
    handleOnFavorite,
    handleOnDelete,
  } = props;

  return (
    <Container>
      <Row
        nogutter
        style={{
          width: "100%",
          justifyContent: "center",
          justifySelf: "center",
        }}
      >
        <ListColumnContainer
          md={crop ? 5 : 8}
          style={{ padding: undefined, width: undefined, maxWidth: undefined }}
        >
          <Visible xs sm>
            <div style={{ paddingBottom: "48px" }}>
              <Typography variant="title3" weight="700">
                Your Crops
              </Typography>
            </div>
          </Visible>
          <CropList
            crops={crops}
            handleOnClickCrop={handleOnClickCrop}
            handleOnCreateCrop={handleOnCreateCrop}
          />
        </ListColumnContainer>
        {crop && (
          <DetailColumnContainer
            md={7}
            style={{
              padding: undefined,
              width: undefined,
              maxWidth: undefined,
            }}
          >
            <CropDetail
              crop={crop}
              handleOnFavorite={handleOnFavorite}
              handleOnDelete={handleOnDelete}
            />
          </DetailColumnContainer>
        )}
      </Row>
    </Container>
  );
};

export default YourCropView;
