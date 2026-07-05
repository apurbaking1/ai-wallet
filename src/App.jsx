import BalanceCard from "./components/BalanceCard";
import Header from "./components/Header";
import "./App.css";
function App() {
  return (
    <div className="app">
      <Header />

      <BalanceCard />

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
