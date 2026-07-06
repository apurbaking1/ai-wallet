import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { WalletProvider } from "./context/WalletContext";
import { XPProvider } from "./context/XPContext";
import { QuestProvider } from "./context/QuestContext";
import { ReferralProvider } from "./context/ReferralContext";
import { RewardProvider } from "./context/RewardContext";
import { DailyProvider } from "./context/DailyContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
   <WalletProvider>
  <XPProvider>
    <RewardProvider>
      <QuestProvider>
        <ReferralProvider>
          <DailyProvider>
            <App />
          </DailyProvider>
        </ReferralProvider>
      </QuestProvider>
    </RewardProvider>
  </XPProvider>
</WalletProvider>
  </StrictMode>
);