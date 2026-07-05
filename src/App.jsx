import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">◆</div>
        <h1 className="title">AI Wallet</h1>
        <p className="subtitle">Manage crypto with natural language</p>
      </header>

      <div className="balance-card">
        <span className="balance-label">Total Balance</span>
        <div className="balance-amount">
          <span className="amount">0.00</span>
          <span className="currency">ETH</span>
        </div>
        <span className="balance-usd">≈ $0.00 USD</span>
      </div>

      <div className="actions">
        <button type="button" className="action-btn send">
          <span className="btn-icon">↑</span>
          Send
        </button>
        <button type="button" className="action-btn receive">
          <span className="btn-icon">↓</span>
          Receive
        </button>
        <button type="button" className="action-btn ai">
          <span className="btn-icon">✦</span>
          AI Assistant
        </button>
      </div>
    </div>
  )
}

export default App
