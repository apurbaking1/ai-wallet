import { createContext, useState } from "react";

export const XPContext = createContext();

export function XPProvider({ children }) {
  const [xp, setXp] = useState(0);
  const [points, setPoints] = useState(0);

  return (
    <XPContext.Provider
      value={{
        xp,
        setXp,
        points,
        setPoints,
      }}
    >
      {children}
    </XPContext.Provider>
  );
}