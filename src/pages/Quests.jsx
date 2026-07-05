import { useContext } from "react";
import { QuestContext } from "../context/QuestContext";

function Quests() {
  const { quests } = useContext(QuestContext);

  return (
    <div className="balance-card">
      <h2>🎯 Active Quests</h2>

      {quests.map((quest) => (
        <div
          key={quest.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 0",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div>
            <strong>{quest.title}</strong>
            <br />
            <small>{quest.description}</small>
          </div>

          <div
            style={{
              textAlign: "right",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              alignItems: "flex-end",
            }}
          >
            <div style={{ fontSize: "20px" }}>
              {quest.completed ? "✅" : "⬜"}
            </div>

            <small>⭐ {quest.xp} XP</small>
            <small>💎 {quest.points} Points</small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Quests;