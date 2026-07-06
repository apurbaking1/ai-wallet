import { useContext } from "react";
import { RewardContext } from "../context/RewardContext";
import { WalletContext } from "../context/WalletContext";

function Referral() {
  const { nova } = useContext(RewardContext);
const { wallet } = useContext(WalletContext);

const referralCode = wallet
  ? `NOVA-${wallet.address.slice(2, 8).toUpperCase()}`
  : "CONNECT-WALLET";

const referralLink = `https://novawallet.xyz/?ref=${referralCode}`;
  const referrals = 0;
const totalRewards = nova;
  const milestones = [
    { invite: 1, reward: 50 },
    { invite: 5, reward: 300 },
    { invite: 10, reward: 750 },
    { invite: 25, reward: 2500 },
    { invite: 50, reward: 7000 },
    { invite: 100, reward: 20000 },
    { invite: 250, reward: 60000 },
    { invite: 500, reward: 150000 },
    { invite: 1000, reward: 500000 },
  ];

  function copyLink() {
    navigator.clipboard.writeText(referralLink);
    alert("Referral link copied!");
  }

  return (
    <div className="app">
      <h1>👥 Invite Friends</h1>

      <div className="balance-card">

        <h3>Your Referral Code</h3>

        <h2>{referralCode}</h2>

        <p
          style={{
            wordBreak: "break-all",
            color: "#999",
          }}
        >
          {referralLink}
        </p>

        <button
          className="action-btn ai"
          style={{
            width: "100%",
            marginTop: "15px",
          }}
          onClick={copyLink}
        >
          📋 Copy Referral Link
        </button>

      </div>

      <div className="balance-card">

        <h2>Referral Stats</h2>

        <p>👥 Referrals: {referrals}</p>

        <p>🪙 Total NOVA Earned: {nova}</p>

      </div>

      <div className="balance-card">

        <h2>🏆 Referral Milestones</h2>

        {milestones.map((m) => (
          <div
            key={m.invite}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "12px 0",
              borderBottom:
                "1px solid rgba(255,255,255,.08)",
            }}
          >
            <span>{m.invite} Invites</span>

            <strong>
              🪙 {m.reward} NOVA
            </strong>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Referral;