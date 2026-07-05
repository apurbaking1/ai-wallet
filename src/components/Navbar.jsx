function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <h2>🤖 Nova Wallet</h2>

      <button className="action-btn ai">
        🟢 Connected
      </button>
    </div>
  );
}

export default Navbar;