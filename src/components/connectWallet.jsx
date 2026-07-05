import { useContext } from "react";
import { WalletContext } from "../context/WalletContext";
import { XPContext } from "../context/XPContext";
import { QuestContext } from "../context/QuestContext";
import { RewardContext } from "../context/RewardContext";
import { connectWallet } from "../services/wallet";

function ConnectWallet() {
  const { wallet, setWallet } = useContext(WalletContext);
  const { setXp, setPoints } = useContext(XPContext);
  const { completeQuest } = useContext(QuestContext);
  const { setNova } = useContext(RewardContext);

  async function handleConnect() {
    const data = await connectWallet();

    if (data) {
      setWallet(data);

      // Rewards
      setXp(100);
      setPoints(50);
      setNova(5);

      // Complete Connect Wallet Quest
      completeQuest(1);
    }
  }

  return (
    <div className="balance-card">
      {!wallet ? (
        <button className="action-btn ai" onClick={handleConnect}>
          🦊 Connect Wallet
        </button>
      ) : (
        <>
          <h3>✅ Wallet Connected</h3>

          <p style={{ wordBreak: "break-all" }}>
            {wallet.address}
          </p>

          <h2>{Number(wallet.balance).toFixed(4)} ETH</h2>

          <p>⭐ +100 XP Earned</p>
          <p>💎 +50 Points Earned</p>
          <p>🪙 +5 NOVA Earned</p>
        </>
      )}
    </div>
  );
}

export default ConnectWallet;