import React, { useState } from 'react';

import HomeView from './Home.view';

const Home = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [ideal_temp, setIdealTemp] = useState<string>("");
  const [humidity, setHumidity] = useState<string>("");
  const [growing_period, setGrowingPeriod] = useState<string>("");
  const [fertilizer_composition, setFertilizerComposition] = useState<string>("");

  const generatedProps = {};
  return <HomeView {...generatedProps} />;
};

export default Home;
