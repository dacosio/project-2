import React, { useState } from "react";
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
import { Hidden } from "react-grid-system";

const CropList = (props: CropListProps): JSX.Element => {
  const {
    crops,
    crop,
    handleOnClickCrop,
    handleOnClickChoice,
    handleOnClickSuggestion,
  } = props;

  const theme = useTheme();

  const [option, setOption] = useState<string | undefined>("all");
  const [visibility, setVisibility] = useState<boolean>(false);

  return (
    <Container>
      <TabContainer>
        <Tab
          options={[
            { value: "all", label: "All" },
            { value: "planted", label: "Planted" },
            { value: "to-plant", label: "To Plant" },
          ]}
          value={option}
          setValue={setOption}
          name="category"
        />
      </TabContainer>
      <List>
        {crops
          .filter((crop) =>
            option === "planted"
              ? crop.isPlanted
              : option === "to-plant"
              ? !crop.isPlanted
              : true
          )
          .map((cropItem, index) => (
            <Item
              onClick={() => handleOnClickCrop(cropItem.id)}
              key={index}
              style={{
                backgroundColor:
                  cropItem.id === crop?.id
                    ? theme.btn.color.outlineBg
                    : undefined,
              }}
            >
              <Typography variant="body" weight="700">
                {cropItem.name}
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
        <Hidden xs sm>
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
        </Hidden>
      )}
    </Container>
  );
};

export default React.memo(CropList);
