import quests from "../data/quests";

function Quests() {
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

          <div style={{ textAlign: "right" }}>
            <div>⭐ {quest.xp}</div>
            <div>💎 {quest.points}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Quests;