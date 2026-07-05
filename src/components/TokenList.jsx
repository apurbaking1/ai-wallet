function TokenList() {
  const tokens = [
    { name: "Ethereum", symbol: "ETH", balance: "0.0000" },
    { name: "USD Coin", symbol: "USDC", balance: "0.00" },
    { name: "Tether", symbol: "USDT", balance: "0.00" },
  ];

  return (
    <div className="balance-card">
      <h2>💼 Assets</h2>

      {tokens.map((token) => (
        <div
          key={token.symbol}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
            padding: "10px 0",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div>
            <strong>{token.symbol}</strong>
            <br />
            <small>{token.name}</small>
          </div>

          <div>{token.balance}</div>
        </div>
      ))}
    </div>
  );
}

export default TokenList;