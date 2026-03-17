import { createContext, useContext, useState, type ReactNode } from "react";

interface SolutionContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const SolutionContext = createContext<SolutionContextType>({
  activeTab: "healthcare",
  setActiveTab: () => {},
});

export function SolutionProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState("healthcare");
  return (
    <SolutionContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </SolutionContext.Provider>
  );
}

export function useSolution() {
  return useContext(SolutionContext);
}
