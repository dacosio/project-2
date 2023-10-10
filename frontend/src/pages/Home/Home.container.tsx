import React, { useState } from 'react';

import HomeView from './Home.view';
import { useGetSearchDetailsQuery } from "../../features/search/searchApiSlice";

const Home = (): JSX.Element => {
  const { data } = useGetSearchDetailsQuery('');
  const [name, setName] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [ideal_temp, setIdealTemp] = useState<string>("");
  const [humidity, setHumidity] = useState<string>("");
  const [growing_period, setGrowingPeriod] = useState<string>("");
  const [fertilizer_composition, setFertilizerComposition] = useState<string>("");

  const generatedProps = {
    data,
    name,
    about,
    ideal_temp,
    humidity,
    growing_period,
    fertilizer_composition
  };
  return <HomeView {...generatedProps} />;
};

export default Home;
