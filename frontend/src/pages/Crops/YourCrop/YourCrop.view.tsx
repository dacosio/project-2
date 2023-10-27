import React, { useState } from "react";
import { YourCropGeneratedProps } from "./YourCrop.props";
import {
  Container,
  ListColumnContainer,
  DetailColumnContainer,
  Wrapper,
} from "./YourCrop.style";
import Typography from "components/base/Typography";
import { Visible, Hidden } from "react-grid-system";
import "react-circular-progressbar/dist/styles.css";
import CropList from "../../../components/module/CropList";
import CropDetail from "../../../components/module/CropDetail";
import Modal from "../../../components/base/Modal";
import MobileDrawer from "./../../../components/base/MobileDrawer";
import AddSuggestion from "components/module/AddSuggestionModal";

const YourCropView = (props: YourCropGeneratedProps) => {
  const {
    crops,
    crop,
    suggestionVisibility,
    setSuggestionVisibility,
    isOpenDrawer,
    handleOnClickCrop,
    handleOnClickChoice,
    handleOnClickSuggestion,
    handlePlant,
    handleFavorite,
    handleOnDelete,
    handleDrawerOpen,
    handleDrawerClose,
  } = props;

  return (
    <Container>
      <Wrapper nogutter style={{ justifyContent: undefined }}>
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
            crop={crop}
            handleOnClickCrop={handleOnClickCrop}
            handleOnClickChoice={handleOnClickChoice}
            handleOnClickSuggestion={handleOnClickSuggestion}
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
            <Hidden xs sm>
              <CropDetail
                crop={crop}
                handlePlant={handlePlant}
                handleFavorite={handleFavorite}
                handleOnDelete={handleOnDelete}
              />
            </Hidden>
            <Visible xs sm>
              <MobileDrawer
                direction="bottom"
                isOpenDrawer={isOpenDrawer}
                handleDrawerClose={handleDrawerClose}
                drawerSize="98%"
              >
                <CropDetail
                  crop={crop}
                  handlePlant={handlePlant}
                  handleFavorite={handleFavorite}
                  handleOnDelete={handleOnDelete}
                />
              </MobileDrawer>
            </Visible>
          </DetailColumnContainer>
        )}
      </Wrapper>
      <AddSuggestion
        visibility={suggestionVisibility}
        setVisibility={setSuggestionVisibility}
      />
    </Container>
  );
};

export default YourCropView;
