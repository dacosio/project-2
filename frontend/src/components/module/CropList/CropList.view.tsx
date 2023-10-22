import React, { useState } from "react";
import { CropListProps } from "./CropList.props";
import { Container, Item, List, TabContainer } from "./CropList.style";
import Tab from "../../base/Tab";
import Typography from "../../base/Typography";
import Button from "../../base/Button";
import { Add } from "../../base/SVG";
import { useTheme } from "../../../utils/Theme";

const CropList = (props: CropListProps): JSX.Element => {
  const { crops, crop, handleOnClickCrop, handleOnCreateCrop } = props;

  const theme = useTheme();

  const [option, setOption] = useState<string | undefined>("all");

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
          onClick={handleOnCreateCrop}
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "98px",
          width: "100%",
        }}
      >
        <div style={{ paddingRight: "16px" }}>wef</div>
      </div>
    </Container>
  );
};

export default React.memo(CropList);
