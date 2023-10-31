import { YourCropGeneratedProps } from "./YourCrop.props";
import {
  Container,
  ListColumnContainer,
  DetailColumnContainer,
  Wrapper,
} from "./YourCrop.style";
import { Visible, Hidden } from "react-grid-system";
import "react-circular-progressbar/dist/styles.css";
import Typography from "../../../components/base/Typography";
import CropList from "../../../components/module/CropList";
import CropDetail from "../../../components/module/CropDetail";
import MobileDrawer from "./../../../components/base/MobileDrawer";
import AddSuggestionModal from "../../../components/module/AddSuggestionModal";
import AddChoiceModal from "../../../components/module/AddChoiceModal";
import { Toaster } from "react-hot-toast";

const YourCropView = (props: YourCropGeneratedProps) => {
  const {
    popupRef,
    popupVisibility,
    setPopupVisibility,
    option,
    setOption,
    crops,
    crop,
    choiceVisibility,
    setChoiceVisibility,
    suggestionVisibility,
    setSuggestionVisibility,
    isOpenDrawer,
    handleOnClickCrop,
    handleOnClickChoice,
    handleOnClickSuggestion,
    handleLater,
    handleNow,
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
          {crops && (
            <CropList
              popupRef={popupRef}
              popupVisibility={popupVisibility}
              setPopupVisibility={setPopupVisibility}
              crops={crops}
              crop={crop}
              options={[
                { value: "all", label: "All" },
                { value: "planted", label: "Planted" },
                { value: "to-plant", label: "To Plant" },
              ]}
              option={option}
              setOption={setOption}
              handleOnClickCrop={handleOnClickCrop}
              handleOnClickChoice={handleOnClickChoice}
              handleOnClickSuggestion={handleOnClickSuggestion}
            />
          )}
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
      <AddSuggestionModal
        visibility={suggestionVisibility}
        setVisibility={setSuggestionVisibility}
        onLater={handleLater}
        onNow={handleNow}
      />
      <AddChoiceModal
        visibility={choiceVisibility}
        setVisibility={setChoiceVisibility}
        onLater={handleLater}
        onNow={handleNow}
      />
      <Toaster />
    </Container>
  );
};

export default YourCropView;
