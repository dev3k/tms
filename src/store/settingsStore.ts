import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface SettingsState {
  isActive: boolean;
  setIsActive: (activeState: boolean) => void;
}

const useSettingsStore = create<SettingsState>()(
  devtools(
    persist(
      (set) => ({
        isActive: false,
        setIsActive: (activeState: boolean) =>
          set(() => ({ isActive: activeState })),
      }),
      { name: "settingsStore" },
    ),
    {
      name: "settingsStore",
    },
  ),
);

export default useSettingsStore;
