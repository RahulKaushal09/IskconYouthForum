import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "../src/App";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from "../src/context";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
       <App />
    </MaterialUIControllerProvider>
  </BrowserRouter>
);
