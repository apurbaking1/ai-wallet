import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";

import Dashboard from "./pages/Dashboard";
import Send from "./pages/Send";
import Receive from "./pages/Receive";
import Swap from "./pages/Swap";
import AI from "./pages/AI";
import Quests from "./pages/Quests";
import Referral from "./pages/Referral";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/send" element={<Send />} />
          <Route path="/receive" element={<Receive />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/quests" element={<Quests />} />
          <Route path="/referral" element={<Referral />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route
  path="/leaderboard"
  element={<Leaderboard />}
/>
        </Routes>

        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;