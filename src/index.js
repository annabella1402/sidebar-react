import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Sidebar from "./Sidebar";
import "./index.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Sidebar />
  </StrictMode>
);
