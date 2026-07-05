function QuestProgress() {
  const quests = [
    { title: "Connect Wallet", done: true },
    { title: "First Swap", done: false },
    { title: "First Send", done: false },
    { title: "Invite a Friend", done: false },
  ];

  return (
    <div className="balance-card">
      <h2>🎯 Quest Progress</h2>

      {quests.map((quest, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <span>{quest.title}</span>
          <span>{quest.done ? "✅" : "⬜"}</span>
        </div>
      ))}

      <hr
        style={{
          margin: "20px 0",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      />

      <h3>⭐ XP: 100 / 1000</h3>
    </div>
  );
}

export default QuestProgress;