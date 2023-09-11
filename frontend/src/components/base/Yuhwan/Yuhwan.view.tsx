import React from "react";
import { YuhwanProps } from "./Yuhwan.props";
import Button from "../Button";
import Typography from "../Typography";
import { Heart } from "../SVG";
import { Bell } from "../SVG";
import {
  YuhwanContainer,
  HeadContainer,
  Avatar,
  TitleContainer,
  Image,
  BodyContainer,
  FootContainer,
  ButtonContainer,
  IconContainer,
} from "./Yuhwan.style";

const Yuhwan = (props: YuhwanProps): JSX.Element => {
  const { avatar, title, subtitle, image, description } = props;

  return (
    <YuhwanContainer>
      <HeadContainer>
        <Avatar src={avatar} />
        <TitleContainer>
          <Typography variant="title5" weight="700">
            {title}
          </Typography>
          <Typography variant="body">{subtitle}</Typography>
        </TitleContainer>
      </HeadContainer>
      <Image src={image} />
      <BodyContainer>
        <Typography variant="body" textColor="shade7">
          {description}
        </Typography>
      </BodyContainer>
      <FootContainer>
        <ButtonContainer>
          <Button
            text="Button"
            style={{ padding: "4px 8px", backgroundColor: "transparent" }}
          />
          <Button
            text="Button"
            style={{ padding: "4px 8px", backgroundColor: "transparent" }}
          />
        </ButtonContainer>
        <IconContainer>
          <Heart width={24} height={24} fill="#565A6A" />
          <Bell width={24} height={24} fill="#565A6A" />
        </IconContainer>
      </FootContainer>
    </YuhwanContainer>
  );
};

export default React.memo(Yuhwan);
