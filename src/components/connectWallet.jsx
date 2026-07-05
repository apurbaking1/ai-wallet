import { useState } from "react";
import { connectWallet } from "../services/wallet";

function ConnectWallet() {
  const [wallet, setWallet] = useState(null);

  async function handleConnect() {
    const data = await connectWallet();

    if (data) {
      setWallet(data);
    }
  }

  return (
    <div className="balance-card">
      <button className="action-btn ai" onClick={handleConnect}>
        🦊 Connect Wallet
      </button>

      {wallet && (
        <>
          <p style={{ marginTop: "20px", wordBreak: "break-all" }}>
            <strong>Address:</strong>
            <br />
            {wallet.address}
          </p>

          <p style={{ marginTop: "15px" }}>
            <strong>Balance:</strong>
            <br />
            {Number(wallet.balance).toFixed(4)} ETH
          </p>
        </>
      )}
    </div>
  );
}

export default ConnectWallet;