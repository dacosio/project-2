import { Visible, Hidden } from "react-grid-system";
import { Toaster } from "react-hot-toast";
import { YourCropGeneratedProps } from "./YourCrop.props";
import {
  Container,
  ListColumnContainer,
  DetailColumnContainer,
  Wrapper,
} from "./YourCrop.style";
import Typography from "../../../components/base/Typography";
import CropList from "../../../components/module/CropList";
import CropDetail from "../../../components/module/CropDetail";
import MobileDrawer from "./../../../components/base/MobileDrawer";
import AddChoice from "../../../components/base/AddChoice";
import AddSuggestion from "../../../components/base/AddSuggestion";
import Loading from "components/base/Loading";

const YourCropView = (props: YourCropGeneratedProps) => {
  const {
    isLoading,
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
    isModalVisible,
    setIsModalVisible,
  } = props;

  return (
    <Container>
      {isLoading ? (
        <div style={{ display: "grid", justifyItems: "center" }}>
          <Loading />
        </div>
      ) : 0 < crops.length ? (
        <Wrapper nogutter style={{ justifyContent: undefined }}>
          <ListColumnContainer
            md={crop ? 5 : 8}
            style={{
              padding: undefined,
              width: undefined,
              maxWidth: undefined,
            }}
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
                  onConfirm={handlePlant}
                  handleFavorite={handleFavorite}
                  onDelete={handleOnDelete}
                  setIsModalVisible={setIsModalVisible}
                />
              </Hidden>
              <Visible xs sm>
                <MobileDrawer
                  direction="bottom"
                  isOpenDrawer={isOpenDrawer}
                  handleDrawerClose={handleDrawerClose}
                  drawerSize="98%"
                  isModalVisible={isModalVisible}
                >
                  <CropDetail
                    crop={crop}
                    onConfirm={handlePlant}
                    handleFavorite={handleFavorite}
                    onDelete={handleOnDelete}
                    setIsModalVisible={setIsModalVisible}
                  />
                </MobileDrawer>
              </Visible>
            </DetailColumnContainer>
          )}
        </Wrapper>
      ) : (
        <div>
          <Typography>No crops to display</Typography>
        </div>
      )}
      {choiceVisibility && (
        <AddChoice
          visibility={choiceVisibility}
          setVisibility={setChoiceVisibility}
          onLater={handleLater}
          onNow={handleNow}
        />
      )}
      {suggestionVisibility && (
        <AddSuggestion
          visibility={suggestionVisibility}
          setVisibility={setSuggestionVisibility}
          onLater={handleLater}
          onNow={handleNow}
        />
      )}
      <Toaster />
    </Container>
  );
};

export default YourCropView;
