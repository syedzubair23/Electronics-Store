import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import reducer, { initialState } from "./components/logic_components/reducer";
import { StateProvider } from "./components/logic_components/StateProvider";
import { ContextProvider } from "./components/logic_components/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <StateProvider initialState={initialState} reducer={reducer}> */}
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
    {/* </StateProvider> */}
  </React.StrictMode>
);
