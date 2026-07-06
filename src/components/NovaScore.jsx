import { useContext } from "react";
import { WalletContext } from "../context/WalletContext";
import { XPContext } from "../context/XPContext";
import { QuestContext } from "../context/QuestContext";
import { RewardContext } from "../context/RewardContext";

function NovaScore() {
  const { wallet } = useContext(WalletContext);
  const { xp } = useContext(XPContext);
  const { nova } = useContext(RewardContext);
  const { quests } = useContext(QuestContext);

  const completed = quests.filter((q) => q.completed).length;

  let score = 0;

  if (wallet) score += 20;

  score += Math.min(Math.floor(xp / 20), 30);

  score += Math.min(completed * 5, 30);

  score += Math.min(Math.floor(nova), 20);

  if (score > 100) score = 100;

  function getLevel() {
    if (score >= 90) return "🚀 Nova Legend";
    if (score >= 75) return "👑 Nova Elite";
    if (score >= 60) return "🔥 Explorer";
    if (score >= 40) return "⭐ Member";
    return "🌱 Beginner";
  }

  return (
    <div className="balance-card">

      <h2>🧠 Nova Score</h2>

      <h1
        style={{
          fontSize: "55px",
          margin: "15px 0",
        }}
      >
        {score}
      </h1>

      <p>/100</p>

      <div
        style={{
          height: "12px",
          width: "100%",
          background: "#27272a",
          borderRadius: "20px",
          overflow: "hidden",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            width: `${score}%`,
            height: "100%",
            background:
              "linear-gradient(90deg,#6366f1,#8b5cf6)",
            transition: ".5s",
          }}
        />
      </div>

      <h3
        style={{
          marginTop: "18px",
        }}
      >
        {getLevel()}
      </h3>

      <p
        style={{
          color: "#999",
        }}
      >
        Complete quests, earn NOVA and stay active to
        increase your score.
      </p>

    </div>
  );
}

export default NovaScore;