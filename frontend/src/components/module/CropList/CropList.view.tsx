import React, { useRef, useState } from "react";
import { CropListProps } from "./CropList.props";
import {
  Container,
  Item,
  List,
  PopupContainer,
  TabContainer,
} from "./CropList.style";
import Tab from "../../base/Tab";
import Typography from "../../base/Typography";
import Button from "../../base/Button";
import { Add, Choice, Suggestion } from "../../base/SVG";
import { useTheme } from "../../../utils/Theme";
import { Hidden, Visible } from "react-grid-system";
import MobileDrawer from "../../../components/base/MobileDrawer";
import { useOnClickOutside } from "../../../utils/hooks/useOnClickOutside";

const CropList = (props: CropListProps): JSX.Element => {
  const {
    crops,
    crop,
    options,
    option,
    setOption,
    handleOnClickCrop,
    handleOnClickChoice,
    handleOnClickSuggestion,
  } = props;

  const [visibility, setVisibility] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const theme = useTheme();

  const popupRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(popupRef, (event: MouseEvent) => {
    setVisibility(false);
  });

  return (
    <Container>
      <TabContainer>
        <Tab
          options={options}
          value={option}
          setValue={setOption}
          name="category"
        />
      </TabContainer>
      <List>
        {crops
          .filter((cropItem) =>
            option?.value === "planted"
              ? cropItem.isPlanted
              : option?.value === "to-plant"
              ? !cropItem.isPlanted
              : true
          )
          .map((cropItem, index) => (
            <Item
              onClick={() => handleOnClickCrop(cropItem._id)}
              key={index}
              style={{
                backgroundColor:
                  cropItem._id === crop?._id
                    ? theme.btn.color.outlineBg
                    : undefined,
              }}
            >
              <Typography variant="body" weight="700">
                {cropItem.cropName}
              </Typography>
              <Typography
                variant="small"
                style={{
                  color: cropItem.isPlanted
                    ? theme.btn.color.token
                    : theme.btn.color.tokenHover,
                }}
              >
                {cropItem.isPlanted ? "PLANTED" : "TO PLANT"}
              </Typography>
            </Item>
          ))}
      </List>
      <div style={{ alignItems: "flex-end" }}>
        <Button
          iconPosition="before"
          icon={<Add fill={theme.btn.text.white} />}
          text="New Crop"
          style={{ justifySelf: "end" }}
          onClick={() => setVisibility(true)}
        />
      </div>
      {visibility && (
        <>
          <Hidden xs sm>
            <PopupContainer ref={popupRef}>
              <div>
                <div>
                  <div
                    onClick={() => {
                      setVisibility(false);
                      handleOnClickChoice();
                    }}
                  >
                    <Choice />
                    <div>
                      <Typography variant="title4" weight="700">
                        Your Choice
                      </Typography>
                      <Typography>
                        We'll give you info and tips on growing
                      </Typography>
                    </div>
                  </div>
                  <div
                    onClick={() => {
                      setVisibility(false);
                      handleOnClickSuggestion();
                    }}
                  >
                    <Suggestion />
                    <div>
                      <Typography variant="title4" weight="700">
                        Our Suggestion
                      </Typography>
                      <Typography>
                        We'll suggest which crop suits your soil
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </PopupContainer>
          </Hidden>
          <Visible xs sm>
            <MobileDrawer
              direction="bottom"
              isOpenDrawer={visibility}
              handleDrawerClose={() => setVisibility(false)}
              drawerSize="auto"
              isModalVisible={isModalVisible}
            >
              <PopupContainer>
                <div>
                  <div>
                    <div
                      onClick={() => {
                        setVisibility(false);
                        handleOnClickChoice();
                      }}
                    >
                      <Choice />
                      <div>
                        <Typography variant="title4" weight="700">
                          Your Choice
                        </Typography>
                        <Typography>
                          We'll give you info and tips on growing
                        </Typography>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        setVisibility(false);
                        handleOnClickSuggestion();
                      }}
                    >
                      <Suggestion />
                      <div>
                        <Typography variant="title4" weight="700">
                          Our Suggestion
                        </Typography>
                        <Typography>
                          We'll suggest which crop suits your soil
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </PopupContainer>
            </MobileDrawer>
          </Visible>
        </>
      )}
    </Container>
  );
};

export default React.memo(CropList);
