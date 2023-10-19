import React, { useState } from "react";
import { CropListProps } from "./CropList.props";
import { Container, Item } from "./CropList.style";
import Tab from "../../base/Tab";
import Typography from "../../base/Typography";
import Button from "../../base/Button";
import { Add } from "../../base/SVG";
import { useTheme } from "../../../utils/Theme";

const CropList = (props: CropListProps): JSX.Element => {
  const { crops, handleOnClickCrop, handleOnCreateCrop } = props;

  const theme = useTheme();

  const [option, setOption] = useState<string | undefined>("all");

  return (
    <Container>
      <div>
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
      </div>
      <div>
        {crops
          .filter((crop) =>
            option === "planted"
              ? crop.isPlanted
              : option === "to-plant"
              ? !crop.isPlanted
              : true
          )
          .map((crop) => (
            <Item onClick={() => handleOnClickCrop(crop.id)}>
              <Typography variant="body" weight="700">
                {crop.name}
              </Typography>
              <Typography
                variant="small"
                weight="700"
                style={{
                  color: crop.isPlanted
                    ? theme.btn.color.token
                    : theme.btn.color.tokenHover,
                }}
              >
                {crop.isPlanted ? "PLANTED" : "TO PLANT"}
              </Typography>
            </Item>
          ))}
      </div>
      <div style={{ alignItems: "flex-end" }}>
        <Button
          iconPosition="before"
          icon={<Add fill={theme.btn.text.white} />}
          text="New Crop"
          style={{ justifySelf: "end" }}
          onClick={handleOnCreateCrop}
        />
      </div>
    </Container>
  );
};

export default React.memo(CropList);
