import { useContext } from "react";
import { WalletContext } from "../context/WalletContext";

function BalanceCard() {
  const { wallet } = useContext(WalletContext);

  return (
    <div className="balance-card">
      <span className="balance-label">Total Balance</span>

      <div className="balance-amount">
        <span className="amount">
          {wallet ? Number(wallet.balance).toFixed(4) : "0.0000"}
        </span>

        <span className="currency">ETH</span>
      </div>

      <span className="balance-usd">
        {wallet ? "🟢 Wallet Connected" : "🔴 Wallet Not Connected"}
      </span>
    </div>
  );
}

export default BalanceCard;