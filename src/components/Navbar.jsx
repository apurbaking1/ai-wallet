import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "95%",
        maxWidth: "430px",
        display: "flex",
        justifyContent: "space-around",
        padding: "12px",
        borderRadius: "18px",
        background: "#18181b",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <NavLink to="/">🏠</NavLink>
      <NavLink to="/swap">🔄</NavLink>
      <NavLink to="/ai">🤖</NavLink>
      <NavLink to="/quests">🎯</NavLink>
      <NavLink to="/settings">⚙️</NavLink>
    </nav>
  );
}

export default Navbar;