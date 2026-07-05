import { createContext, useState } from "react";

export const ReferralContext = createContext();

export function ReferralProvider({ children }) {
  const [referrals, setReferrals] = useState(0);

  const referralCode = "NOVA-KINGKHAB";

  const referralLink = `https://novawallet.xyz/?ref=${referralCode}`;

  return (
    <ReferralContext.Provider
      value={{
        referrals,
        setReferrals,
        referralCode,
        referralLink,
      }}
    >
      {children}
    </ReferralContext.Provider>
  );
}