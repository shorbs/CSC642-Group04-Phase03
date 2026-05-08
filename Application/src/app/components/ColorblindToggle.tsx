import { useState } from 'react';
import { Eye, ChevronDown } from 'lucide-react';
import { useColorblind, ColorblindMode } from '../context/ColorblindContext';

export default function ColorblindToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const { mode, setMode, colors } = useColorblind();

  const modes: { value: ColorblindMode; label: string; description: string }[] = [
    { value: 'normal', label: 'NORMAL', description: 'Standard colors' },
    { value: 'anomalous', label: 'ANOMALOUS', description: 'Mild deficiency' },
    { value: 'dichromacy', label: 'DICHROMACY', description: 'Moderate/Severe' },
    { value: 'monochromacy', label: 'MONOCHROMACY', description: 'Total colorblind' },
  ];

  const currentMode = modes.find(m => m.value === mode) || modes[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-black border-2 transition-all font-bold tracking-wide"
        style={{
          borderColor: colors.border,
          color: colors.primary
        }}
      >
        <Eye className="w-4 h-4" />
        <span className="hidden md:inline text-xs">{currentMode.label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div
            className="absolute right-0 mt-2 w-64 bg-black border-4 z-50"
            style={{
              borderColor: colors.border,
              boxShadow: `0 0 30px ${colors.accent}80`
            }}
          >
            <div
              className="p-3 border-b-2"
              style={{ borderColor: colors.border }}
            >
              <p
                className="text-xs font-black tracking-wider"
                style={{ color: colors.primary }}
              >
                ★ COLORBLIND MODE ★
              </p>
            </div>
            <div className="p-2 space-y-1">
              {modes.map((modeOption) => (
                <button
                  key={modeOption.value}
                  onClick={() => {
                    setMode(modeOption.value);
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 border-2 transition-all"
                  style={mode === modeOption.value ? {
                    backgroundColor: colors.primary,
                    color: 'white',
                    borderColor: colors.accent,
                    boxShadow: `0 0 10px ${colors.accent}80`
                  } : {
                    backgroundColor: 'black',
                    color: colors.primary,
                    borderColor: `${colors.border}40`
                  }}
                >
                  <div className="font-black text-sm tracking-wide">{modeOption.label}</div>
                  <div
                    className="text-xs italic"
                    style={{ color: mode === modeOption.value ? 'rgba(255,255,255,0.8)' : colors.secondary }}
                  >
                    {modeOption.description}
                  </div>
                </button>
              ))}
            </div>
            <div
              className="p-2 border-t-2"
              style={{ borderColor: colors.border }}
            >
              <p
                className="text-xs italic text-center"
                style={{ color: colors.secondary }}
              >
                Accessibility Options
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
