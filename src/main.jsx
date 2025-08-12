import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App";
import AppRoutes from "./Routes";
import ScrollToTop from "./components/ScrollToTopOnMount";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
