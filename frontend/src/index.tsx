import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

// if (process.env.NODE_ENV === "production") disableReactDevTools();

const container = document.getElementById("root")!;
const root = createRoot(container);

// this is for future prefetch necessities
// store.dispatch(todosApiSlice.endpoints.getTodos.initiate());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
