import { createContext, useContext, useState, ReactNode } from 'react';

export type ColorblindMode = 'normal' | 'anomalous' | 'dichromacy' | 'monochromacy';

interface ColorblindContextType {
  mode: ColorblindMode;
  setMode: (mode: ColorblindMode) => void;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    border: string;
  };
}

const ColorblindContext = createContext<ColorblindContextType | undefined>(undefined);

const colorSchemes = {
  normal: {
    primary: 'rgb(219, 39, 119)', // pink-600
    secondary: 'rgb(168, 85, 247)', // purple-600
    accent: 'rgb(236, 72, 153)', // pink-500
    background: 'rgb(10, 10, 10)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(219, 39, 119)',
  },
  anomalous: {
    primary: 'rgb(59, 130, 246)', // blue-500
    secondary: 'rgb(234, 179, 8)', // yellow-500
    accent: 'rgb(14, 165, 233)', // sky-500
    background: 'rgb(10, 10, 10)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(59, 130, 246)',
  },
  dichromacy: {
    primary: 'rgb(249, 115, 22)', // orange-500
    secondary: 'rgb(37, 99, 235)', // blue-600
    accent: 'rgb(251, 146, 60)', // orange-400
    background: 'rgb(10, 10, 10)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(249, 115, 22)',
  },
  monochromacy: {
    primary: 'rgb(255, 255, 255)',
    secondary: 'rgb(156, 163, 175)', // gray-400
    accent: 'rgb(229, 231, 235)', // gray-200
    background: 'rgb(0, 0, 0)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(255, 255, 255)',
  },
};

export function ColorblindProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ColorblindMode>('normal');

  const colors = colorSchemes[mode];

  return (
    <ColorblindContext.Provider value={{ mode, setMode, colors }}>
      {children}
    </ColorblindContext.Provider>
  );
}

export function useColorblind() {
  const context = useContext(ColorblindContext);
  if (!context) {
    throw new Error('useColorblind must be used within ColorblindProvider');
  }
  return context;
}
