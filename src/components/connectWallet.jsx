import { useState } from "react";
import { connectWallet } from "../services/wallet";

function ConnectWallet() {
  const [address, setAddress] = useState("");

  async function handleConnect() {
    const wallet = await connectWallet();

    if (wallet) {
      setAddress(wallet);
    }
  }

  return (
    <div className="balance-card">
      <button className="action-btn ai" onClick={handleConnect}>
        🦊 Connect Wallet
      </button>

      {address && (
        <p style={{ marginTop: "15px", wordBreak: "break-all" }}>
          {address}
        </p>
      )}
    </div>
  );
}

export default ConnectWallet;