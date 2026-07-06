import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiTarget,
  FiUsers,
  FiUser,
  FiSettings,
} from "react-icons/fi";

function BottomNav() {
  const links = [
    { to: "/", label: "Home", icon: <FiHome /> },
    { to: "/quests", label: "Quests", icon: <FiTarget /> },
    { to: "/referral", label: "Referral", icon: <FiUsers /> },
    { to: "/profile", label: "Profile", icon: <FiUser /> },
    { to: "/settings", label: "Settings", icon: <FiSettings /> },
  ];

  return (
    <div className="bottom-nav">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          {link.icon}
          <small>{link.label}</small>
        </NavLink>
      ))}
    </div>
  );
}

export default BottomNav;