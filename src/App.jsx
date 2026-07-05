import "./App.css";

import Header from "./components/Header";
import BalanceCard from "./components/BalanceCard";
import ActionButtons from "./components/ActionButtons";
import AIChat from "./components/AIChat";
import Portfolio from "./components/Portfolio";
import TokenList from "./components/TokenList";
import RecentActivity from "./components/RecentActivity";
import ConnectWallet from "./components/ConnectWallet";
import Navbar from "./components/Navbar";
import QuestProgress from "./components/QuestProgress";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />

      <BalanceCard />

      <ActionButtons />

      <AIChat />

      <Portfolio />
      <TokenList />
      <QuestProgress />

<RecentActivity />
<ConnectWallet />
    </div>
  );
}

export default App;