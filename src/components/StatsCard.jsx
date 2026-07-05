import { useContext } from "react";
import { XPContext } from "../context/XPContext";
import { QuestContext } from "../context/QuestContext";
import { RewardContext } from "../context/RewardContext";

function StatsCard() {
  const { xp, points } = useContext(XPContext);
  const { nova } = useContext(RewardContext);
  const { quests } = useContext(QuestContext);

  const completed = quests.filter((q) => q.completed).length;

  return (
    <div className="balance-card">
      <h2>🏆 Nova Rewards</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div>
          <h3>⭐ XP</h3>
          <p>{xp}</p>
        </div>

        <div>
          <h3>💎 Points</h3>
          <p>{points}</p>
        </div>

        <div>
          <h3>🪙 NOVA</h3>
          <p>{nova}</p>
        </div>

        <div>
          <h3>🏆 Level</h3>
          <p>{Math.floor(xp / 500) + 1}</p>
        </div>

        <div>
          <h3>🎯 Quests</h3>
          <p>{completed}/{quests.length}</p>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;