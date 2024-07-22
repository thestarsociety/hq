import { create } from 'zustand';

type GlobalState = {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  scrollProgress: { [key: string]: number };
  setScrollProgress: (section: string, progress: number) => void;
};

export const useGlobalStore = create<GlobalState>((set) => ({
  isExpanded: false,
  setIsExpanded: (isExpanded) => set({ isExpanded }),
  activeSection: 'hero',
  setActiveSection: (section) => set({ activeSection: section }),
  scrollProgress: {},
  setScrollProgress: (section, progress) => 
    set((state) => ({ 
      scrollProgress: { 
        ...state.scrollProgress, 
        [section]: progress 
      } 
    })),
}));