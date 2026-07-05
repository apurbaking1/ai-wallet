function AIChat() {
  return (
    <div className="balance-card">
      <h3>🤖 AI Assistant</h3>

      <p>Try asking:</p>

      <input
        type="text"
        placeholder="Swap 100 USDC to ETH"
      />

      <br />
      <br />

      <button className="action-btn ai">
        Ask AI
      </button>
    </div>
  );
}

export default AIChat;