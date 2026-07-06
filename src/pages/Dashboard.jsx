import Header from "../components/Header";
import BalanceCard from "../components/BalanceCard";
import ActionButtons from "../components/ActionButtons";
import AIChat from "../components/AIChat";
import Portfolio from "../components/Portfolio";
import TokenList from "../components/TokenList";
import QuestProgress from "../components/QuestProgress";
import RecentActivity from "../components/RecentActivity";
import ConnectWallet from "../components/ConnectWallet";
import StatsCard from "../components/StatsCard";
import ProgressCard from "../components/ProgressCard";
import DailyCheckIn from "../components/DailyCheckIn";

function Dashboard() {
  return (
    <>
      <Header />
    
      <BalanceCard />
      <StatsCard />
      <ProgressCard />

      <DailyCheckIn />

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