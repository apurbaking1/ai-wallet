function WalletCard({ address, balance }) {
  return (
    <div className="balance-card">
      <h2>👛 Wallet</h2>

      <p>
        <strong>Status:</strong> 🟢 Connected
      </p>

      <p>
        <strong>Address:</strong><br />
        {address
          ? `${address.slice(0, 6)}...${address.slice(-4)}`
          : "Not Connected"}
      </p>

      <p>
        <strong>Balance:</strong><br />
        {balance || "0.0000"} ETH
      </p>
    </div>
  );
}

export default WalletCard;