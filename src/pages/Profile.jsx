import { useContext } from "react";
import { WalletContext } from "../context/WalletContext";
import { XPContext } from "../context/XPContext";
import { RewardContext } from "../context/RewardContext";
import { ReferralContext } from "../context/ReferralContext";
import { DailyContext } from "../context/DailyContext";
import { QuestContext } from "../context/QuestContext";

import NovaScore from "../components/NovaScore";
import NFTBadges from "../components/NFTBadges";
function Profile() {
  const { wallet } = useContext(WalletContext);
  const { xp, points } = useContext(XPContext);
  const { nova } = useContext(RewardContext);
  const { referrals } = useContext(ReferralContext);
  const { streak } = useContext(DailyContext);
  const { quests } = useContext(QuestContext);

  const completedQuests = quests.filter((q) => q.completed).length;

  return (
    <div className="app">
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        👤 My Profile
      </h1>

      <NovaScore />

      <div className="balance-card">
        <h2>👛 Wallet</h2>

        <p
          style={{
            wordBreak: "break-all",
            marginTop: "15px",
            color: "#bdbdbd",
          }}
        >
          {wallet
            ? wallet.address
            : "Wallet not connected"}
        </p>
      </div>

      <div className="balance-card">
        <h2>📊 Account Stats</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "18px",
            marginTop: "20px",
          }}
        >
          <div>
            <h3>🪙 NOVA</h3>
            <p>{nova}</p>
          </div>

          <div>
            <h3>⭐ XP</h3>
            <p>{xp}</p>
          </div>

          <div>
            <h3>💎 Points</h3>
            <p>{points}</p>
          </div>

          <div>
            <h3>🏆 Level</h3>
            <p>{Math.floor(xp / 500) + 1}</p>
          </div>

          <div>
            <h3>👥 Referrals</h3>
            <p>{referrals}</p>
          </div>

          <div>
            <h3>🔥 Streak</h3>
            <p>{streak} Days</p>
          </div>

          <div>
            <h3>🎯 Quests</h3>
            <p>
              {completedQuests}/{quests.length}
            </p>
          </div>

          <div>
            <h3>🟢 Status</h3>
            <p>
              {wallet ? "Connected" : "Offline"}
            </p>
          </div>
        </div>
      </div>

      <div className="balance-card">
        <h2>🏅 Achievements</h2>

        <p>🦊 Early Nova Member</p>

        {wallet && <p>👛 Wallet Connected</p>}

        {xp >= 500 && <p>⭐ Level 2 Reached</p>}

        {completedQuests >= 5 && (
          <p>🎯 Quest Explorer</p>
        )}

        {referrals >= 10 && (
          <p>👥 Community Builder</p>
        )}

        {streak >= 7 && (
          <p>🔥 7-Day Streak</p>
        )}
      </div>
         <NFTBadges />
    </div>
  );
}

export default Profile;