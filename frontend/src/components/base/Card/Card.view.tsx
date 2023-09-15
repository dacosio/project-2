import React from "react";
import { CardProps } from "./Card.props";

import { Theme } from "types/Theme";
import {
  CardContentImg,
  CardHeader,
  CardHeaderImg,
  CardHeaderText,
  CardWrapper,
  CardContent,
  CardFooter,
} from "./Card.style";
import Button from "../Button";
import TypographyView from "../Typography/Typography.view";

const Card = (props: CardProps): JSX.Element => {
  // const theme = useTheme();
  const { headerText, subText, image, description, ...cardProps } = props;

  let textColor: keyof Theme["brand"] | keyof Theme["grey"];

  return (
    <CardWrapper>
      <CardHeader>
        <CardHeaderImg alt="certain name" src={image} />
        <CardHeaderText>
          <TypographyView variant="title5">{headerText}</TypographyView>
          <TypographyView variant="label">{subText}</TypographyView>
        </CardHeaderText>
      </CardHeader>
      <CardContent>
        <CardContentImg alt="certain name" src={image} />
        <TypographyView variant="body">{description}</TypographyView>
      </CardContent>
      <CardFooter>
        <Button text="Button" />
        <Button text="Button" />
      </CardFooter>
    </CardWrapper>
  );
};

export default Card;
