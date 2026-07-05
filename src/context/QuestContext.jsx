import { createContext, useState } from "react";
import questsData from "../data/quests";

export const QuestContext = createContext();

export function QuestProvider({ children }) {
  const [quests, setQuests] = useState(questsData);

  function completeQuest(id) {
    setQuests((prev) =>
      prev.map((quest) =>
        quest.id === id
          ? { ...quest, completed: true }
          : quest
      )
    );
  }

  return (
    <QuestContext.Provider
      value={{
        quests,
        completeQuest,
      }}
    >
      {children}
    </QuestContext.Provider>
  );
}