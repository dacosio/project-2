import React, { ChangeEvent, useState } from "react";
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
  Input,
  Textarea,
} from "./Yuhwan.style";

const Yuhwan = (props: YuhwanProps): JSX.Element => {
  const {
    id,
    avatar,
    title,
    subtitle,
    image,
    description,
    onDelete,
    onUpdate,
  } = props;

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [inputTitle, setInputTitle] = useState<string>(title);
  const [inputSubtitle, setInputSubtitle] = useState<string>(subtitle);
  const [inputDescription, setInputDescription] = useState<string>(description);

  const handleOnUpdate = () => {
    if ([inputTitle, inputSubtitle, inputDescription].every(Boolean)) {
      onUpdate(id, inputTitle, inputSubtitle, inputDescription);
    }
    setIsEditing(false);
  };

  return (
    <YuhwanContainer>
      <HeadContainer>
        <Avatar src={avatar} />
        <TitleContainer>
          {isEditing ? (
            <Input
              type="text"
              value={inputTitle}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setInputTitle(event.target.value)
              }
            />
          ) : (
            <Typography variant="title5" weight="700">
              {title}
            </Typography>
          )}
          {isEditing ? (
            <Input
              type="text"
              value={inputSubtitle}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setInputSubtitle(event.target.value)
              }
            />
          ) : (
            <Typography variant="body">{subtitle}</Typography>
          )}
        </TitleContainer>
      </HeadContainer>
      <Image src={image} />
      <BodyContainer>
        {isEditing ? (
          <Textarea
            value={inputDescription}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              setInputDescription(event.target.value)
            }
          />
        ) : (
          <Typography variant="body" textColor="shade7">
            {description}
          </Typography>
        )}
      </BodyContainer>
      <FootContainer>
        <ButtonContainer>
          <Button
            text="Delete"
            style={{ padding: "4px 8px", backgroundColor: "transparent" }}
            onClick={() => onDelete(id)}
          />
          {isEditing ? (
            <>
              <Button
                text="Confirm"
                onClick={handleOnUpdate}
                style={{ padding: "4px 8px", backgroundColor: "transparent" }}
              />
              <Button
                text="Cancel"
                onClick={() => setIsEditing(false)}
                style={{ padding: "4px 8px", backgroundColor: "transparent" }}
              />
            </>
          ) : (
            <Button
              text="Update"
              onClick={() => setIsEditing(true)}
              style={{ padding: "4px 8px", backgroundColor: "transparent" }}
            />
          )}
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
