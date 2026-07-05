import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { WalletProvider } from "./context/WalletContext";
import { XPProvider } from "./context/XPContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WalletProvider>
      <XPProvider>
        <App />
      </XPProvider>
    </WalletProvider>
  </StrictMode>
);