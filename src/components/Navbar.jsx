import { useContext } from "react";
import { Link } from "react-router-dom";
import { WalletContext } from "../context/WalletContext";
import { FaTrophy } from "react-icons/fa";

function Navbar() {
  const { wallet } = useContext(WalletContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h2 style={{ margin: 0 }}>🚀 Nova Wallet</h2>

        <small style={{ color: "#888" }}>
          AI Powered Web3 Wallet
        </small>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Link
          to="/leaderboard"
          style={{
            textDecoration: "none",
          }}
        >
          <button
            className="action-btn ai"
            style={{
              padding: "10px 14px",
            }}
          >
            <FaTrophy />
          </button>
        </Link>

        <div
          style={{
            background: wallet
              ? "#22c55e22"
              : "#ef444422",
            color: wallet
              ? "#22c55e"
              : "#ef4444",
            padding: "8px 14px",
            borderRadius: "999px",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          {wallet
            ? "● Connected"
            : "● Disconnected"}
        </div>
      </div>
    </div>
  );
}

export default Navbar;