import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { ThemeProvider } from "@emotion/react";
import theme from "./utils/Theme";
import { Theme } from "types/Theme";
// import { Theme } from "@emotion/react";

// if (process.env.NODE_ENV === "production") disableReactDevTools();

const container = document.getElementById("root")!;
const root = createRoot(container);

// this is for future prefetch necessities
// store.dispatch(todosApiSlice.endpoints.getTodos.initiate());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
