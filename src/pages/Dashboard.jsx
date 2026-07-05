import Header from "../components/Header";
import BalanceCard from "../components/BalanceCard";
import ActionButtons from "../components/ActionButtons";
import AIChat from "../components/AIChat";
import Portfolio from "../components/Portfolio";
import TokenList from "../components/TokenList";
import QuestProgress from "../components/QuestProgress";
import RecentActivity from "../components/RecentActivity";
import ConnectWallet from "../components/ConnectWallet";

function Dashboard() {
  return (
    <>
      <Header />
      <BalanceCard />
      <ActionButtons />
      <AIChat />
      <Portfolio />
      <TokenList />
      <QuestProgress />
      <RecentActivity />
      <ConnectWallet />
    </>
  );
}

export default Dashboard;