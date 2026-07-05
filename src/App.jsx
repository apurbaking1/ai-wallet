import "./App.css";

import Header from "./components/Header";
import BalanceCard from "./components/BalanceCard";
import ActionButtons from "./components/ActionButtons";
import AIChat from "./components/AIChat";
import Portfolio from "./components/Portfolio";
import RecentActivity from "./components/RecentActivity";

function App() {
  return (
    <div className="app">
      <Header />

      <BalanceCard />

      <ActionButtons />

      <AIChat />

      <Portfolio />
<RecentActivity />
    </div>
  );
}

export default App;