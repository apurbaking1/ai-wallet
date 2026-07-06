import { useContext } from "react";
import { DailyContext } from "../context/DailyContext";
import { RewardContext } from "../context/RewardContext";

function DailyCheckIn() {
  const { streak, checkIn } = useContext(DailyContext);
  const { nova, setNova } = useContext(RewardContext);

  function handleCheckIn() {
    const success = checkIn();

    if (success) {
      setNova(nova + 1);
      alert("🎉 Daily Check-in Complete! +1 NOVA");
    } else {
      alert("✅ You already checked in today.");
    }
  }

  return (
    <div className="balance-card">
      <h2>🔥 Daily Check-in</h2>

      <p>Current Streak: {streak} Days</p>

      <button
        className="action-btn ai"
        onClick={handleCheckIn}
      >
        Claim Daily Reward
      </button>
    </div>
  );
}

export default DailyCheckIn;