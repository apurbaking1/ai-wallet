function TokenList() {
  const tokens = [
    { name: "Ethereum", symbol: "ETH", balance: "2.45", price: "$6,120" },
    { name: "Bitcoin", symbol: "BTC", balance: "0.18", price: "$19,800" },
    { name: "USD Coin", symbol: "USDC", balance: "5000", price: "$5,000" },
  ];

  return (
    <div className="balance-card">
      <h2>🪙 My Assets</h2>

      {tokens.map((token) => (
        <div
          key={token.symbol}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <div>
            <strong>{token.symbol}</strong>
            <br />
            <small>{token.name}</small>
          </div>

          <div style={{ textAlign: "right" }}>
            <strong>{token.balance}</strong>
            <br />
            <small>{token.price}</small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TokenList;