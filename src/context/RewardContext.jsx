import { createContext, useState } from "react";

export const RewardContext = createContext();

export function RewardProvider({ children }) {
  const [nova, setNova] = useState(0);

  return (
    <RewardContext.Provider
      value={{
        nova,
        setNova,
      }}
    >
      {children}
    </RewardContext.Provider>
  );
}