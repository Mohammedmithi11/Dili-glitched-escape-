import React from 'react';

export interface LogoProps {
  size?: number;
  showText?: boolean;
  withGlow?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  size = 40,
  showText = true,
  withGlow = true,
  className = '',
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2.5 select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <div
        className="relative flex items-center justify-center shrink-0 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.4)]"
        style={{ width: size, height: size }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#02102e] via-[#052b66] to-[#011438]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/25 via-blue-600/15 to-transparent pointer-events-none" />
        {withGlow && (
          <div className="absolute -inset-1 bg-cyan-400/20 blur-md rounded-2xl pointer-events-none animate-pulse" />
        )}
        <svg
          viewBox="0 0 100 100"
          className="relative z-10 w-[78%] h-[78%] drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 28 56 C 26 40, 36 26, 52 26 L 86 26 C 88 26, 89 28, 87 29 C 75 36, 64 42, 58 45 L 48 35 L 37 46 L 46 55 L 40 60 C 33 60, 30 58, 28 56 Z"
            fill="#ffffff"
          />
          <path
            d="M 72 44 C 74 60, 64 74, 48 74 L 14 74 C 12 74, 11 72, 13 71 C 25 64, 36 58, 42 55 L 52 65 L 63 54 L 54 45 L 60 40 C 67 40, 70 42, 72 44 Z"
            fill="#ffffff"
          />
          <polygon
            points="50,38 62,50 50,62 38,50"
            fill="#052861"
            stroke="#ffffff"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <polygon points="50,44 56,50 50,56 44,50" fill="#38bdf8" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left leading-none">
          <div className="flex items-center gap-1">
            <span className="font-black text-sm tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
              DLICOM
            </span>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono font-bold uppercase tracking-widest border border-cyan-500/30">
              CORE
            </span>
          </div>
          <span className="text-[9px] font-mono text-cyan-400/80 tracking-widest uppercase mt-0.5">
            ESCAPE THE GLITCH
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
