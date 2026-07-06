import { createContext, useState } from "react";
import questsData from "../data/quests";

export const QuestContext = createContext();

export function QuestProvider({ children }) {
  const [quests, setQuests] = useState(questsData);

  // Complete Quest
  function completeQuest(id) {
    setQuests((prev) =>
      prev.map((quest) =>
        quest.id === id
          ? {
              ...quest,
              completed: true,
              completedAt: new Date().toISOString(),
            }
          : quest
      )
    );
  }

  // Verify Quest (same for now, later backend verification)
  function verifyQuest(id) {
    setQuests((prev) =>
      prev.map((quest) =>
        quest.id === id
          ? {
              ...quest,
              completed: true,
              completedAt: new Date().toISOString(),
            }
          : quest
      )
    );
  }

  // Reset Quest
  function resetQuest(id) {
    setQuests((prev) =>
      prev.map((quest) =>
        quest.id === id
          ? {
              ...quest,
              completed: false,
              completedAt: null,
            }
          : quest
      )
    );
  }

  // Reset All Quests (Admin/Future Use)
  function resetAllQuests() {
    setQuests(
      questsData.map((quest) => ({
        ...quest,
        completed: false,
        completedAt: null,
      }))
    );
  }

  return (
    <QuestContext.Provider
      value={{
        quests,
        completeQuest,
        verifyQuest,
        resetQuest,
        resetAllQuests,
      }}
    >
      {children}
    </QuestContext.Provider>
  );
}