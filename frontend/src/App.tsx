import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import Private from "./pages/Private";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="private" element={<Private />} />
      </Route>
    </Routes>
  );
}

export default App;
