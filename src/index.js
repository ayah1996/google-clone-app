import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ResultContextProvider } from "./Context/ResultContextProvider";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ResultContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ResultContextProvider>
  </StrictMode>
);
