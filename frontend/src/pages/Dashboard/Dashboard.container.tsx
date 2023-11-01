import React from "react";

import DashboardView from "./Dashboard.view";
import { useGetPlantedCropsQuery } from "features/crops/cropApiSlice";

const Dashboard = (): JSX.Element => {
  const { data, isLoading } = useGetPlantedCropsQuery({ isPlanted: true }); //or isFavorite??

  const generatedProps = {
    crops: data,
    isLoading,
    // generated props here
  };
  return <DashboardView {...generatedProps} />;
};

export default Dashboard;
