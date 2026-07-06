import { useContext } from "react";
import { XPContext } from "../context/XPContext";
import { RewardContext } from "../context/RewardContext";
import { ReferralContext } from "../context/ReferralContext";

function Leaderboard() {
  const { xp } = useContext(XPContext);
  const { nova } = useContext(RewardContext);
  const { referrals } = useContext(ReferralContext);

  const players = [
    {
      rank: 1,
      name: "NovaWhale",
      xp: 12450,
      nova: 5200,
      referrals: 312,
    },
    {
      rank: 2,
      name: "CryptoWolf",
      xp: 11280,
      nova: 4700,
      referrals: 265,
    },
    {
      rank: 3,
      name: "ChainMaster",
      xp: 9870,
      nova: 4100,
      referrals: 218,
    },
    {
      rank: 27,
      name: "You",
      xp,
      nova,
      referrals,
      me: true,
    },
  ];

  return (
    <div className="app">
      <h1>🏆 Leaderboard</h1>

      <p
        style={{
          color: "#999",
          marginBottom: "25px",
        }}
      >
        Top Nova Wallet community members.
      </p>

      {players.map((user) => (
        <div
          key={user.rank}
          className="balance-card"
          style={{
            marginBottom: "15px",
            border: user.me
              ? "2px solid #6366f1"
              : "",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h2>
                #{user.rank} {user.name}
              </h2>

              <p>⭐ {user.xp} XP</p>

              <p>🪙 {user.nova} NOVA</p>

              <p>👥 {user.referrals} Referrals</p>
            </div>

            <div
              style={{
                fontSize: "42px",
              }}
            >
              {user.rank === 1
                ? "🥇"
                : user.rank === 2
                ? "🥈"
                : user.rank === 3
                ? "🥉"
                : "🚀"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Leaderboard;