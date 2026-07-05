import { useContext } from "react";
import { XPContext } from "../context/XPContext";

function ProgressCard() {
  const { xp } = useContext(XPContext);

  const currentLevel = Math.floor(xp / 500) + 1;
  const progress = (xp % 500) / 5;

  return (
    <div className="balance-card">
      <h2>🏆 Level Progress</h2>

      <h3>Level {currentLevel}</h3>

      <div
        style={{
          width: "100%",
          height: "12px",
          background: "#222",
          borderRadius: "999px",
          overflow: "hidden",
          marginTop: "15px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#7c3aed",
            transition: "0.3s",
          }}
        />
      </div>

      <p style={{ marginTop: "10px" }}>
        {xp % 500} / 500 XP
      </p>
    </div>
  );
}

export default ProgressCard;