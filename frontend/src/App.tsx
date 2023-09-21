import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import Private from "./pages/Private";
import PersistAuth from "components/layout/PersistAuth";
import Yuhwan from "pages/Test/Yuhwan";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route element={<PersistAuth />}>
          <Route path="private" element={<Private />} />
        </Route>
        <Route path="test">
          <Route path="yuhwan" element={<Yuhwan />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
