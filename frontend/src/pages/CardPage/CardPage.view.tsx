import React from "react";
import { CardPageGeneratedProps } from "./CardPage.props";
import { Container } from "./CardPage.style";
import Card from "components/base/Card";

const CardPageView = (props: CardPageGeneratedProps) => {
  const {
    data: cards,
    headerText,
    setHeaderText,
    subText,
    setSubText,
    description,
    setDescription,
    ...CardPageGeneratedProps
  } = props;
  return (
    <Container>
      {cards?.map(
        (
          card: {
            _id: string;
            headerText: string;
            subText: string;
            image: string;
            description: string;
          },
          index
        ) => (
          <Card
            id={card._id}
            headerText={card.headerText}
            subText={card.subText}
            image={card.image}
            description={card.description}
            key={index}
          />
        )
      )}
    </Container>
  );
};

export default CardPageView;
