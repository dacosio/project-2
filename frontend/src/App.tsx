import React from "react";
import { Counter } from "./features/counter/Counter";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Login />
      </Route>
      {/* <header className="App-header">
        <Counter />
      </header> */}
    </Routes>
  );
}

export default App;
