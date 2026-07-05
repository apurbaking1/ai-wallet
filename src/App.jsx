import "./App.css";

import Header from "./components/Header";
import BalanceCard from "./components/BalanceCard";
import ActionButtons from "./components/ActionButtons";
import AIChat from "./components/AIChat";
import Portfolio from "./components/Portfolio";
import RecentActivity from "./components/RecentActivity";
import ConnectWallet from "./components/ConnectWallet";

function App() {
  return (
    <div className="app">
      <Header />

      <BalanceCard />

      <ActionButtons />

      <AIChat />

      <Portfolio />
<RecentActivity />
<ConnectWallet />
    </div>
  );
}

export default App;