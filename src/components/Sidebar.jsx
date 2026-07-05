import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="balance-card">
      <h2>🚀 Nova Wallet</h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        <Link to="/">🏠 Dashboard</Link>
        <Link to="/send">💸 Send</Link>
        <Link to="/receive">📥 Receive</Link>
        <Link to="/swap">🔄 Swap</Link>
        <Link to="/ai">🤖 AI</Link>
        <Link to="/quests">🎯 Quests</Link>
        <Link to="/referral">👥 Referral</Link>
        <Link to="/settings">⚙️ Settings</Link>
      </nav>
    </div>
  );
}

export default Sidebar;