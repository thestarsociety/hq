// store.ts
import { create } from 'zustand';

interface StoreState {
  progress: number;
  activeSection: number | null;
  navTo: number | null;
  setProgress: (progress: number) => void;
  setActiveSection: (section: number | null) => void;
  setNavTo: (section: number | null) => void;
}

const useStore = create<StoreState>((set) => ({
  progress: 0,
  activeSection: null,
  navTo: null,
  setProgress: (progress) => set({ progress }),
  setActiveSection: (section) => set({ activeSection: section }),
  setNavTo: (section) => set({ navTo: section }),
}));

export default useStore;