function BalanceCard() {
  return (
    <div className="balance-card">
      <span className="balance-label">Total Balance</span>

      <div className="balance-amount">
        <span className="amount">0.00</span>
        <span className="currency">ETH</span>
      </div>

      <span className="balance-usd">≈ $0.00 USD</span>
    </div>
  );
}

export default BalanceCard;