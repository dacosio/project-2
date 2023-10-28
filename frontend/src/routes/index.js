import React from "react";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Team from "../pages/Team";
import Dashboard from "../pages/Dashboard";
import PersistAuth from "../components/layout/PersistAuth";
import YourCrop from "../pages/Crops/YourCrop";
import CropGuide from "../pages/Crops/CropGuide";
import Weather from "../pages/Weather";
import CropAbout from "../pages/Crops/CropAbout";
import { useRoutes } from "react-router-dom";

export default function Router() {
  let element = useRoutes([
    {
      element: <Layout />,
      children: [
        {
          element: <PersistAuth />,
          children: [
            {
              path: "your-crops",
              element: <YourCrop />,
            },
            {
              path: "crop-guide",
              element: <CropGuide />,
            },
            {
              path: "crop-guide/:id",
              element: <CropAbout />,
            },
          ],
        },
      ],
    },
    {
      element: <Home />,
      path: "/",
    },
    {
      element: <Team />,
      path: "team",
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "weather",
      element: <Weather />,
    },
  ]);
  return element;
}
