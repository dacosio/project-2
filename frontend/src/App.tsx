import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Private from "./pages/Private";
import PersistAuth from "components/layout/PersistAuth";
import YourCrop from "./pages/Crops/YourCrop";
import CropGuide from "./pages/Crops/CropGuide";
import Weather from "./pages/Weather";
import CropAbout from "./../src/pages/Crops/CropAbout/CropAbout.container";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="your-crops" element={<YourCrop />} />
        <Route path="crop-guide" element={<CropGuide />} />
        <Route path="crop-guide/:id" element={<CropAbout />} />
        <Route path="weather" element={<Weather />} />
        <Route path="login" element={<Login />} />
        <Route element={<PersistAuth />}>
          <Route path="private" element={<Private />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
