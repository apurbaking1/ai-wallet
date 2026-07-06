import { createContext, useState } from "react";

export const DailyContext = createContext();

export function DailyProvider({ children }) {
  const [streak, setStreak] = useState(0);
  const [lastCheckIn, setLastCheckIn] = useState(null);

  function checkIn() {
    const today = new Date().toDateString();

    if (lastCheckIn !== today) {
      setStreak((prev) => prev + 1);
      setLastCheckIn(today);
      return true;
    }

    return false;
  }

  return (
    <DailyContext.Provider
      value={{
        streak,
        lastCheckIn,
        checkIn,
      }}
    >
      {children}
    </DailyContext.Provider>
  );
}