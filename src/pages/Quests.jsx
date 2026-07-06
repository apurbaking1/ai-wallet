import { useContext, useState } from "react";
import { QuestContext } from "../context/QuestContext";
import { XPContext } from "../context/XPContext";
import { RewardContext } from "../context/RewardContext";
import {
  FiTwitter,
  FiUsers,
  FiCheckCircle,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import {
  FaTelegramPlane,
  FaDiscord,
  FaWallet,
} from "react-icons/fa";

function Quests() {
  
  
const { quests, verifyQuest } = useContext(QuestContext);
const { setXp, setPoints } = useContext(XPContext);
const { setNova } = useContext(RewardContext);

const [showCompleted, setShowCompleted] = useState(false);
  const activeQuests = quests.filter((q) => !q.completed);
  const completedQuests = quests.filter((q) => q.completed);

  function getIcon(platform) {
    switch (platform) {
      case "x":
        return <FiTwitter size={22} />;
      case "telegram":
        return <FaTelegramPlane size={22} />;
      case "discord":
        return <FaDiscord size={22} />;
      case "wallet":
        return <FaWallet size={22} />;
      case "referral":
        return <FiUsers size={22} />;
      default:
        return <FiCheckCircle size={22} />;
    }
  }

  function getBadge(category) {
    switch (category) {
      case "wallet":
        return "👛 Wallet";
      case "social":
        return "🌐 Social";
      case "onchain":
        return "⛓️ On-chain";
      case "referral":
        return "👥 Referral";
      case "daily":
        return "🔥 Daily";
      case "ai":
        return "🤖 AI";
      default:
        return "Quest";
    }
  }
  function handleClaim(quest) {
  verifyQuest(quest.id);

  setXp((prev) => prev + quest.xp);

  setPoints((prev) => prev + Math.floor(quest.reward * 10));

  setNova((prev) => prev + quest.reward);

  alert(
    `🎉 Quest Completed!\n\n+${quest.reward} NOVA\n+${quest.xp} XP`
  );
}

  function QuestCard(quest) {
    return (
      <div
        key={quest.id}
        className="balance-card"
        style={{ marginBottom: "18px" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            {getIcon(quest.platform)}

            <div>
              <h3 style={{ margin: 0 }}>{quest.title}</h3>
              <small style={{ color: "#999" }}>
                {quest.description}
              </small>
            </div>
          </div>

          <span
            style={{
              background: "#252836",
              padding: "5px 10px",
              borderRadius: "30px",
              fontSize: "12px",
            }}
          >
            {getBadge(quest.category)}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "15px",
          }}
        >
          <strong>🪙 {quest.reward} NOVA</strong>
          <strong>⭐ {quest.xp} XP</strong>
        </div>

        {quest.url && (
          <a
            href={quest.url}
            target="_blank"
            rel="noreferrer"
          >
            <button
  className="action-btn"
  style={{
    width: "100%",
    marginTop: "10px",
  }}
  onClick={() => handleClaim(quest)}
>
  ✅ Verify & Claim
</button>
          </a>
        )}

        {!quest.completed && (
          <button
            className="action-btn"
            style={{
              width: "100%",
              marginTop: "10px",
            }}
          >
            Verify
          </button>
        )}

        <div
          style={{
            textAlign: "center",
            marginTop: "12px",
            fontWeight: "bold",
          }}
        >
          {quest.completed ? (
            <span style={{ color: "#22c55e" }}>
              ✅ Completed
            </span>
          ) : (
            <span style={{ color: "#facc15" }}>
              🟡 Pending
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>🎯 Nova Quests</h1>

      <p style={{ color: "#999", marginBottom: "25px" }}>
        Complete quests to earn NOVA & XP.
      </p>

      <h3 style={{ marginBottom: "18px" }}>
        Active Quests ({activeQuests.length})
      </h3>

      {activeQuests.map(QuestCard)}

      <div
        style={{
          marginTop: "35px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={() => setShowCompleted(!showCompleted)}
      >
        <h3>
          ✅ Completed ({completedQuests.length})
        </h3>

        {showCompleted ? (
          <FiChevronUp />
        ) : (
          <FiChevronDown />
        )}
      </div>

      {showCompleted &&
        completedQuests.map(QuestCard)}
    </div>
  );
}

export default Quests;