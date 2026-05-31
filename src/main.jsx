import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "react-loading-skeleton/dist/skeleton.css";
import { HashRouter, BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Rent_UI">
      <App />
    </BrowserRouter>
    {/* <HashRouter>
      <App />
    </HashRouter> */}
  </StrictMode>,
);
