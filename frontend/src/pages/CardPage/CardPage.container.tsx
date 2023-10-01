import React, { useState } from "react";
import CardPageView from "./CardPage.view";
import { useGetCardQuery } from "features/cardpage/cardPageApiSlice";
import { CardPageGeneratedProps } from "./CardPage.props";

const CardPage = (): JSX.Element => {
  const { data } = useGetCardQuery("");
  const [headerText, setHeaderText] = useState<string>("");
  const [subText, setSubText] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const generatedProps: CardPageGeneratedProps = {
    data,
    headerText,
    setHeaderText,
    subText,
    setSubText,
    description,
    setDescription,
  };
  return <CardPageView {...generatedProps} />;
};

export default CardPage;
