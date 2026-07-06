const quests = [
  // Wallet
  {
    id: 1,
    title: "Connect Wallet",
    description: "Connect your wallet to Nova Wallet",
    category: "wallet",
    platform: "wallet",
    verifyType: "wallet",
    reward: 5,
    xp: 100,
    completed: false,
    completedAt: null,
    url: "",
  },

  // Social - X
  {
    id: 2,
    title: "Follow Nova on X",
    description: "Follow @NovaWallet_HQ on X",
    category: "social",
    platform: "x",
    verifyType: "follow",
    reward: 2,
    xp: 50,
    completed: false,
    completedAt: null,
    url: "https://x.com/NovaWallet_HQ",
  },

  {
    id: 3,
    title: "Like Pinned Post",
    description: "Like our latest pinned post on X",
    category: "social",
    platform: "x",
    verifyType: "like",
    reward: 2,
    xp: 50,
    completed: false,
    completedAt: null,
    url: "https://x.com/NovaWallet_HQ",
  },

  {
    id: 4,
    title: "Repost Pinned Post",
    description: "Repost our latest pinned post",
    category: "social",
    platform: "x",
    verifyType: "repost",
    reward: 3,
    xp: 75,
    completed: false,
    completedAt: null,
    url: "https://x.com/NovaWallet_HQ",
  },

  {
    id: 5,
    title: "Comment on Pinned Post",
    description: "Leave a meaningful comment on our pinned post",
    category: "social",
    platform: "x",
    verifyType: "comment",
    reward: 3,
    xp: 75,
    completed: false,
    completedAt: null,
    url: "https://x.com/NovaWallet_HQ",
  },

  // Telegram
  {
    id: 6,
    title: "Join Telegram",
    description: "Join the Nova Wallet Telegram community",
    category: "social",
    platform: "telegram",
    verifyType: "join",
    reward: 2,
    xp: 50,
    completed: false,
    completedAt: null,
    url: "https://t.me/nova_wallet_hq",
  },

  // Discord
  {
    id: 7,
    title: "Join Discord",
    description: "Join the Nova Wallet Discord server",
    category: "social",
    platform: "discord",
    verifyType: "join",
    reward: 2,
    xp: 50,
    completed: false,
    completedAt: null,
    url: "https://discord.gg/356Yjw5EAk",
  },

  // On-chain
  {
    id: 8,
    title: "Complete First Swap",
    description: "Swap any supported token",
    category: "onchain",
    platform: "swap",
    verifyType: "swap",
    reward: 20,
    xp: 300,
    completed: false,
    completedAt: null,
    url: "",
  },

  {
    id: 9,
    title: "Send First Transaction",
    description: "Send your first on-chain transaction",
    category: "onchain",
    platform: "send",
    verifyType: "transaction",
    reward: 10,
    xp: 200,
    completed: false,
    completedAt: null,
    url: "",
  },

  // Referral
  {
    id: 10,
    title: "Invite Your First Friend",
    description: "Invite 1 friend to unlock Referral Milestones",
    category: "referral",
    platform: "referral",
    verifyType: "referral",
    reward: 50,
    xp: 500,
    completed: false,
    completedAt: null,
    url: "",
  },

  // Daily
  {
    id: 11,
    title: "Daily Check-in",
    description: "Claim today's daily reward",
    category: "daily",
    platform: "daily",
    verifyType: "daily",
    reward: 1,
    xp: 25,
    completed: false,
    completedAt: null,
    url: "",
  },

  // AI
  {
    id: 12,
    title: "Use Nova AI",
    description: "Ask Nova AI your first Web3 question",
    category: "ai",
    platform: "ai",
    verifyType: "chat",
    reward: 5,
    xp: 100,
    completed: false,
    completedAt: null,
    url: "",
  },
];

export default quests;