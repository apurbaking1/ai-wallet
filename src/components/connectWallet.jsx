import { useContext } from "react";
import { WalletContext } from "../context/WalletContext";
import { XPContext } from "../context/XPContext";
import { connectWallet } from "../services/wallet";
import { QuestContext } from "../context/QuestContext";

function ConnectWallet() {
  const { wallet, setWallet } = useContext(WalletContext);
  const { setXp, setPoints } = useContext(XPContext);
  const { completeQuest } = useContext(QuestContext);

  async function handleConnect() {
    const data = await connectWallet();

   if (data) {
  setWallet(data);

  setXp(100);
  setPoints(50);

  completeQuest(1);
}
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
        </>
      )}
    </div>
  );
}

export default ConnectWallet;