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
import Signup from "pages/Signup";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="your-crops" element={<YourCrop />} />
        <Route path="crop-guide" element={<CropGuide />} />
        <Route path="weather" element={<Weather />} />
        <Route path="login" element={<Login />} />
        <Route element={<PersistAuth />}>
          <Route path="private" element={<Private />} />
        </Route>
      </Route>
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
