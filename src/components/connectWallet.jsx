import { useContext } from "react";
import { WalletContext } from "../context/WalletContext";
import { connectWallet } from "../services/wallet";

function ConnectWallet() {
  const { wallet, setWallet } = useContext(WalletContext);

  async function handleConnect() {
    const data = await connectWallet();

    if (data) {
      setWallet(data);
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
        </>
      )}
    </div>
  );
}

export default ConnectWallet;