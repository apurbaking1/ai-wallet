import { useContext } from "react";
import { WalletContext } from "../context/WalletContext";
import { XPContext } from "../context/XPContext";
import { ReferralContext } from "../context/ReferralContext";
import { DailyContext } from "../context/DailyContext";

function NFTBadges() {
  const { wallet } = useContext(WalletContext);
  const { xp } = useContext(XPContext);
  const { referrals } = useContext(ReferralContext);
  const { streak } = useContext(DailyContext);

  const badges = [
    {
      name: "Early Adopter",
      icon: "🦊",
      unlocked: wallet !== null,
    },
    {
      name: "Explorer",
      icon: "🧭",
      unlocked: xp >= 500,
    },
    {
      name: "Quest Master",
      icon: "🏆",
      unlocked: xp >= 1000,
    },
    {
      name: "Community Builder",
      icon: "👥",
      unlocked: referrals >= 10,
    },
    {
      name: "Streak Master",
      icon: "🔥",
      unlocked: streak >= 7,
    },
    {
      name: "Nova Legend",
      icon: "👑",
      unlocked: xp >= 3000,
    },
  ];

  return (
    <div className="balance-card">
      <h2>🏅 NFT Badge Collection</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        {badges.map((badge) => (
          <div
            key={badge.name}
            style={{
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: "16px",
              padding: "18px",
              textAlign: "center",
              background: badge.unlocked
                ? "rgba(99,102,241,.15)"
                : "rgba(255,255,255,.03)",
              opacity: badge.unlocked ? 1 : 0.45,
            }}
          >
            <div style={{ fontSize: "38px" }}>
              {badge.icon}
            </div>

            <h4 style={{ marginTop: "10px" }}>
              {badge.name}
            </h4>

            <p>
              {badge.unlocked
                ? "✅ Unlocked"
                : "🔒 Locked"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NFTBadges;